import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { TreePine, FileText, CheckSquare, Database, BarChart, FileCheck } from 'lucide-react';

export const ESGDisclosureDrafterDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial CSRD compliance status
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">EU CSRD Compliance Status</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium text-gray-900">Overall: 67% Ready</div>
          <div className="text-gray-500 text-sm">(Gap areas identified)</div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
          <div className="bg-gray-800 h-3 rounded-full" style={{ width: '67%' }}></div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="font-medium text-gray-900 mb-2">Strong Areas</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Double Materiality Assessment</span>
                <span className="font-medium text-gray-900">92% complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Scope 1 & 2 Emissions Tracking</span>
                <span className="font-medium text-gray-900">95% complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Social Standards Reporting</span>
                <span className="font-medium text-gray-900">84% complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Value Chain Due Diligence</span>
                <span className="font-medium text-gray-900">76% complete</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-medium text-gray-900 mb-2">Gap Areas</div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Scope 3 Emissions Measuring</span>
                  <span className="font-medium text-gray-900">41% complete</span>
                </div>
                <div className="text-xs text-gray-500 mt-1 pl-4">
                  <div>• Missing: Purchased goods & services calculations</div>
                  <div>• Missing: Business travel comprehensive data</div>
                  <div>• Missing: Employee commuting estimates</div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Biodiversity Impact Assessment</span>
                  <span className="font-medium text-gray-900">23% complete</span>
                </div>
                <div className="text-xs text-gray-500 mt-1 pl-4">
                  <div>• Missing: EU operations ecosystem impact analysis</div>
                  <div>• Missing: Supplier biodiversity requirements</div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Resource Use & Circular Economy</span>
                  <span className="font-medium text-gray-900">52% complete</span>
                </div>
                <div className="text-xs text-gray-500 mt-1 pl-4">
                  <div>• Missing: Product lifecycle assessments</div>
                  <div>• Missing: E-waste metrics for cloud assets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">First reporting deadline:</span>
            <span className="font-medium text-gray-900">April 2026</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Current status:</span>
            <span className="font-medium text-gray-900">5-month gap to readiness</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Critical path:</span>
            <span className="font-medium text-gray-900">Scope 3 data collection</span>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Bar}
        height={180}
        title="Compliance Readiness by Area"
        data={{
          labels: ['Double Materiality', 'Scope 1 & 2', 'Social Standards', 'Value Chain', 'Scope 3', 'Biodiversity', 'Circular Economy'],
          datasets: [
            {
              label: 'Completion %',
              data: [92, 95, 84, 76, 41, 23, 52],
              backgroundColor: [
                '#1f2937', '#1f2937', '#1f2937', '#1f2937', 
                '#6b7280', '#6b7280', '#6b7280'
              ]
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: Remediation recommendations
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">CSRD Remediation Roadmap</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Scope 3: Business Travel Data Integration</h4>
              <div className="text-sm text-gray-500 mt-1">HIGH IMPACT, LOW EFFORT</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Priority 1
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Connect Concur expense system API to ESG platform
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 3 weeks
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> 1 IT analyst (part-time)
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Compliance gain:</span> +12% overall, +28% Scope 3
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">E-waste Metrics for Cloud Assets</h4>
              <div className="text-sm text-gray-500 mt-1">HIGH IMPACT, LOW EFFORT</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Priority 2
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Implement cloud asset lifecycle tracking
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 5 weeks
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> DevOps engineer (part-time), Sustainability analyst
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Compliance gain:</span> +8% overall, +22% Circular Economy
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Scope 3: Purchased Goods & Services</h4>
              <div className="text-sm text-gray-500 mt-1">HIGH IMPACT, HIGH EFFORT</div>
            </div>
            <div className="bg-blue-100 text-blue-800 px-2 py-0.5 text-xs rounded-full">
              Priority 3
            </div>
          </div>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Supplier emissions data collection campaign
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 12 weeks
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> Procurement team, ESG specialist, data analyst
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Compliance gain:</span> +15% overall, +38% Scope 3
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-2">Recommended First Actions</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Immediately initiate items #1 and #2
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Begin planning for #3 with procurement team
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              Defer biodiversity assessment until Q1 2026
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 bg-gray-50 rounded-md text-center">
          <div className="text-sm font-medium text-gray-900">Estimated full compliance: January 2026</div>
          <div className="text-xs text-gray-500">(3 months before deadline)</div>
        </div>
      </div>
    </>,
    
    // Stage 2: Business travel section draft
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Business Travel Integration & Draft</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium text-gray-900">Integration Status</h4>
          <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
            Initiated
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Jira ticket SUST-342</span> created for Concur API integration
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Kickoff meeting scheduled</span> for tomorrow at 10am with IT
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Data mapping document</span> prepared for review
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-medium">Expected completion:</span> July 18, 2025
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">CSRD Business Travel Section Draft</h4>
        <div className="text-sm text-gray-700 prose prose-sm max-w-none">
          <h5 className="text-md font-medium text-gray-900">3.2.4 Business Travel Emissions</h5>
          
          <p>In alignment with ESRS E1 requirements, we report the following business travel emissions data, methodologies, and reduction initiatives.</p>
          
          <p className="font-medium">Quantitative Disclosure:</p>
          
          <p>In Q1 2025, our global business travel activities generated a total of 238.4 tonnes CO₂e, representing 4.2% of our total Scope 3 emissions. This reflects a 12.3% reduction from the reference period (Q1 2024: 271.9 tonnes CO₂e).</p>
          
          <p><span className="font-medium">Emissions by Travel Mode:</span></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Air travel: 187.3 tonnes CO₂e (78.6%)</li>
            <li>Rail travel: 12.6 tonnes CO₂e (5.3%)</li>
            <li>Rental vehicles: 24.9 tonnes CO₂e (10.4%)</li>
            <li>Hotel stays: 13.6 tonnes CO₂e (5.7%)</li>
          </ul>
          
          <p><span className="font-medium">Methodology:</span></p>
          <p>Emissions are calculated using primary activity data from our travel management system (distance traveled, travel class, accommodation nights) combined with emissions factors from the UK DEFRA 2024 dataset and the Cornell Hotel Sustainability Benchmarking Index. We apply a radiative forcing multiplier of 1.9 to air travel emissions to account for higher-altitude impacts in accordance with the GHG Protocol.</p>
          
          <p><span className="font-medium">Reduction Initiatives:</span></p>
          <p>We have implemented the following measures to reduce business travel emissions:</p>
          
          <ol className="list-decimal pl-5 space-y-1">
            <li>Virtual-First Meeting Policy: Requiring justification for in-person meetings, resulting in a 28% reduction in non-essential travel</li>
            <li>Rail-First European Travel: Mandating rail for journeys under 500km when available, increasing rail usage by 41% YoY</li>
            <li>Sustainable Accommodation: Preferential booking of hotels with verified sustainability certifications (currently 63% of nights)</li>
            <li>Carbon Budget Allocation: Departmental travel carbon budgets aligned with reduction targets</li>
          </ol>
          
          <p><span className="font-medium">Target Alignment:</span></p>
          <p>Our business travel emissions reduction of 12.3% YoY keeps us on track to meet our Science-Based Target of 30% absolute reduction by 2030 from our 2022 baseline.</p>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">ESG Disclosure Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <Database className="h-5 w-5" />,
            title: "Data Collection",
            description: "Automated extraction from IoT sensors, ERP, and financial systems"
          },
          {
            icon: <BarChart className="h-5 w-5" />,
            title: "Carbon Modeling",
            description: "ML-powered carbon footprint calculation and projection"
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Report Generation",
            description: "AI-powered drafting with regulatory compliance verification"
          },
          {
            icon: <FileCheck className="h-5 w-5" />,
            title: "Validation & Filing",
            description: "Automated audit-readiness checks and regulatory submission"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="ESG Disclosure Dashboard"
          description="Real-time sustainability metrics tracking, disclosure readiness assessment, and regulatory compliance monitoring."
        />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
          <div className="text-sm text-gray-500">Prep Time Reduction</div>
          <div className="text-2xl font-bold text-gray-900">-75%</div>
          <div className="text-xs text-gray-500">vs. Manual Process</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card text-center">
          <div className="text-sm text-gray-500">Compliance Rate</div>
          <div className="text-2xl font-bold text-gray-900">99.8%</div>
          <div className="text-xs text-gray-500">Audit-Ready</div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};