import React from 'react';
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';
import { MetricCard } from '../MetricCard';
import { analyticsData } from '../../data/analyticsData';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600">
          Measured impact of OGI agents across key financial metrics and operational efficiency indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Time Savings by Agent</h3>
          <div className="h-80">
            <BarChart data={analyticsData.timeSavingsData} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Working Capital Impact</h3>
          <div className="h-80">
            <LineChart data={analyticsData.workingCapitalData} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Agent Forecast Accuracy</h3>
        <div className="h-80">
          <BarChart data={analyticsData.forecastAccuracyData} horizontal={true} />
        </div>
      </div>
    </div>
  );
};