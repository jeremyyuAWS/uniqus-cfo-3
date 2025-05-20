import React from 'react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onDemoClick: () => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onDemoClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col h-full">
      <div className="p-5 flex-grow">
        <div className="text-gray-800 mb-3">
          {agent.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{agent.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{agent.painSolved}</p>
        
        <div className="bg-gray-50 rounded p-3 mb-3">
          <div className="text-sm font-medium text-gray-500">Key Impact</div>
          <div className="text-lg font-semibold text-gray-800">{agent.kpi}</div>
        </div>
        
        <div className="text-xs text-gray-500">
          <span className="font-medium">Capabilities:</span> {agent.capabilities}
        </div>
      </div>
      
      <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
        <button
          onClick={onDemoClick}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150"
        >
          Run Demo
        </button>
      </div>
    </div>
  );
};