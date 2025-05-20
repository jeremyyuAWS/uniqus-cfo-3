import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { TrendingDown, Users, Mail, BarChart3 } from 'lucide-react';

export const ARCollectionsPrioritizerDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial high-priority accounts visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">AR Priority Accounts</h3>
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900">Acme Corp</h4>
                <div className="bg-gray-800 text-white rounded-full px-2 py-0.5 text-xs">High Risk</div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Amount Overdue:</span>
                <span className="font-medium text-gray-900">$580,000</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Days Overdue:</span>
                <span className="font-medium text-gray-900">45+ days</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Risk Score Change:</span>
                <span className="font-medium text-red-600">+32%</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-600">
              Risk factors: Recent earnings miss, CEO transition
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900">TechGiant Inc</h4>
                <div className="bg-gray-500 text-white rounded-full px-2 py-0.5 text-xs">Medium Risk</div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Amount Due Soon:</span>
                <span className="font-medium text-gray-900">$320,000</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Due In:</span>
                <span className="font-medium text-gray-900">5 days</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Payment Status:</span>
                <span className="font-medium text-orange-600">Not Started</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-600">
              Unusual: Client typically starts payment processing 10+ days in advance
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900">InnoSystems</h4>
                <div className="bg-gray-500 text-white rounded-full px-2 py-0.5 text-xs">Medium Risk</div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Disputed Amount:</span>
                <span className="font-medium text-gray-900">$175,000</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Dispute Age:</span>
                <span className="font-medium text-gray-900">28 days</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Dispute Resolution:</span>
                <span className="font-medium text-red-600">Stalled</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-600">
              Disputed: Implementation services line item on invoice
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 1: Collection strategies
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Tailored Collection Strategies</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mb-4">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">Acme Corp ($580K)</h4>
          <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 text-xs font-medium">
            85-90% recovery expected
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Risk factors:</span> Earnings miss, CEO transition, pattern of paying only after escalation
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Recommended strategy:</span> SVP-to-SVP call with talking points, offer 2% discount for 48hr payment
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Timeline:</span> Expected recovery within 10 days
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mb-4">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">TechGiant Inc ($320K)</h4>
          <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 text-xs font-medium">
            100% recovery expected
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Root cause:</span> Invoice sent to wrong AP contact after March reorg
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Recommended strategy:</span> Resend to new AP director (Sarah Chen) with updated PO reference
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Timeline:</span> Expected recovery within 7 days
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">InnoSystems ($175K dispute)</h4>
          <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 text-xs font-medium">
            80% immediate recovery
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Dispute reason:</span> Invoice line item 4 challenged (implementation services)
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Recommended strategy:</span> Offer split payment option with consulting hours credit
            </div>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Expected outcome:</span> 80% cash immediately, 20% as service credit
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Implementation confirmation
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Collection Strategy Implementation</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mb-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">TechGiant Inc</h4>
          <div className="bg-gray-800 text-white rounded-full px-2 py-0.5 text-xs">
            Implemented
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Invoice resent to Sarah Chen
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Updated with correct PO#TG-29581
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Read receipt confirmed delivery
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mb-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">InnoSystems</h4>
          <div className="bg-gray-800 text-white rounded-full px-2 py-0.5 text-xs">
            Implemented
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Split payment proposal sent to AP team
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Service credit memo prepared
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Awaiting client response (exp. 24-48 hrs)
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">Acme Corp</h4>
          <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 text-xs">
            Pending Review
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-start text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-500">→</span>
            Strategy ready for review in Collections Dashboard
          </div>
          <div className="flex items-start text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-500">→</span>
            SVP call talking points prepared
          </div>
          <div className="flex items-start text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-500">→</span>
            2% discount ($11,600) financially justified based on 7.2% cost of capital
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <ChartComponent
          type={ChartType.Bar}
          height={150}
          title="Expected Recovery Timeline"
          data={{
            labels: ['Week 1', 'Week 2', 'Week 3'],
            datasets: [
              {
                label: 'Expected Collections ($K)',
                data: [495, 435, 0],
                backgroundColor: ['#374151', '#6b7280', '#9ca3af']
              }
            ]
          }}
        />
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">AR Collections Prioritizer Workflow</h3>
      <ProcessFlow
        steps={[
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Risk Analysis",
            description: "AI scores invoices based on payment history, financial signals, and behavior patterns"
          },
          {
            icon: <TrendingDown className="h-5 w-5" />,
            title: "Strategy Matching",
            description: "Matches optimal collection strategy to each account's specific context"
          },
          {
            icon: <Mail className="h-5 w-5" />,
            title: "Personalized Outreach",
            description: "Generates collector emails and call scripts with contextual awareness"
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Workflow Automation",
            description: "Routes activities to right collectors and tracks effectiveness"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/7821902/pexels-photo-7821902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="AR Collections Dashboard"
          description="Prioritized collections workflow with risk scoring, strategy recommendations, and performance tracking."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-md">
        <h4 className="font-medium text-gray-900 mb-2">Key Results</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">-26%</div>
            <div className="text-sm text-gray-500">DSO Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">+18%</div>
            <div className="text-sm text-gray-500">Collector Efficiency</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};