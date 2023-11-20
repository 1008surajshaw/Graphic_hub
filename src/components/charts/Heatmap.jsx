import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ data, searchingby }) => {
  const selectedName = searchingby?.name || '';
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

   
    const svg = d3.select(chartRef.current);
    const width = 600;
    const height = 400;

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x)) 
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.y)) 
      .range([0, height]);

    const colorScale = d3
      .scaleSequential(d3.interpolateBlues) 
      .domain([0, d3.max(data, (d) => d.value)]);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.x))
      .attr('y', (d) => yScale(d.y))
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .attr('fill', (d) => colorScale(d.value));


    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d) => xScale(d.x) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.y) + yScale.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text((d) => d.value);
  }, [data, selectedName]);

  return <svg ref={chartRef} className='w-[90%] pt-3 flex mx-auto' height={height}></svg>;
};

export default Heatmap;
