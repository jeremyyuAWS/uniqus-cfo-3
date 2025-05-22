import React, { useState } from 'react';
import { BarChart, FileSpreadsheet, BarChart2, HelpCircle, Download, PieChart } from 'lucide-react';
import { ChartComponent, ChartType } from '../charts/ChartComponent';

export const Strategize: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>('balanced');
  
  const portfolioData = {
    balanced: {
      composition: {
        labels: ['Generative AI', 'Quantum Computing', 'Edge Computing', 'Digital Twins', 'Sustainable Tech'],
        data: [35, 20, 15, 15, 15]
      },
      riskReturn: {
        labels: ['Growth', 'Balanced', 'Conservative', 'Current Portfolio'],
        risk: [78, 62, 38, 62],
        return: [92, 76, 45, 76]
      },
      strategic: {
        labels: ['Digital Transformation', 'Customer Experience', 'Operational Efficiency', 'ESG Impact', 'Future of Work'],
        data: [85, 76, 68, 62, 72]
      }
    },
    aggressive: {
      composition: {
        labels: ['Generative AI', 'Quantum Computing', 'Edge Computing', 'Digital Twins', 'Sustainable Tech'],
        data: [45, 30, 10, 10, 5]
      },
      riskReturn: {
        labels: ['Growth', 'Balanced', 'Conservative', 'Current Portfolio'],
        risk: [78, 62, 38, 78],
        return: [92, 76, 45, 92]
      },
      strategic: {
        labels: ['Digital Transformation', 'Customer Experience', 'Operational Efficiency', 'ESG Impact', 'Future of Work'],
        data: [92, 85, 72, 45, 80]
      }
    },
    conservative: {
      composition: {
        labels: ['Generative AI', 'Quantum Computing', 'Edge Computing', 'Digital Twins', 'Sustainable Tech'],
        data: [25, 15, 20, 20, 20]
      },
      riskReturn: {
        labels: ['Growth', 'Balanced', 'Conservative', 'Current Portfolio'],
        risk: [78, 62, 38, 38],
        return: [92, 76, 45, 45]
      },
      strategic: {
        labels: ['Digital Transformation', 'Customer Experience', 'Operational Efficiency', 'ESG Impact', 'Future of Work'],
        data: [68, 65, 72, 80, 65]
      }
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Strategize</h2>
          <p className="text-gray-600 mt-1">Portfolio-level planning and what-if analysis for strategic investments.</p>
        </div>
        <button 
          onClick={() => setShowInfoModal(!showInfoModal)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 animate-fade-in">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">About Strategize</h3>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>The <span className="font-medium text-gray-800">Strategize</span> tab helps CVC teams plan and optimize their investment portfolios across multiple startups and technologies.</p>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Portfolio composition visualization</li>
                  <li>Scenario planning for different risk profiles</li>
                  <li>Strategic alignment scoring</li>
                  <li>Gap analysis and diversification recommendations</li>
                  <li>What-if modeling for different market conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Business Value:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>48% more diverse portfolios</li>
                  <li>3.2x better strategic alignment of investments</li>
                  <li>Cohesive investment narrative for board presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <button
          className={`p-4 rounded-lg flex flex-col items-center text-center transition-all ${
            selectedPortfolio === 'aggressive' 
              ? 'bg-gray-800 text-white shadow-md' 
              : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => setSelectedPortfolio('aggressive')}
        >
          <BarChart className="h-8 w-8 mb-2" />
          <h3 className="font-medium text-lg">Growth Portfolio</h3>
          <p className="text-sm mt-1">High risk, high return focus on emerging technologies</p>
        </button>
        
        <button
          className={`p-4 rounded-lg flex flex-col items-center text-center transition-all ${
            selectedPortfolio === 'balanced' 
              ? 'bg-gray-800 text-white shadow-md' 
              : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => setSelectedPortfolio('balanced')}
        >
          <BarChart2 className="h-8 w-8 mb-2" />
          <h3 className="font-medium text-lg">Balanced Portfolio</h3>
          <p className="text-sm mt-1">Moderate risk profile with diversified technologies</p>
        </button>
        
        <button
          className={`p-4 rounded-lg flex flex-col items-center text-center transition-all ${
            selectedPortfolio === 'conservative' 
              ? 'bg-gray-800 text-white shadow-md' 
              : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => setSelectedPortfolio('conservative')}
        >
          <FileSpreadsheet className="h-8 w-8 mb-2" />
          <h3 className="font-medium text-lg">Conservative Portfolio</h3>
          <p className="text-sm mt-1">Lower risk with focus on proven technologies</p>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Composition</h3>
          <ChartComponent
            type={ChartType.Pie}
            height={250}
            data={{
              labels: portfolioData[selectedPortfolio as keyof typeof portfolioData].composition.labels,
              datasets: [
                {
                  data: portfolioData[selectedPortfolio as keyof typeof portfolioData].composition.data,
                  backgroundColor: ['#5025c4', '#6f42c1', '#8258d0', '#9670dc', '#a989e1']
                }
              ]
            }}
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Diversification Analysis</h4>
            <p className="text-sm text-gray-600">
              {selectedPortfolio === 'aggressive' && "This portfolio is heavily weighted toward Generative AI and Quantum Computing, creating technology concentration risk. Consider allocating 5-10% more to Edge Computing for better balance."}
              {selectedPortfolio === 'balanced' && "This portfolio provides good diversification across emerging technologies while still maintaining strategic focus in AI. The allocation balances near-term impact potential with longer-term disruptive technologies."}
              {selectedPortfolio === 'conservative' && "This portfolio emphasizes established technologies with proven commercialization. While lower risk, it may miss early-stage opportunities in rapidly evolving fields like quantum computing."}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Risk/Return Profile</h3>
          <ChartComponent
            type={ChartType.Bar}
            height={250}
            data={{
              labels: portfolioData[selectedPortfolio as keyof typeof portfolioData].riskReturn.labels,
              datasets: [
                {
                  label: 'Risk Score',
                  data: portfolioData[selectedPortfolio as keyof typeof portfolioData].riskReturn.risk,
                  backgroundColor: '#6f42c1'
                },
                {
                  label: 'Return Potential',
                  data: portfolioData[selectedPortfolio as keyof typeof portfolioData].riskReturn.return,
                  backgroundColor: '#5025c4'
                }
              ]
            }}
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Risk Assessment</h4>
            <p className="text-sm text-gray-600">
              {selectedPortfolio === 'aggressive' && "This high-growth portfolio has a risk score of 78/100 with return potential of 92/100. Main risks include technology execution challenges and competitive market dynamics, particularly in the AI sector."}
              {selectedPortfolio === 'balanced' && "This balanced portfolio has a moderate risk profile (62/100) with solid return potential (76/100). It mitigates concentration risk while maintaining exposure to high-growth areas."}
              {selectedPortfolio === 'conservative' && "This conservative approach prioritizes proven technologies, with a lower risk score (38/100) and more modest return expectations (45/100). Ideal for corporations with lower risk tolerance or early in their CVC journey."}
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Strategic Alignment</h3>
        <ChartComponent
          type={ChartType.Bar}
          height={250}
          data={{
            labels: portfolioData[selectedPortfolio as keyof typeof portfolioData].strategic.labels,
            datasets: [
              {
                label: 'Alignment Score',
                data: portfolioData[selectedPortfolio as keyof typeof portfolioData].strategic.data,
                backgroundColor: '#5025c4'
              }
            ]
          }}
        />
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Strategic Gaps</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {selectedPortfolio === 'aggressive' && (
                <>
                  <p>• <span className="font-medium">ESG Impact:</span> Current portfolio underweights sustainability technologies</p>
                  <p>• <span className="font-medium">Operational Efficiency:</span> Consider additional investments in automation and workflow technologies</p>
                </>
              )}
              {selectedPortfolio === 'balanced' && (
                <>
                  <p>• <span className="font-medium">ESG Impact:</span> Consider increasing allocation to sustainable technologies</p>
                  <p>• <span className="font-medium">Operational Efficiency:</span> This area has moderate coverage but could be strengthened</p>
                </>
              )}
              {selectedPortfolio === 'conservative' && (
                <>
                  <p>• <span className="font-medium">Digital Transformation:</span> Portfolio lacks cutting-edge technologies in this space</p>
                  <p>• <span className="font-medium">Customer Experience:</span> Additional investments needed in customer-facing technologies</p>
                </>
              )}
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Synergy Opportunities</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {selectedPortfolio === 'aggressive' && (
                <>
                  <p>• <span className="font-medium">AI + Customer Experience:</span> Strong alignment with conversational AI investments</p>
                  <p>• <span className="font-medium">Quantum + Digital Transformation:</span> Leading-edge computing capability for next-gen applications</p>
                </>
              )}
              {selectedPortfolio === 'balanced' && (
                <>
                  <p>• <span className="font-medium">AI + Customer Experience:</span> Well balanced with reasonable exposure to innovative technologies</p>
                  <p>• <span className="font-medium">Digital Twins + Future of Work:</span> Good potential for workplace transformation applications</p>
                </>
              )}
              {selectedPortfolio === 'conservative' && (
                <>
                  <p>• <span className="font-medium">Sustainable Tech + ESG Impact:</span> Strong alignment with corporate sustainability goals</p>
                  <p>• <span className="font-medium">Edge Computing + Operational Efficiency:</span> Good foundation for incremental improvements</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <PieChart className="h-4 w-4 mr-2" />
          Custom Portfolio Builder
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <Download className="h-4 w-4 mr-2" />
          Export Strategy
        </button>
      </div>
    </div>
  );
};