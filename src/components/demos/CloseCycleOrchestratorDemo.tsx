import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { Calendar, Clock, Check, AlertTriangle, Bot, Activity } from 'lucide-react';

export const CloseCycleOrchestratorDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial close process overview
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Month-End Close Status</h3>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium text-gray-900">May Close Status</div>
          <div className="text-gray-500 text-sm">Day 4 of 7</div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
          <div className="bg-gray-800 h-3 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <div className="text-sm text-gray-600 mb-2">Target completion: June 7 (3 days remaining)</div>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-800 bg-gray-100 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Completed Tasks (83%)</div>
              <div className="text-sm text-gray-600">
                Revenue recognition, AR subledger, inventory valuation, cash reconciliation, prepaid amortization
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-orange-500 bg-orange-50 rounded-full p-1">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">In Progress (12%)</div>
              <div className="text-sm text-gray-600">
                Accruals (80% complete), APAC intercompany (50% complete)
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-red-500 bg-red-50 rounded-full p-1">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Blockers (5%)</div>
              <div className="text-sm text-gray-600">
                Singapore office OPEX report (4 days late), sales commission calculation delay
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Bar}
        height={200}
        title="Close Process Timeline"
        data={{
          labels: ['Revenue', 'AR', 'AP', 'Inventory', 'Fixed Assets', 'Intercompany', 'Tax', 'Consolidation'],
          datasets: [
            {
              label: 'Target Days',
              data: [1, 2, 2, 3, 3, 4, 5, 7],
              backgroundColor: '#9ca3af'
            },
            {
              label: 'Actual Days',
              data: [1, 2, 2, 2, 3, 6, 7, 10],
              backgroundColor: '#1f2937'
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: Blocker resolution and recommendations
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Blocker Resolution</h3>
      
      <div className="space-y-4 mb-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-gray-900">Singapore OPEX Report</h4>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Resolved
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Singapore office submitted OPEX report after automated reminders to local finance manager and APAC controller.
          </p>
          <div className="text-xs bg-gray-50 p-2 rounded-md">
            <div className="font-medium text-gray-900 mb-1">Resolution Timeline:</div>
            <div className="flex justify-between items-center">
              <span>Escalation sent</span>
              <span>Report received</span>
              <span>Data processed</span>
            </div>
            <div className="relative h-1 bg-gray-200 rounded-full mt-1 mb-2">
              <div className="absolute inset-0 bg-gray-800 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>10:15am</span>
              <span>11:42am</span>
              <span>12:30pm</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-gray-900">Sales Commission Calculation</h4>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Resolved
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Urgent meeting with Sales Ops resolved commission calculation issues due to new plan structure.
          </p>
          <div className="text-xs bg-gray-50 p-2 rounded-md">
            <div className="font-medium text-gray-900 mb-1">Actions Taken:</div>
            <ul className="space-y-1 pl-4 list-disc">
              <li>Corrected commission rate mappings for new roles</li>
              <li>Fixed calculation logic for split-territory deals</li>
              <li>Documented new fields required for June close</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Process Improvement Recommendations</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5">
              <div className="text-gray-800">1</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">Singapore Office Automation</div>
              <p className="text-gray-600">Implement auto-extraction from local accounting system</p>
              <div className="mt-1 text-xs text-gray-500">Estimated time savings: 4 hours per close</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5">
              <div className="text-gray-800">2</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">Sales Commission Pre-validation</div>
              <p className="text-gray-600">Create pre-close validation workflow to identify issues 2 days before close starts</p>
              <div className="mt-1 text-xs text-gray-500">Estimated time savings: 6 hours per close</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5">
              <div className="text-gray-800">3</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">APAC Intercompany RPA</div>
              <p className="text-gray-600">Implement RPA for repetitive elements of intercompany reconciliation</p>
              <div className="mt-1 text-xs text-gray-500">Estimated time savings: 8 hours per close</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5">
              <div className="text-gray-800">4</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">Marketing Accruals API</div>
              <p className="text-gray-600">Add API connection to event management platform for real-time expense data</p>
              <div className="mt-1 text-xs text-gray-500">Estimated time savings: 3 hours per close</div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Implementation plan
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Implementation Plan</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">June Close Improvements</h4>
        <div className="space-y-3">
          <div className="relative pl-8 pb-3">
            <div className="absolute left-0 top-1 h-full w-px bg-gray-300"></div>
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">1</div>
            <div className="font-medium text-gray-900">Singapore Office Automation</div>
            <div className="text-sm text-gray-600 mt-1">
              <div>• Auto-extraction script development by June 15</div>
              <div>• Test run with parallel manual process by June 20</div>
              <div>• Full implementation for June close</div>
            </div>
            <div className="mt-1 text-xs bg-gray-50 p-1 rounded">
              Assigned to: Dev Team + APAC Accounting
            </div>
          </div>
          
          <div className="relative pl-8 pb-3">
            <div className="absolute left-0 top-1 h-full w-px bg-gray-300"></div>
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">2</div>
            <div className="font-medium text-gray-900">Sales Commission Pre-validation</div>
            <div className="text-sm text-gray-600 mt-1">
              <div>• Build validation ruleset by June 10</div>
              <div>• Create exception dashboard by June 17</div>
              <div>• Schedule pre-close validation for June 26</div>
            </div>
            <div className="mt-1 text-xs bg-gray-50 p-1 rounded">
              Assigned to: BI Team + Sales Ops
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">July Close Improvements</h4>
        <div className="space-y-3">
          <div className="relative pl-8 pb-3">
            <div className="absolute left-0 top-1 h-full w-px bg-gray-300"></div>
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">3</div>
            <div className="font-medium text-gray-900">APAC Intercompany RPA</div>
            <div className="text-sm text-gray-600 mt-1">
              <div>• Process mapping and task identification by June 30</div>
              <div>• RPA solution development by July 15</div>
              <div>• Parallel testing July 16-25</div>
            </div>
            <div className="mt-1 text-xs bg-gray-50 p-1 rounded">
              Assigned to: RPA Team + Finance Controllers
            </div>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">4</div>
            <div className="font-medium text-gray-900">Marketing Accruals API</div>
            <div className="text-sm text-gray-600 mt-1">
              <div>• API specification with event platform by July 5</div>
              <div>• Development and testing by July 20</div>
              <div>• Rollout for July close</div>
            </div>
            <div className="mt-1 text-xs bg-gray-50 p-1 rounded">
              Assigned to: API Integration Team
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-sm text-gray-500">Estimated Resource Requirements</div>
          <div className="text-2xl font-bold text-gray-900">38 hours</div>
          <div className="text-xs text-gray-500">Developer Time</div>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-sm text-gray-500">Estimated Close Time Reduction</div>
          <div className="text-2xl font-bold text-gray-900">5 days</div>
          <div className="text-xs text-gray-500">By August Close</div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Close Cycle Orchestration Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <Calendar className="h-5 w-5" />,
            title: "Pre-Close Planning",
            description: "Automated task scheduling and dependency management"
          },
          {
            icon: <Bot className="h-5 w-5" />,
            title: "Data Collection",
            description: "Automated data extraction from source systems"
          },
          {
            icon: <Check className="h-5 w-5" />,
            title: "Validation & Reconciliation",
            description: "ML-powered anomaly detection and auto-reconciliation"
          },
          {
            icon: <Activity className="h-5 w-5" />,
            title: "Financial Reporting",
            description: "Automated reporting package generation"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Close Cycle Orchestration Dashboard"
          description="Visual task tracking with critical path analysis, bottleneck identification, and resource optimization."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Close Cycle Impact</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">10 → 5</div>
            <div className="text-sm text-gray-500">Days to Close</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">48%</div>
            <div className="text-sm text-gray-500">Manual Tasks Automated</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};