import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { BarChart, TrendingDown, TrendingUp, LineChart, FileText, CreditCard } from 'lucide-react';

export const ScenarioPlanningCopilotDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial borrowing cost impact analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">5% Borrowing Cost Increase: 2026 Plan Impact</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Direct Financial Impacts</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">1. Interest Expense</div>
              <div className="text-sm font-medium text-gray-900">+$3.2M annually (+14.8%)</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Floating rate debt impact: +$2.4M</div>
              <div>• Refinancing impact (2026 maturities): +$0.8M</div>
              <div>• Net margin impact: -60 basis points</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">2. Cash Flow Impact</div>
              <div className="text-sm font-medium text-gray-900">-$2.7M (after tax effects)</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Working capital strategy adjustments recommended</div>
              <div>• Capex reprioritization opportunity: $1.8M</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">3. Covenant Considerations</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Interest coverage ratio: 5.2x → 4.6x (covenant: 3.0x)</div>
              <div>• Net leverage ratio: 2.1x → 2.2x (covenant: 3.5x)</div>
              <div>• Status: All covenants still met with adequate headroom</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Secondary Effects</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">1. Customer Impact</div>
              <div className="text-sm font-medium text-gray-900">Moderate</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Potential extended sales cycles in interest-rate sensitive sectors</div>
              <div>• Affected segments: Real Estate (-4.2%), Financial Services (-2.8%)</div>
              <div>• Projected impact: -$1.2M in pipeline conversion</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">2. Competitive Position</div>
              <div className="text-sm font-medium text-gray-900">Limited Impact</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Lower leverage vs. key competitors (avg. 3.1x vs. our 2.2x)</div>
              <div>• Potential opportunity: Distressed competitor acquisition</div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 1: Mitigation strategies and 10% revenue miss
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Mitigation Strategies</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Borrowing Cost Mitigation Options</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">1. Hedging Opportunities</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Convert $40M floating to fixed via swap</div>
              <div>• Current 5Y swap rate: 3.85%</div>
              <div>• Annual savings vs. projected increase: $1.2M</div>
              <div>• Implementation time: 3-4 weeks</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">2. Debt Optimization</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Accelerate $25M debt repayment from excess cash</div>
              <div>• Savings: $1.1M annually</div>
              <div>• Working capital impact: Manageable with proposed inventory reduction</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">3. Expense Management</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Identified $4.2M in discretionary cost reductions</div>
              <div>• Low business impact areas: T&E, select marketing programs, facilities consolidation</div>
              <div>• Implementation timeline: 60-90 days</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">4. Pricing Strategy Adjustment</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Targeted 1.5% price increase for enterprise contracts</div>
              <div>• Revenue impact: +$3.8M</div>
              <div>• Churn risk: Minimal (historical elasticity data supports)</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-md text-sm">
          <div className="font-medium text-gray-900 mb-1">Recommended action package:</div>
          <div className="text-gray-700">Items 1 & 3 (sufficient to offset impact)</div>
          <div className="text-gray-700 mt-1">Net projected outcome: EBIT impact reduced from -$3.2M to -$0.3M</div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">10% Revenue Miss Scenario</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">1. Financial Impact</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Revenue Shortfall: -$42.5M (-10%)</div>
              <div>• Gross margin impact: -$29.8M (70% flow-through)</div>
              <div>• EBITDA impact: -$21.4M (-32% vs. plan)</div>
              <div>• EPS impact: -$0.84 (-45% vs. plan)</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">2. Cash Impact</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Cash impact: -$16.8M vs. plan</div>
              <div>• Covenant status: Still compliant but with minimal cushion</div>
              <div>• Interest coverage: 2.8x (covenant: 2.5x)</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">3. Combined with Interest Rate Scenario</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 pl-4 mt-1">
              <div>• Covenant breach risk: Moderate</div>
              <div>• Liquidity pressure: High</div>
              <div>• Incremental mitigation needed: $5.2M</div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Risk indicators and mitigation levers
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Indicators & Mitigation Levers</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Early Warning Signs to Monitor</h4>
        <div className="space-y-2">
          <div className="flex items-center bg-gray-50 p-2 rounded-md">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <CreditCard className="h-4 w-4 text-gray-700" />
            </div>
            <div className="text-sm text-gray-700">
              Pipeline conversion rate drops &gt;5 percentage points
            </div>
          </div>
          
          <div className="flex items-center bg-gray-50 p-2 rounded-md">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <LineChart className="h-4 w-4 text-gray-700" />
            </div>
            <div className="text-sm text-gray-700">
              Sales cycle extends &gt;15 days vs. baseline
            </div>
          </div>
          
          <div className="flex items-center bg-gray-50 p-2 rounded-md">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <TrendingDown className="h-4 w-4 text-gray-700" />
            </div>
            <div className="text-sm text-gray-700">
              Churn increases &gt;2 percentage points in any segment
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Trigger Points for Mitigation Activation</h4>
        <div className="space-y-2">
          <div className="flex items-center bg-gray-50 p-2 rounded-md">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <TrendingDown className="h-4 w-4 text-gray-700" />
            </div>
            <div className="text-sm text-gray-700">
              Q1 bookings miss &gt;7%
            </div>
          </div>
          
          <div className="flex items-center bg-gray-50 p-2 rounded-md">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <LineChart className="h-4 w-4 text-gray-700" />
            </div>
            <div className="text-sm text-gray-700">
              Two consecutive months of ARR growth &lt;2%
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Additional Mitigation Levers (if triggered)</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lever
                </th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Annual Impact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">Headcount freeze</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-right">$8.6M</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">Marketing reduction</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-right">$5.4M</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">Capex deferral</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-right">$12M</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">Restructured vendor contracts</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-right">$4.2M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>,
    
    // Stage 3: Early warning dashboard and process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Early Warning Dashboard</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium text-gray-900">Dashboard Details</h4>
          <div className="text-xs text-gray-500">
            Refresh: Daily metrics, weekly summary
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="font-medium text-gray-900 text-sm mb-2">1. Revenue Risk Indicators</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pipeline Coverage Ratio (Target: &gt;3.5x)</span>
                <div>
                  <span className="font-medium text-gray-900">3.8x</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &lt;3.3x</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Win Rate by Segment</span>
                <div>
                  <span className="font-medium text-gray-900">22% / 28% / 34%</span>
                  <span className="text-xs text-gray-500 ml-1">Enterprise/Mid/SMB</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sales Cycle Duration</span>
                <div>
                  <span className="font-medium text-gray-900">62 days</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &gt;70 days</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Churn Rate by Segment</span>
                <div>
                  <span className="font-medium text-gray-900">0.8% / 1.4% / 2.2%</span>
                  <span className="text-xs text-gray-500 ml-1">Enterprise/Mid/SMB</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-medium text-gray-900 text-sm mb-2">2. Expense & Margin Indicators</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Gross Margin %</span>
                <div>
                  <span className="font-medium text-gray-900">70.4%</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &lt;68.5%</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">CAC Ratio</span>
                <div>
                  <span className="font-medium text-gray-900">10.2 months</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &gt;13 months</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">OpEx as % of Revenue</span>
                <div>
                  <span className="font-medium text-gray-900">47.5%</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &gt;49.5%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-medium text-gray-900 text-sm mb-2">3. Liquidity & Interest Rate Indicators</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">5-Year Treasury Yield</span>
                <div>
                  <span className="font-medium text-gray-900">3.40%</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &gt;3.75%</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">30-Day Cash Forecast</span>
                <div>
                  <span className="font-medium text-gray-900">$58.2M</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &lt;$48M</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Interest Coverage Ratio</span>
                <div>
                  <span className="font-medium text-gray-900">5.2x</span>
                  <span className="text-xs text-gray-500 ml-1">Alert: &lt;3.5x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <div className="text-sm font-medium text-gray-900 mb-1">Automated Alerts:</div>
          <div className="text-sm text-gray-700">
            Email + Slack notifications for threshold breaches, weekly summary to executive team, monthly review in Finance Committee
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <ProcessFlow
          steps={[
            {
              icon: <FileText className="h-5 w-5" />,
              title: "Scenario Definition",
              description: "Collaborative definition of scenarios with key assumptions"
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "Financial Modeling",
              description: "AI-powered financial impact analysis and cash flow projection"
            },
            {
              icon: <TrendingDown className="h-5 w-5" />,
              title: "Risk Assessment",
              description: "Automated risk quantification and threshold monitoring"
            },
            {
              icon: <TrendingUp className="h-5 w-5" />,
              title: "Mitigation Planning",
              description: "Adaptive response strategies with trigger-based execution"
            }
          ]}
        />
        
        <div className="mt-6">
          <DashboardMockup
            imageSrc="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Scenario Planning Dashboard"
            description="Real-time scenario monitoring, financial impact visualization, and mitigation strategy tracking."
          />
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
            <div className="text-sm text-gray-500">Time-to-Insight</div>
            <div className="text-2xl font-bold text-gray-900">-60%</div>
            <div className="text-xs text-gray-500">vs. Traditional FP&A</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
            <div className="text-sm text-gray-500">Decision Confidence</div>
            <div className="text-2xl font-bold text-gray-900">+42%</div>
            <div className="text-xs text-gray-500">Executive Survey</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};