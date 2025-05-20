import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface LineChartProps {
  data: {
    series: string;
    values: { date: string; value: number }[];
    color?: string;
  }[];
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current || !data.length) return;

    // Clear any existing chart
    d3.select(chartRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 60, bottom: 60, left: 60 };
    const width = chartRef.current.clientWidth - margin.left - margin.right;
    const height = chartRef.current.clientHeight - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Combine all dates from all series for the domain
    const allDates = data.flatMap(series => series.values.map(d => d.date));
    const uniqueDates = [...new Set(allDates)].sort();

    // Find min and max values across all series
    const allValues = data.flatMap(series => series.values.map(d => d.value));
    const minValue = d3.min(allValues) || 0;
    const maxValue = d3.max(allValues) || 0;
    const yDomain = [Math.min(0, minValue), maxValue * 1.1]; // Add some padding at the top

    // Scales
    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(uniqueDates)
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain(yDomain);

    // Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

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

    // Line generator
    const line = d3.line<{ date: string; value: number }>()
      .x(d => (xScale(d.date) || 0) + xScale.bandwidth() / 2)
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Draw lines for each series
    data.forEach(series => {
      const path = svg.append("path")
        .datum(series.values)
        .attr("fill", "none")
        .attr("stroke", series.color || "#4080ff")
        .attr("stroke-width", 2)
        .attr("d", line);

      // Animate the line
      const totalLength = path.node()?.getTotalLength() || 0;
      path.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1000)
        .attr("stroke-dashoffset", 0);

      // Add dots for each data point
      svg.selectAll(`.dot-${series.series}`)
        .data(series.values)
        .enter()
        .append("circle")
        .attr("class", `dot-${series.series}`)
        .attr("cx", d => (xScale(d.date) || 0) + xScale.bandwidth() / 2)
        .attr("cy", d => yScale(d.value))
        .attr("r", 0)
        .attr("fill", series.color || "#4080ff")
        .transition()
        .delay((_, i) => i * 150)
        .duration(300)
        .attr("r", 4);
    });

    // Add legend
    const legend = svg.append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width - 100}, 0)`);

    data.forEach((series, i) => {
      const legendItem = legend.append("g")
        .attr("transform", `translate(0, ${i * 20})`);

      legendItem.append("rect")
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", series.color || "#4080ff");

      legendItem.append("text")
        .attr("x", 20)
        .attr("y", 10)
        .text(series.series)
        .style("font-size", "12px")
        .style("fill", "#666");
    });

  }, [data]);

  return (
    <div className="w-full h-full">
      <svg ref={chartRef} className="w-full h-full"></svg>
    </div>
  );
};