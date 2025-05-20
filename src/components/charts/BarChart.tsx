import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface BarChartProps {
  data: {
    name: string;
    value: number;
    color?: string;
  }[];
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ data, horizontal = false }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current || !data.length) return;

    // Clear any existing chart
    d3.select(chartRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = chartRef.current.clientWidth - margin.left - margin.right;
    const height = chartRef.current.clientHeight - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = horizontal
      ? d3.scaleLinear().range([0, width]).domain([0, d3.max(data, d => d.value) || 0])
      : d3.scaleBand().range([0, width]).domain(data.map(d => d.name)).padding(0.3);

    const yScale = horizontal
      ? d3.scaleBand().range([0, height]).domain(data.map(d => d.name)).padding(0.3)
      : d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d.value) || 0]);

    // Axes
    const xAxis = horizontal
      ? d3.axisBottom(xScale).ticks(5)
      : d3.axisBottom(xScale);

    const yAxis = horizontal
      ? d3.axisLeft(yScale)
      : d3.axisLeft(yScale).ticks(5);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-35)");

    svg.append("g")
      .call(yAxis);

    // Bars
    if (horizontal) {
      svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("y", d => yScale(d.name) || 0)
        .attr("height", yScale.bandwidth())
        .attr("x", 0)
        .attr("width", 0)
        .attr("fill", d => d.color || "#4080ff")
        .transition()
        .duration(800)
        .attr("width", d => xScale(d.value));

      // Add value labels at the end of each bar
      svg.selectAll(".value-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "value-label")
        .attr("x", d => xScale(d.value) + 5)
        .attr("y", d => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
        .attr("dy", ".35em")
        .text(d => d.value)
        .style("fill", "#666")
        .style("font-size", "10px")
        .style("opacity", 0)
        .transition()
        .duration(800)
        .style("opacity", 1);
    } else {
      svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.name) || 0)
        .attr("width", xScale.bandwidth())
        .attr("y", height)
        .attr("height", 0)
        .attr("fill", d => d.color || "#4080ff")
        .transition()
        .duration(800)
        .attr("y", d => yScale(d.value))
        .attr("height", d => height - yScale(d.value));

      // Add value labels on top of each bar
      svg.selectAll(".value-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "value-label")
        .attr("x", d => (xScale(d.name) || 0) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.value) - 5)
        .attr("text-anchor", "middle")
        .text(d => d.value)
        .style("fill", "#666")
        .style("font-size", "10px")
        .style("opacity", 0)
        .transition()
        .duration(800)
        .style("opacity", 1);
    }

  }, [data, horizontal]);

  return (
    <div className="w-full h-full">
      <svg ref={chartRef} className="w-full h-full"></svg>
    </div>
  );
};