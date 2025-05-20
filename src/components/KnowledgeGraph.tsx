import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { graphData } from '../data/graphData';

interface KnowledgeGraphProps {
  onNodeSelect: (nodeId: string | null) => void;
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ onNodeSelect }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create links
    const link = svg.selectAll('.link')
      .data(graphData.links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1.5);

    // Create nodes group
    const node = svg.selectAll('.node')
      .data(graphData.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        onNodeSelect(d.id);
        // Highlight selected node
        d3.selectAll('.node circle').attr('stroke-width', 1);
        d3.select(event.currentTarget).select('circle').attr('stroke-width', 3);
      });

    // Add circles to nodes
    node.append('circle')
      .attr('r', (d) => getNodeSize(d.type))
      .attr('fill', (d) => getNodeColor(d.type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Add labels to nodes
    node.append('text')
      .attr('dy', 4)
      .attr('text-anchor', 'middle')
      .text((d) => d.name.length > 15 ? d.name.substring(0, 12) + '...' : d.name)
      .attr('font-size', '8px')
      .attr('fill', '#fff');

    // Create simulation
    const simulation = d3.forceSimulation(graphData.nodes)
      .force('link', d3.forceLink(graphData.links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(40));

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);
    });

    // Add zoom functionality
    const zoom = d3.zoom()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        svg.attr('transform', event.transform);
      });

    d3.select(svgRef.current)
      .call(zoom as any)
      .on('dblclick.zoom', null);

    // Drag functionality
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    node.call(
      d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any
    );

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [onNodeSelect]);

  // Helper functions
  const getNodeColor = (type: string) => {
    switch (type) {
      case 'agent': return '#1f2937';
      case 'system': return '#4b5563';
      case 'data': return '#6b7280';
      default: return '#9ca3af';
    }
  };

  const getNodeSize = (type: string) => {
    switch (type) {
      case 'agent': return 20;
      case 'system': return 15;
      case 'data': return 12;
      default: return 10;
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};