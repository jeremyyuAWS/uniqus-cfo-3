import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { Receipt, AlertTriangle, DollarSign, CheckCircle, SearchCheck } from 'lucide-react';

export const APPaymentRunOptimizerDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial payment run analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Run Analysis</h3>
      
      <div className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-card">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium text-gray-900">Next Week's Payment Run</div>
          <div className="text-gray-500 text-sm">May 15-19</div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-4">$4.8M</div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">DUPLICATE ALERT</div>
              <div className="text-sm text-gray-600">Oracle invoice #OR-29587 appears to be a duplicate of #OR-29484 paid last month</div>
              <div className="mt-1 text-xs text-gray-500">Confidence: 98%</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">EARLY PAYMENT DISCOUNT</div>
              <div className="text-sm text-gray-600">Save $14,650 by accelerating Salesforce payment by 3 days</div>
              <div className="mt-1 text-xs text-gray-500">2% discount available if paid by May 17</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              <Receipt className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">PAYMENT TIMING</div>
              <div className="text-sm text-gray-600">Defer non-discount payments totaling $1.2M by 9 days</div>
              <div className="mt-1 text-xs text-gray-500">Optimize cash position during inventory build</div>
            </div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Pie}
        height={180}
        title="Payment Run Composition"
        data={{
          labels: ['Software & Services', 'Cloud Infrastructure', 'Marketing', 'Office & Facilities', 'Other'],
          datasets: [
            {
              data: [2.1, 1.4, 0.6, 0.4, 0.3],
              backgroundColor: [
                '#1f2937',
                '#374151',
                '#4b5563',
                '#6b7280',
                '#9ca3af'
              ],
              borderWidth: 1,
              borderColor: '#fff'
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: User decision and implementation
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Requested Payment Changes</h3>
      
      <div className="space-y-3 mb-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card flex items-start">
          <div className="mr-3 mt-1">
            <CheckCircle className="h-5 w-5 text-gray-800" />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium text-gray-900">Flag Oracle Invoice for Review</div>
            <div className="mt-1 text-sm text-gray-600">
              Invoice #OR-29587 ($87,500) temporarily removed from payment batch
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card flex items-start">
          <div className="mr-3 mt-1">
            <CheckCircle className="h-5 w-5 text-gray-800" />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium text-gray-900">Accelerate Salesforce Payment</div>
            <div className="mt-1 text-sm text-gray-600">
              Payment ($732,500) scheduled for May 17 to capture 2% discount
            </div>
            <div className="mt-1 text-xs text-gray-500">Savings: $14,650</div>
          </div>
        </div>
        
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card flex items-start">
          <div className="mr-3 mt-1">
            <CheckCircle className="h-5 w-5 text-gray-800" />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium text-gray-900">Leave Other Payments As Scheduled</div>
            <div className="mt-1 text-sm text-gray-600">
              Remaining payments continue with original schedule
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-card">
        <div className="text-sm font-medium text-gray-900 mb-2">Implementation Status</div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
            <span className="text-gray-600">AP Manager Janet Wilson notified about Oracle duplicate</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
            <span className="text-gray-600">Payment run modified in AP system</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
            <span className="text-gray-600">Comparison details shared with Oracle account team</span>
          </div>
        </div>
      </div>
      
      <div className="flex p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex-1 text-center border-r border-gray-200 pr-4">
          <div className="text-sm text-gray-500">Modified Run Total</div>
          <div className="text-xl font-bold text-gray-900">$4.71M</div>
        </div>
        <div className="flex-1 text-center pl-4">
          <div className="text-sm text-gray-500">Q2 Discount Capture</div>
          <div className="text-xl font-bold text-gray-900">$41,800</div>
          <div className="text-xs text-green-600">122% of target</div>
        </div>
      </div>
    </>,
    
    // Stage 2: Additional duplicate detection
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Duplicate Analysis</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card">
          <div className="flex justify-between mb-2">
            <div className="font-medium text-gray-900">AWS Invoices</div>
            <div className="text-gray-500 text-xs">Potential Duplicate</div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Invoice #38592</span>
              <span className="font-medium text-gray-900">$17,100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Invoice #38597</span>
              <span className="font-medium text-gray-900">$17,100</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
            Similar amounts, invoice dates 1 day apart. Unusual pattern for AWS billing.
          </div>
        </div>
        
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card">
          <div className="flex justify-between mb-2">
            <div className="font-medium text-gray-900">WeWork Invoices</div>
            <div className="text-gray-500 text-xs">Potential Duplicate</div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Chicago Office</span>
              <span className="font-medium text-gray-900">$6,200</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Austin Office</span>
              <span className="font-medium text-gray-900">$6,200</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
            Same amount, different location codes. Possible consolidation error in WeWork's billing system.
          </div>
        </div>
        
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-card">
          <div className="flex justify-between mb-2">
            <div className="font-medium text-gray-900">Adobe Creative Cloud</div>
            <div className="text-gray-500 text-xs">Potential Duplicate</div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Enterprise License</span>
              <span className="font-medium text-gray-900">$9,750</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Departmental License</span>
              <span className="font-medium text-gray-900">$4,950</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
            Potential department-level vs. enterprise-level duplicate billing. Licenses may overlap.
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg shadow-card">
        <div className="text-gray-900 font-medium mb-2">Total Potential Savings</div>
        <div className="text-2xl font-bold text-gray-900">$56,350</div>
      </div>
    </>,
    
    // Stage 3: Process flow and system visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">AP & Payment Optimization System</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <Receipt className="h-5 w-5" />,
            title: "Invoice Analysis",
            description: "OCR + LLM extract line items and payment terms"
          },
          {
            icon: <SearchCheck className="h-5 w-5" />,
            title: "Duplicate Detection",
            description: "Pattern recognition across historical invoices"
          },
          {
            icon: <DollarSign className="h-5 w-5" />,
            title: "Discount Optimization",
            description: "Identifies and captures available discounts"
          },
          {
            icon: <AlertTriangle className="h-5 w-5" />,
            title: "Fraud Prevention",
            description: "Monitors for unusual patterns and vendor anomalies"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/8370772/pexels-photo-8370772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="AP Optimization Dashboard"
          description="Payment run management with fraud alerts, discount capture tracking, and vendor analytics."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Annual Impact</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">$412K</div>
            <div className="text-sm text-gray-500">Discount Capture</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">$680K</div>
            <div className="text-sm text-gray-500">Fraud Prevention</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};