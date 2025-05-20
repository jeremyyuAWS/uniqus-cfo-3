import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { PieChart, FileCheck, Server, FileText, GanttChart, FileSearch } from 'lucide-react';

export const SaaSRevRecCopilotDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial revenue recognition analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Microsoft Enterprise Agreement Analysis</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-900">Contract Overview</div>
          <div className="text-gray-500 text-sm">$4.2M TCV</div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Cloud Subscription</span>
            <span className="font-medium text-gray-900">$2.8M</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Implementation Services</span>
            <span className="font-medium text-gray-900">$450K</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Training</span>
            <span className="font-medium text-gray-900">$350K</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Custom Development</span>
            <span className="font-medium text-gray-900">$600K</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <div className="font-medium text-gray-900 mb-1">ASC 606 Performance Obligations</div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Cloud Subscription:</span> Distinct, recognized ratably over contract term
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Implementation Services:</span> Not distinct, recognized with subscription
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Training:</span> Distinct, recognized upon delivery
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Custom Development:</span> Distinct, recognize based on milestone completion
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <div className="font-medium text-gray-900 mb-1">Variable Consideration</div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Usage-based overage fees:</span> Estimated using expected value method
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Historical data suggests:</span> 18% average overage (~$504K)
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Constraint to:</span> $400K based on 80% probability threshold
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <div className="font-medium text-gray-900 mb-1">Contract Modifications</div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Amendment 2:</span> Does not add distinct goods/services
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Treatment:</span> Continuation of original contract
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Bar}
        height={180}
        title="Revenue Recognition Schedule"
        data={{
          labels: ['Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'],
          datasets: [
            {
              label: 'Subscription + Implementation',
              data: [271, 271, 271, 271, 271, 271],
              backgroundColor: '#1f2937'
            },
            {
              label: 'Training',
              data: [150, 150, 50, 0, 0, 0],
              backgroundColor: '#4b5563'
            },
            {
              label: 'Custom Development',
              data: [150, 180, 120, 150, 0, 0],
              backgroundColor: '#6b7280'
            },
            {
              label: 'Variable Consideration',
              data: [0, 0, 80, 120, 100, 100],
              backgroundColor: '#9ca3af'
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: SLA penalty analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">SLA Penalty Analysis</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Uptime SLA Terms</h4>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Contract includes 99.9% uptime guarantee
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Penalties of 10% of monthly subscription for each 0.1% below threshold
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Maximum penalty capped at 30% of monthly subscription
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <div className="font-medium text-gray-900 mb-2">Variable Consideration Impact</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Last 12 months average uptime:</span>
              <span className="font-medium text-gray-900">99.95%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Probability of SLA breach:</span>
              <span className="font-medium text-gray-900">~12% in any month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Expected value of penalties:</span>
              <span className="font-medium text-gray-900">~$67,200 annually</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Revised Revenue Treatment</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Reduce transaction price</span> by $67,200 (constraint for penalties)
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Create quarterly reassessment process</span> based on actual uptime
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Adjust revenue constraint</span> if uptime patterns change
            </div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Line}
        height={180}
        title="Historical Uptime Performance"
        data={{
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Monthly Uptime %',
              data: [99.97, 99.98, 99.95, 99.91, 99.99, 99.96, 99.98, 99.92, 99.97, 99.99, 99.95, 99.96],
              borderColor: '#1f2937',
              backgroundColor: 'rgba(31, 41, 55, 0.1)',
              tension: 0.4,
              fill: false
            },
            {
              label: 'SLA Threshold',
              data: [99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9],
              borderColor: '#ef4444',
              borderWidth: 1,
              borderDashed: [5, 5],
              pointRadius: 0
            }
          ]
        }}
      />
    </>,
    
    // Stage 2: Journal entries
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Journal Entries & Audit Documentation</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Initial Recognition Journal Entries</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-medium text-gray-700">Account</th>
                <th className="px-4 py-2 text-right font-medium text-gray-700">Debit</th>
                <th className="px-4 py-2 text-right font-medium text-gray-700">Credit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-gray-700">Accounts Receivable</td>
                <td className="px-4 py-2 text-right text-gray-700">$1,050,000</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Contract Asset</td>
                <td className="px-4 py-2 text-right text-gray-700">$2,482,800</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Deferred Revenue - Subscription</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
                <td className="px-4 py-2 text-right text-gray-700">$2,732,800</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Deferred Revenue - Training</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
                <td className="px-4 py-2 text-right text-gray-700">$350,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Deferred Revenue - Development</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
                <td className="px-4 py-2 text-right text-gray-700">$600,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Allowance for SLA Penalties</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
                <td className="px-4 py-2 text-right text-gray-700">$67,200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-500 mt-2 italic">
          Year 1 invoicing with remaining contract value as contract asset
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Monthly Revenue Recognition</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-medium text-gray-700">Account</th>
                <th className="px-4 py-2 text-right font-medium text-gray-700">Debit</th>
                <th className="px-4 py-2 text-right font-medium text-gray-700">Credit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-gray-700">Deferred Revenue - Subscription</td>
                <td className="px-4 py-2 text-right text-gray-700">$113,867</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Revenue - Subscription</td>
                <td className="px-4 py-2 text-right text-gray-700"></td>
                <td className="px-4 py-2 text-right text-gray-700">$113,867</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-500 mt-2 italic">
          Monthly recognition of subscription revenue
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Audit Trail Documentation</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <FileCheck className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Performance Obligation Analysis</div>
              <div className="text-sm text-gray-600">
                Memo with assessment of distinct goods/services, supporting contract clauses, standalone selling price analysis
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <FileCheck className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Variable Consideration</div>
              <div className="text-sm text-gray-600">
                Historical uptime performance data, probability models for SLA breaches, constraint methodology documentation
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <FileCheck className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Revenue Recognition Schedule</div>
              <div className="text-sm text-gray-600">
                Monthly breakout by performance obligation, trigger events for milestone-based recognition, calculation methodology
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">SaaS Rev-Rec Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <FileSearch className="h-5 w-5" />,
            title: "Contract Analysis",
            description: "AI-powered contract parsing and obligation identification"
          },
          {
            icon: <GanttChart className="h-5 w-5" />,
            title: "Performance Obligation Mapping",
            description: "Distinct vs. non-distinct classification with SSP allocation"
          },
          {
            icon: <Server className="h-5 w-5" />,
            title: "Usage Data Processing",
            description: "Real-time consumption metrics and variable consideration"
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Recognition & Reporting",
            description: "Automated journal entries and audit documentation"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="SaaS Revenue Recognition Dashboard"
          description="Contract analysis, performance obligation tracking, and compliant revenue schedule visualization."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Impact Metrics</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">-70%</div>
            <div className="text-sm text-gray-500">Time Savings</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">99.8%</div>
            <div className="text-sm text-gray-500">Audit Compliance</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};