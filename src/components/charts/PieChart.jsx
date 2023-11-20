import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, searchingby }) => {
  const selectedName = searchingby?.name || '';
  const chartRef = useRef();

  useEffect(() => {
    
    if (!data || data.length === 0) return;
  
  
    const svg = d3.select(chartRef.current);
    const width = 600;
    const height = 400;
    const radius = Math.min(width, height) / 2;
  
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  

    const groupedData = d3.group(data, (d) => d[selectedName]);
  
   
    const aggregatedData = Array.from(groupedData, ([key, values]) => ({
      name: key,
      value: d3.sum(values, (d) => (d.relevance ? d.relevance : 0)), 
    }));
  
    const pie = d3.pie().value((d) => d.value); 
    const arc = d3.arc().outerRadius(radius - 10).innerRadius(0);
  
    const arcs = svg
      .selectAll('.arc')
      .data(pie(aggregatedData))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('transform', `translate(${width / 2},${height / 2})`);
  
    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => colorScale(d.data.name));
  
    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle');
  
    
    const legend = svg
      .selectAll('.legend')
      .data(colorScale.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(${width + 20},${i * 20})`);
  
    legend
      .append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', colorScale);
  
    legend
      .append('text')
      .attr('x', 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'start')
      .attr('fill', 'richblack-5')
      .text((d) => `${d}`);
  }, [data, selectedName]);

  return <svg ref={chartRef} className='w-[90%] pt-3 flex mx-auto' height={400} ></svg>;
};

export default PieChart;


