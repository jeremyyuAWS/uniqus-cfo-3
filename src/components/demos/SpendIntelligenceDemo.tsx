import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { ShoppingBag, AlertTriangle, Search, LineChart, TrendingDown, Bot } from 'lucide-react';

export const SpendIntelligenceDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial spend anomaly detection
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Q2 2025 Spend Anomaly Analysis</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <div className="text-red-500 mr-2">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-gray-900">Cloud Computing</h4>
              </div>
              <div className="text-sm text-gray-600 mt-1">+72% YoY, $980K over forecast</div>
            </div>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              HIGH
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Root cause:</span> Dev environment instances not auto-scaling down on nights/weekends
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">155 unused GPU instances</span> identified across 8 projects
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Estimated waste:</span> $620K per quarter
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <div className="text-red-500 mr-2">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-gray-900">Marketing Software</h4>
              </div>
              <div className="text-sm text-gray-600 mt-1">+114% YoY, $340K over forecast</div>
            </div>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              HIGH
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Root cause:</span> Duplicate SaaS tools with overlapping functionality
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">14 tools</span> for similar social media scheduling functions
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">8 separate video editing platforms</span> (73% utilization below threshold)
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <div className="text-orange-500 mr-2">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-gray-900">Travel & Entertainment</h4>
              </div>
              <div className="text-sm text-gray-600 mt-1">+35% YoY, $210K over forecast</div>
            </div>
            <div className="bg-orange-100 text-orange-800 px-2 py-0.5 text-xs rounded-full">
              MEDIUM
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Root cause:</span> Non-compliant bookings outside corporate platform
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">41% of bookings</span> made directly vs. through approved channels
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Premium flight/hotel upgrades</span> exceeding policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 1: Cloud computing remediation plan
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cloud Computing Spend Remediation Plan</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Immediate Actions (1-2 weeks)</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Implement auto-shutdown schedules</span> for non-production environments (17:00-09:00 + weekends)
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Estimated savings:</span> $180-210K per month
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Required effort:</span> 3 days of DevOps time
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Tagged all 155 idle GPU instances</span> for rightsizing or termination
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Created approval workflow</span> for 24/7 environment requests
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Optimization Phase (3-4 weeks)</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Deploy instance right-sizing</span> across all projects (based on utilization patterns)
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Implement spot instance strategy</span> for batch processing workloads
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Consolidate redundant staging/test environments</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Move cold storage to lower-cost tiers</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Estimated additional savings:</span> $140-170K per month
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Governance Implementation (1-2 months)</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Implement Project-Team-Environment tagging strategy</span> for all cloud resources
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Deploy budget alerts and automated escalations</span> at 85% thresholds
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Create weekly spending dashboards</span> for engineering leads
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Institute monthly cloud economics review</span> with CTOs
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="min-w-4 mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Estimated long-term savings:</span> 22-28% of cloud spending
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Vendor ESG risk assessment
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Vendor ESG Risk Assessment</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Datastor Inc.</h4>
              <div className="text-sm text-gray-600 mt-1">Data center provider</div>
            </div>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              HIGH RISK
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Poor carbon disclosure</span> (bottom quartile)
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Coal-heavy energy mix</span> (78% vs. industry avg. 42%)
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Recent water usage violation</span> in drought-prone region
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">EU CSRD disclosure gap</span> identified
              </div>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-gray-50 rounded-md flex justify-between items-center">
            <span className="text-sm text-gray-700">Annual spend:</span>
            <span className="text-sm font-medium text-gray-900">$2.4M</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">GlobalSecure</h4>
              <div className="text-sm text-gray-600 mt-1">Security services</div>
            </div>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              HIGH RISK
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Labor rights violations</span> in 3 countries
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Pending litigation</span> for wage discrimination
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">No published supplier code of conduct</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-gray-50 rounded-md flex justify-between items-center">
            <span className="text-sm text-gray-700">Annual spend:</span>
            <span className="text-sm font-medium text-gray-900">$1.8M</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">TechManufacturing</h4>
              <div className="text-sm text-gray-600 mt-1">Hardware</div>
            </div>
            <div className="bg-orange-100 text-orange-800 px-2 py-0.5 text-xs rounded-full">
              MEDIUM RISK
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Supply chain transparency issues</span> in Tier 2-3 suppliers
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Conflict minerals documentation incomplete</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Scope 3 emissions reporting inadequate</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-gray-50 rounded-md flex justify-between items-center">
            <span className="text-sm text-gray-700">Annual spend:</span>
            <span className="text-sm font-medium text-gray-900">$4.2M</span>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Spend Intelligence & Vendor-Risk Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <ShoppingBag className="h-5 w-5" />,
            title: "Spend Aggregation",
            description: "Automated collection from ERP, procurement, and expense systems"
          },
          {
            icon: <Search className="h-5 w-5" />,
            title: "Anomaly Detection",
            description: "ML-powered pattern recognition and variance analysis"
          },
          {
            icon: <Bot className="h-5 w-5" />,
            title: "Intelligent Analysis",
            description: "LLM-powered root cause determination and recommendations"
          },
          {
            icon: <TrendingDown className="h-5 w-5" />,
            title: "Optimization Execution",
            description: "Automated remediation workflows and validation"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Spend Intelligence Dashboard"
          description="Anomaly detection, vendor risk scoring, and optimization opportunity tracking with automated remediation workflows."
        />
      </div>
      
      <div className="mt-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card">
          <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Migrate from Datastor to Google Cloud</span> (similar cost, 90% better carbon profile)
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Engage GlobalSecure in improvement plan</span> with contractual ESG targets
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Request enhanced disclosure from TechManufacturing</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <div className="text-sm font-medium text-gray-900 mb-1">ESG Reporting Impact:</div>
            <div className="text-sm text-gray-700">
              These actions would improve our Scope 3 emissions by approximately 12% and reduce CSRD compliance gaps by 30%
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
            <div className="text-sm text-gray-500">OPEX Reduction</div>
            <div className="text-2xl font-bold text-gray-900">5-10%</div>
            <div className="text-xs text-gray-500">Annually</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
            <div className="text-sm text-gray-500">Vendor ESG Impact</div>
            <div className="text-2xl font-bold text-gray-900">+45%</div>
            <div className="text-xs text-gray-500">Compliance Rate</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};