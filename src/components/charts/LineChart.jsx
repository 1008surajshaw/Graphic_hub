import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, searchingby }) => {
  const selectedName = searchingby?.name || '';
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(chartRef.current);
    const width = 600;
    const height = 400;

    const groupedData = d3.group(data, (d) => d[selectedName]);

    const aggregatedData = Array.from(groupedData, ([key, values]) => ({
      name: key,
      values: values.map((d) => ({
        date: new Date(d.date),
        value: d.relevance ? d.relevance : 0,
      })),
    }));

   
    const filteredData = aggregatedData.filter((entry) => entry.name !== '');

    
    const cleanData = filteredData.map((entry) => ({
      name: entry.name,
      values: entry.values.filter((d) => !isNaN(d.value)),
    }));

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(cleanData, (d) => d3.min(d.values, (v) => v.date)),
        d3.max(cleanData, (d) => d3.max(d.values, (v) => v.date)),
      ])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(cleanData, (d) => d3.max(d.values, (v) => v.value)),
      ])
      .range([height, 0]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(cleanData.map((d) => d.name));

    svg.selectAll('.line-group').remove(); // Remove existing lines

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    const lines = svg
      .selectAll('.line-group')
      .data(cleanData)
      .enter()
      .append('g')
      .attr('class', 'line-group');

    lines
      .append('path')
      .attr('class', 'line')
      .attr('d', (d) => line(d.values))
      .attr('fill', 'none')
      .attr('stroke', (d) => colorScale(d.name));

   
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    
    svg.append('g').call(d3.axisLeft(yScale));
  }, [data, selectedName]);

  return (
    <svg ref={chartRef} className='w-[90%] pt-3 flex mx-auto' height={400}></svg>
  );
};

export default LineChart;
