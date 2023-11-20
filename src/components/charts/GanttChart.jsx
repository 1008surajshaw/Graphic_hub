import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GanttChart = ({ data, searchingby }) => {
  const selectedName = searchingby?.name || '';
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(chartRef.current);
    const width = 800;
    const height = 400;

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(data, (d) => new Date(d.start)),
        d3.max(data, (d) => new Date(d.end)),
      ])
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d[selectedName]))
      .range([0, height])
      .padding(0.1); 

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(new Date(d.start)))
      .attr('y', (d) => yScale(d[selectedName]))
      .attr('width', (d) => xScale(new Date(d.end)) - xScale(new Date(d.start)))
      .attr('height', yScale.bandwidth())
      .attr('fill', (d) => colorScale(d[selectedName]));

   
    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d) => xScale(new Date(d.start)) + 5)
      .attr('y', (d) => yScale(d[selectedName]) + yScale.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .text((d) => `${d[selectedName]}`);
  }, [data, selectedName]);

  return <svg ref={chartRef} className='w-[90%] pt-3 flex mx-auto' height={500}></svg>;
};

export default GanttChart;
