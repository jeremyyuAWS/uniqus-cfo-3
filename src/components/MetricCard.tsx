import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-5 border border-gray-200 hover:shadow-card-hover transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="text-gray-800 p-2 bg-gray-50 rounded-full">
          {icon}
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
            change.isPositive
              ? 'bg-gray-100 text-gray-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {change.isPositive ? (
            <ArrowUpIcon className="w-3 h-3 mr-1" />
          ) : (
            <ArrowDownIcon className="w-3 h-3 mr-1" />
          )}
          {change.value}%
        </span>
        <span className="ml-2 text-xs text-gray-500">vs. Previous Period</span>
      </div>
    </div>
  );
};