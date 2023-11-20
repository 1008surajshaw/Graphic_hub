import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, searchingby }) => {
  const selectedName = searchingby?.name || '';
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

   
    const groupedData = d3.group(data, (d) => d[selectedName]);

   
    const aggregatedData = Array.from(groupedData, ([key, values]) => ({
      name: key,
      value: d3.sum(values, (d) => (d.relevance ? d.relevance : 0)), 
    }));

    const xScale = d3
      .scaleBand()
      .domain(aggregatedData.map((d) => d.name))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(aggregatedData, (d) => d.value)])
      .nice()
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.selectAll('*').remove(); 

    svg.attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    svg.selectAll('.bar')
      .data(aggregatedData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.name))
      .attr('width', xScale.bandwidth())
      .attr('y', (d) => yScale(d.value))
      .attr('height', (d) => height - yScale(d.value))
      .attr('fill', (d) => colorScale(d.name));
  }, [data, selectedName]);

  return <svg ref={chartRef} className='w-[90%] pt-3 flex mx-auto' height={400}></svg>;
};

export default BarChart;
