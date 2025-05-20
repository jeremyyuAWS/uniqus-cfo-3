import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { Scale, AlertTriangle, FileCheck, Globe, FileText, Shield, BarChart, Bot } from 'lucide-react';

export const TransferPricingComplianceDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial compliance assessment
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">OECD Pillar Two Compliance Status</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium text-gray-900">Overall Compliance Readiness</div>
          <div className="text-gray-800 font-medium">67%</div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
          <div className="bg-gray-800 h-3 rounded-full" style={{ width: '67%' }}></div>
        </div>
        
        <div className="space-y-4 mt-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm font-medium text-gray-700">High Risk Areas</div>
              <div className="text-xs font-medium text-white bg-red-500 px-2 py-0.5 rounded-full">
                Critical
              </div>
            </div>
            <div className="space-y-2 bg-red-50 p-3 rounded-md">
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 text-red-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Irish subsidiary effective tax rate is 11.2%</span>, below the 15% global minimum
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 text-red-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Singapore R&D transfer pricing documentation is outdated</span> (last updated 18 months ago)
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 text-red-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">UAE operations lack economic substance documentation</span> required under new rules
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm font-medium text-gray-700">Medium Risk Areas</div>
              <div className="text-xs font-medium text-white bg-orange-500 px-2 py-0.5 rounded-full">
                Attention Required
              </div>
            </div>
            <div className="space-y-2 bg-orange-50 p-3 rounded-md">
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 text-orange-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Missing country-by-country reporting</span> for two new LATAM entities
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 text-orange-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Transfer pricing markup on German support services</span> lacks recent comparables
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Bar}
        height={180}
        title="Effective Tax Rate by Jurisdiction"
        data={{
          labels: ['USA', 'UK', 'Germany', 'Singapore', 'Ireland', 'UAE', 'Brazil'],
          datasets: [
            {
              label: 'Current ETR',
              data: [21.5, 19.0, 16.5, 14.0, 11.2, 0, 27.5],
              backgroundColor: '#4b5563'
            },
            {
              label: 'Minimum Required',
              data: [15, 15, 15, 15, 15, 15, 15],
              backgroundColor: '#9ca3af'
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: Remediation plan
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Pillar Two Remediation Plan</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">Irish Subsidiary ETR Gap</h4>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              High Risk
            </div>
          </div>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Restructure IP licensing fees between US and Ireland
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 6-8 weeks (complete by August 31)
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> Tax Director, External Counsel, 1 Tax Analyst
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Est. Cost:</span> $45,000-60,000 legal/consulting
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Tax Impact:</span> +$240,000 annual tax, offset by US FTC benefits
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">Singapore R&D Transfer Pricing</h4>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              High Risk
            </div>
          </div>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Update functional analysis and obtain new comparables
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 4-5 weeks (complete by July 30)
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> Transfer Pricing Manager, 1 Analyst
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Est. Cost:</span> $25,000 for benchmarking study
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Risk Reduction:</span> High - avoids penalties of up to $380,000
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-card">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">UAE Economic Substance</h4>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
              High Risk
            </div>
          </div>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Action:</span> Document local decision-making, employee functions
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Timeline:</span> 3 weeks (complete by July 15)
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Resources:</span> Regional Controller, Tax Analyst
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Est. Cost:</span> Internal time only
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <div className="min-w-4 mt-0.5 text-gray-400">•</div>
              <div className="text-gray-700">
                <span className="font-medium">Risk Reduction:</span> Critical - avoids potential disallowance of structure
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Implementation progress
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Implementation Progress</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Kickoff Meetings Scheduled</h4>
        
        <div className="space-y-3">
          <div className="flex items-center p-2 bg-gray-50 rounded-md">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <Scale className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-grow">
              <div className="text-sm font-medium text-gray-900">Irish ETR Issue</div>
              <div className="text-xs text-gray-500">June 12, 10am ET with Tax Team and Baker McKenzie</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Confirmed
            </div>
          </div>
          
          <div className="flex items-center p-2 bg-gray-50 rounded-md">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <Globe className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-grow">
              <div className="text-sm font-medium text-gray-900">Singapore TP</div>
              <div className="text-xs text-gray-500">June 14, 9am ET with TP Team and Deloitte</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Confirmed
            </div>
          </div>
          
          <div className="flex items-center p-2 bg-gray-50 rounded-md">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <FileCheck className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-grow">
              <div className="text-sm font-medium text-gray-900">UAE Substance</div>
              <div className="text-xs text-gray-500">June 13, 11am ET with UAE team and Regional Controller</div>
            </div>
            <div className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
              Confirmed
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Compliance Documentation Plan</h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-1">
              <FileText className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Digital Documentation Repository</div>
              <div className="text-sm text-gray-600">
                Secure SharePoint site with role-based access structured by entity, year, and documentation type
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-1">
              <BarChart className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Compliance Dashboard</div>
              <div className="text-sm text-gray-600">
                Real-time tracking of ETRs by jurisdiction vs. 15% minimum with documentation freshness indicators
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-1">
              <Bot className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Automated Testing</div>
              <div className="text-sm text-gray-600">
                Quarterly testing of transfer pricing outcomes vs. policy with substance validation
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-1">
              <FileCheck className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Board Reporting Package</div>
              <div className="text-sm text-gray-600">
                Quarterly one-page compliance summary with risk indicators and remediation status
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-sm text-gray-500">Documentation Ready By</div>
          <div className="text-2xl font-bold text-gray-900">Sep 15</div>
          <div className="text-xs text-gray-500">Ahead of Q4 reporting</div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-sm text-gray-500">Projected Compliance Score</div>
          <div className="text-2xl font-bold text-gray-900">95%</div>
          <div className="text-xs text-gray-500">From current 67%</div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Transfer Pricing Compliance Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <Globe className="h-5 w-5" />,
            title: "Global Data Collection",
            description: "Automated data gathering from ERP and financial systems"
          },
          {
            icon: <Scale className="h-5 w-5" />,
            title: "Risk Assessment",
            description: "AI-powered risk scoring and compliance gap identification"
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Documentation",
            description: "Template-based automated documentation generation"
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: "Validation & Filing",
            description: "Multi-jurisdiction validation and regulatory filing"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Transfer Pricing Compliance Dashboard"
          description="Global compliance monitoring with risk alerts, documentation status tracking, and regulatory changes monitoring."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Compliance Impact</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">99%</div>
            <div className="text-sm text-gray-500">Audit-Ready Documentation</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">-75%</div>
            <div className="text-sm text-gray-500">Compliance Time</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};