import React, { useState } from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { DollarSign, ArrowUp, TrendingUp, BarChart } from 'lucide-react';

export const CashFlowForecasterDemo: React.FC = () => {
  // Scenario toggles
  const [scenario, setScenario] = useState<'original' | 'ar' | 'credit'>('ar');
  const [drilldown, setDrilldown] = useState<{ label: string; value: number } | null>(null);

  // Data for each scenario
  const chartData = {
    original: [4.2, 4.8, 5.1, 4.6, 3.2, 2.6, 3.9],
    ar: [4.2, 4.8, 5.1, 5.8, 4.7, 4.1, 5.2],
    credit: [4.2, 4.8, 5.1, 4.6, 4.2, 4.1, 4.9],
  };

  const summary = {
    original: { dso: '4.6 days', yield: '+2.1 pp', interest: '$0' },
    ar: { dso: '2.3 days', yield: '+4.2 pp', interest: '$14,300' },
    credit: { dso: '4.6 days', yield: '+2.7 pp', interest: '$7,800' },
  };

  // Sample industry benchmark (flat line for demo)
  const industryBenchmark = {
    label: 'Industry Benchmark',
    data: [3.8, 4.0, 4.1, 4.2, 4.1, 4.0, 4.1],
    borderColor: '#f59e42',
    backgroundColor: 'rgba(245, 158, 66, 0.08)',
    borderWidth: 2,
    borderDash: [6, 4],
    pointRadius: 0,
    fill: false,
    hidden: false,
  };

  const stages = [
    // Stage 0: Initial forecast visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Tech Division 30-Day Cash Forecast</h3>
      <ChartComponent
        type={ChartType.Line}
        height={250}
        data={{
          labels: [
            'Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20', 'Apr 25', 'Apr 30'
          ],
          datasets: [
            {
              label: 'Predicted Cash Balance',
              data: [4.2, 4.8, 5.1, 4.6, 3.2, 2.6, 3.9],
              borderColor: '#1f2937',
              backgroundColor: 'rgba(31, 41, 55, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Minimum Threshold',
              data: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderWidth: 1,
              borderDashed: [5, 5],
              pointRadius: 0
            }
          ]
        }}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: 'Cash (Millions $)'
              }
            }
          },
          plugins: {
            annotation: {
              annotations: {
                box1: {
                  type: 'box',
                  xMin: 'Apr 15',
                  xMax: 'Apr 25',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: 'rgba(239, 68, 68, 0.5)'
                }
              }
            }
          }
        }}
      />
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-2">Potential Liquidity Gap Detected</h4>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">AWS Invoice Payment:</span> $1.2M due Apr 20
          </div>
        </div>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">Payroll:</span> $3.4M due Apr 18
          </div>
        </div>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">Cash minimum threshold:</span> $3.5M
          </div>
        </div>
      </div>
    </>,
    
    // Stage 1: Option scenarios
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Liquidity Gap Resolution Options</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 1: Accelerate AR Collections</h4>
              <p className="text-sm text-gray-600 mt-1">Microsoft & Adobe invoices: $1.8M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              90% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <ArrowUp className="h-4 w-4 text-gray-800 mr-1.5" />
              <span className="text-gray-700">Highest ROI option</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 2: Delay AWS Payment</h4>
              <p className="text-sm text-gray-600 mt-1">7-day payment extension: $1.2M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              100% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-gray-500 mr-1.5" />
              <span className="text-gray-700">No penalty per terms</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 3: Draw from Credit Facility</h4>
              <p className="text-sm text-gray-600 mt-1">Revolving credit draw: $2M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              100% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <BarChart className="h-4 w-4 text-gray-500 mr-1.5" />
              <span className="text-gray-700">Current utilization: 15%</span>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Solution impact
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Working Capital Impact: {scenario === 'ar' ? 'AR Acceleration' : scenario === 'credit' ? 'Credit Draw' : 'Original Forecast'}</h3>
      {/* Scenario toggles */}
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${scenario === 'original' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setScenario('original')}
        >
          Original
        </button>
        <button
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${scenario === 'ar' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setScenario('ar')}
        >
          With AR Acceleration
        </button>
        <button
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${scenario === 'credit' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setScenario('credit')}
        >
          With Credit Draw
        </button>
      </div>
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm text-center">
          <div className="text-sm text-gray-500">DSO Reduction</div>
          <div className="text-2xl font-semibold text-blue-700">{summary[scenario].dso}</div>
          <div className="text-xs text-gray-500 mt-1">This quarter</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm text-center">
          <div className="text-sm text-gray-500">Yield Increase</div>
          <div className="text-2xl font-semibold text-blue-700">{summary[scenario].yield}</div>
          <div className="text-xs text-gray-500 mt-1">vs. Credit Facility</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm text-center">
          <div className="text-sm text-gray-500">Interest Income</div>
          <div className="text-2xl font-semibold text-blue-700">{summary[scenario].interest}</div>
          <div className="text-xs text-gray-500 mt-1">Projected</div>
        </div>
      </div>
      {/* Distinct chart with area fill, annotation, improved legend, industry benchmark, and drill-down */}
      <ChartComponent
        type={ChartType.Line}
        height={220}
        data={{
          labels: [
            'Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20', 'Apr 25', 'Apr 30'
          ],
          datasets: [
            {
              label: 'Original Forecast',
              data: chartData.original,
              borderColor: '#9ca3af',
              backgroundColor: 'rgba(156, 163, 175, 0.08)',
              borderWidth: 1,
              tension: 0.4,
              fill: scenario === 'original',
              pointRadius: 2,
              hidden: scenario !== 'original',
            },
            {
              label: 'With AR Acceleration',
              data: chartData.ar,
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.15)',
              borderWidth: 2,
              tension: 0.4,
              fill: scenario === 'ar',
              pointRadius: 3,
              hidden: scenario !== 'ar',
            },
            {
              label: 'With Credit Draw',
              data: chartData.credit,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              borderWidth: 2,
              tension: 0.4,
              fill: scenario === 'credit',
              pointRadius: 3,
              hidden: scenario !== 'credit',
            },
            {
              label: 'Minimum Threshold',
              data: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0)',
              borderWidth: 1,
              borderDash: [5, 5],
              pointRadius: 0,
              fill: false,
            }
          ]
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                usePointStyle: true,
                font: { size: 13 },
                color: '#374151',
              }
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}M`;
                }
              }
            },
            annotation: {
              annotations: {
                impact: scenario === 'ar' ? {
                  type: 'box',
                  xMin: 3,
                  xMax: 4,
                  yMin: 3.5,
                  yMax: 5.8,
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  borderColor: '#2563eb',
                  borderWidth: 1,
                  label: {
                    content: 'AR Acceleration Impact',
                    enabled: true,
                    position: 'start',
                    color: '#2563eb',
                    font: { weight: 'bold' }
                  }
                } : undefined
              }
            }
          },
          scales: {
            y: {
              title: {
                display: true,
                text: 'Cash (Millions $)'
              },
              min: 2,
              max: 6.5,
              grid: { color: '#f3f4f6' },
              ticks: { color: '#6b7280' }
            },
            x: {
              grid: { color: '#f3f4f6' },
              ticks: { color: '#6b7280' }
            }
          }
        }}
        extraDatasets={[industryBenchmark]}
        onPointClick={({ label, value }) => setDrilldown({ label, value })}
      />
      
      <div className="mt-4">
        <h4 className="font-medium text-gray-900 mb-2">Actions Implemented</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            AR acceleration notices prepared for Microsoft and Adobe
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Treasury dashboard updated with new cash flow forecast
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            AR team alerted to prioritize follow-up calls
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Additional interest income: $14,300 projected
          </li>
        </ul>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cash-Flow Forecaster Process</h3>
      <ProcessFlow
        steps={[
          {
            icon: <DollarSign className="h-5 w-5" />,
            title: "Data Collection",
            description: "Integrates with ERP, banking systems, CRM for real-time cash positions"
          },
          {
            icon: <BarChart className="h-5 w-5" />,
            title: "AI Forecasting",
            description: "Combines historical patterns with ML to predict future cash positions"
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            title: "Scenario Modeling",
            description: "Runs Monte Carlo simulations for variable outcomes"
          },
          {
            icon: <ArrowUp className="h-5 w-5" />,
            title: "Action Execution",
            description: "Implements optimal solutions via banking and ERP integration"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Treasury Management Dashboard"
          description="Interactive cash flow dashboard with scenarios, triggers, and optimization recommendations."
        />
      </div>
    </>
  ];
  
  return <>{stages}</>;
};