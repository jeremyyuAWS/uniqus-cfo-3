import React from 'react';
import { Clock, TrendingDown, DollarSign, LineChart, PieChart } from 'lucide-react';

export const analyticsData = {
  metrics: [
    {
      title: 'Average DSO Reduction',
      value: '14.5 days',
      change: { value: 24, isPositive: true },
      icon: <TrendingDown className="h-5 w-5" />
    },
    {
      title: 'Close Cycle Time',
      value: '5.2 days',
      change: { value: 48, isPositive: true },
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'Working Capital Yield',
      value: '+4.7%',
      change: { value: 3.2, isPositive: true },
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: 'Automation Rate',
      value: '73%',
      change: { value: 35, isPositive: true },
      icon: <LineChart className="h-5 w-5" />
    }
  ],
  
  timeSavingsData: [
    { name: 'Cash-Flow Forecasting', value: 86, color: '#1f2937' },
    { name: 'Collections', value: 72, color: '#374151' },
    { name: 'Payment Optimization', value: 65, color: '#4b5563' },
    { name: 'Close Cycle', value: 55, color: '#6b7280' },
    { name: 'Transfer Pricing', value: 82, color: '#4b5563' },
    { name: 'Revenue Recognition', value: 64, color: '#6b7280' }
  ],
  
  workingCapitalData: [
    {
      series: 'Before OGI',
      values: [
        { date: 'Jan', value: 32 },
        { date: 'Feb', value: 36 },
        { date: 'Mar', value: 39 },
        { date: 'Apr', value: 42 },
        { date: 'May', value: 45 },
        { date: 'Jun', value: 43 }
      ],
      color: '#9ca3af'
    },
    {
      series: 'After OGI',
      values: [
        { date: 'Jan', value: 32 },
        { date: 'Feb', value: 28 },
        { date: 'Mar', value: 24 },
        { date: 'Apr', value: 22 },
        { date: 'May', value: 20 },
        { date: 'Jun', value: 19 }
      ],
      color: '#1f2937'
    }
  ],
  
  forecastAccuracyData: [
    { name: 'Cash Forecasting', value: 92, color: '#1f2937' },
    { name: 'Revenue Forecast', value: 87, color: '#374151' },
    { name: 'Expense Forecast', value: 90, color: '#4b5563' },
    { name: 'FX Projection', value: 84, color: '#6b7280' },
    { name: 'AR Collection', value: 88, color: '#9ca3af' }
  ]
};