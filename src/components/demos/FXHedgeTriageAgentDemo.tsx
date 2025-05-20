import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { BarChart4, TrendingUp, Bell, Eye, FileText, LineChart } from 'lucide-react';

export const FXHedgeTriageAgentDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial exposure analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Euro Exposure Analysis (Q3 2025)</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium text-gray-900">Net EUR Position</div>
          <div className="text-gray-800 text-xl font-bold">€8.2M short</div>
        </div>
        <div className="text-sm text-gray-600 mb-4">(expecting to receive)</div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-700">Revenue Inflows</div>
              <div className="text-sm font-medium text-gray-900">€12.7M</div>
            </div>
            <div className="text-xs text-gray-500 mb-2">primarily EMEA SaaS contracts</div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full" style={{ width: '73%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-700">Expense Outflows</div>
              <div className="text-sm font-medium text-gray-900">€4.5M</div>
            </div>
            <div className="text-xs text-gray-500 mb-2">EMEA operations + AWS EU hosting</div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-gray-500 h-2 rounded-full" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Key Risk Factors</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">EUR/USD currently:</span>
            <span className="font-medium text-gray-900">1.12 (+4.2% from Q2 avg)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Forward curve implies:</span>
            <span className="font-medium text-gray-900">1.8% weakening over 3 months</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">ECB meeting on July 18:</span>
            <span className="font-medium text-gray-900">65% probability of rate cut</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Volatility measure:</span>
            <span className="font-medium text-gray-900">14.5 (18-month high)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Current Hedges</h4>
        <div className="space-y-2 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">€3M forward contract at 1.085</span>
            <span className="font-medium text-gray-900">Expires July 15</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">€1.5M forward contract at 1.092</span>
            <span className="font-medium text-gray-900">Expires August 30</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
          <span className="text-sm text-gray-700">Effective hedge ratio:</span>
          <span className="text-sm font-medium text-gray-900">55% of Q3 exposure</span>
        </div>
      </div>
    </>,
    
    // Stage 1: Hedging recommendations
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Hedging Recommendation</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">Strategy Recommendation</h4>
          <div className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full">
            Recommended
          </div>
        </div>
        
        <div className="mt-3 space-y-3">
          <div className="flex items-start space-x-2 text-sm">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Increase hedge ratio to 75%</span> given elevated volatility
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Execute €2.5M forward</span> at current 1.12 rate (3-month)
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Consider €1M options collar</span> for remaining exposure
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-2 bg-gray-50 rounded-md text-sm">
          <div className="font-medium text-gray-900 mb-1">Estimated EPS impact:</div>
          <div className="text-gray-700">+12-18 basis points vs. unhedged position</div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Forward Contract Execution</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">Amount</div>
            <div className="text-lg font-semibold text-gray-900">€2.5M</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Rate</div>
            <div className="text-lg font-semibold text-gray-900">1.12 EUR/USD</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Term</div>
            <div className="text-lg font-semibold text-gray-900">3 months</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Bank</div>
            <div className="text-lg font-semibold text-gray-900">JP Morgan</div>
          </div>
        </div>
        <div className="text-xs text-gray-500">Settling September 30, 2025</div>
      </div>
      
      <ChartComponent
        type={ChartType.Bar}
        height={200}
        title="P&L Impact Scenarios"
        data={{
          labels: ['Base Case\n(EUR -1.8%)', 'Downside\n(EUR +2.7%)', 'Upside\n(EUR -6.3%)'],
          datasets: [
            {
              label: 'Net P&L Impact ($000s)',
              data: [46.5, -78.5, 171.5],
              backgroundColor: ['#4b5563', '#ef4444', '#10b981']
            }
          ]
        }}
      />
    </>,
    
    // Stage 2: Execution and alerts
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Forward Contract Execution & Alerts</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-gray-900">Trade Confirmation</h4>
          <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
            Executed
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Trade ID:</span>
            <span className="font-medium text-gray-900">FWD-EUR-20250701-01</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Confirmation sent to:</span>
            <span className="font-medium text-gray-900">Treasury inbox</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Settlement instructions:</span>
            <span className="font-medium text-gray-900">Verified</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Hedge accounting:</span>
            <span className="font-medium text-gray-900">Logged in system</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Configured Alerts</h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Bell className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Exposure Change Alerts</div>
              <div className="text-sm text-gray-600">
                Trigger: ±10% change in EUR receivables/payables
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Source: Daily AR/AP feed + new contracts
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Bell className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Market Movement Alerts</div>
              <div className="text-sm text-gray-600">
                Trigger: EUR/USD moves ±2% in single day
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Source: Real-time FX data feed
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Bell className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Hedge Ratio Alerts</div>
              <div className="text-sm text-gray-600">
                Trigger: Overall hedge ratio drops below 65%
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Source: Weekly hedge effectiveness calculation
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Bell className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Volatility Alerts</div>
              <div className="text-sm text-gray-600">
                Trigger: EUR implied volatility exceeds 16%
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Source: Options market data
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Current Hedge Position</h4>
        <div className="space-y-2 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Hedge amount:</span>
            <span className="font-medium text-gray-900">€7M of €8.2M exposure</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Hedge ratio:</span>
            <span className="font-medium text-gray-900">85%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Weighted average hedge rate:</span>
            <span className="font-medium text-gray-900">1.099</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <div className="flex justify-between mb-1">
            <div className="text-sm font-medium text-gray-700">Expected Q3 P&L benefit:</div>
            <div className="text-sm font-medium text-gray-900">$230,000 - $275,000</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-medium text-gray-700">Projected EPS impact:</div>
            <div className="text-sm font-medium text-gray-900">+45 bps (range: +36 to +54 bps)</div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">FX Hedge-Triage Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <Eye className="h-5 w-5" />,
            title: "Exposure Monitoring",
            description: "Real-time transaction monitoring and currency exposure calculation"
          },
          {
            icon: <LineChart className="h-5 w-5" />,
            title: "Risk Assessment",
            description: "Market data analysis and volatility-based risk scoring"
          },
          {
            icon: <BarChart4 className="h-5 w-5" />,
            title: "Strategy Recommendation",
            description: "AI-powered hedging strategy selection and optimization"
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Execution & Reporting",
            description: "Trade execution, effectiveness analysis, and reporting"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="FX Risk Management Dashboard"
          description="Currency exposure tracking, hedging analysis, and trade recommendation simulation with EPS impact visualization."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Annual Impact</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">+80 bps</div>
            <div className="text-sm text-gray-500">EPS Contribution</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">-65%</div>
            <div className="text-sm text-gray-500">FX Volatility</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};