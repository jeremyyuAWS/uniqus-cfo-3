import React, { useState } from 'react';
import { Search, Layers, TrendingUp, HelpCircle, BarChart2, Download } from 'lucide-react';
import { ChartComponent, ChartType } from '../charts/ChartComponent';

export const Analyze: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const handleSearch = () => {
    if (!searchQuery) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analyze</h2>
          <p className="text-gray-600 mt-1">Deep dive into selected startups or technologies with AI-powered analysis.</p>
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
              <h3 className="text-xl font-semibold text-gray-900">About Analyze</h3>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>The <span className="font-medium text-gray-800">Analyze</span> tab provides in-depth analysis of specific startups or technologies to support due diligence and investment decision-making.</p>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AI-generated SWOT analysis</li>
                  <li>Team quality and market fit assessment</li>
                  <li>Funding history and investor quality analysis</li>
                  <li>Technology differentiation scoring</li>
                  <li>Market sizing and growth projections</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Business Value:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>70% reduction in preliminary due diligence time</li>
                  <li>90% more comprehensive analysis vs. manual methods</li>
                  <li>Standardized evaluation framework across portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Company or Technology
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow focus:ring-gray-500 focus:border-gray-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                placeholder="Enter company name, technology, or select from Discover results"
              />
              <button
                onClick={handleSearch}
                disabled={!searchQuery || isSearching}
                className={`ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                  !searchQuery || isSearching
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'text-white bg-gray-800 hover:bg-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
              >
                {isSearching ? 'Searching...' : 'Analyze'}
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Analysis Type
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            >
              <option>Full Analysis</option>
              <option>Technology Focus</option>
              <option>Team Assessment</option>
              <option>Market Analysis</option>
              <option>Custom Template</option>
            </select>
          </div>
        </div>
        
        {!searchQuery && !showResults && (
          <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
            <p>Suggested searches: Anthropic, Cohere, Adept AI, Midjourney, RunwayML, or any startup of interest</p>
          </div>
        )}
      </div>
      
      {showResults && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Anthropic</h3>
                <p className="text-sm text-gray-600 mt-1">AI safety and research company focused on building reliable, interpretable AI systems</p>
              </div>
              <div className="bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
                92% Strategic Fit
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm font-medium text-gray-500">Founded</div>
                <div className="font-medium text-gray-900">2021</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm font-medium text-gray-500">Total Funding</div>
                <div className="font-medium text-gray-900">$1.5B</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm font-medium text-gray-500">Latest Valuation</div>
                <div className="font-medium text-gray-900">$4.1B</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Company Overview</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Anthropic is an AI safety company founded by former OpenAI research executives. The company focuses on developing reliable, interpretable, and steerable AI systems, with a strong emphasis on safety and responsible deployment. Their flagship product, Claude, is a conversational AI assistant designed to be helpful, harmless, and honest.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-3">Key Technologies</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full bg-gray-800 mr-2"></div>
                    <span className="text-gray-700">Constitutional AI - An approach to aligning AI systems with human values</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
                    <span className="text-gray-700">RLHF - Reinforcement learning from human feedback</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                    <span className="text-gray-700">Large language models (Claude family)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-gray-700">Scalable oversight techniques for training</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">SWOT Analysis</h4>
                  <span className="text-xs text-gray-500">AI-generated</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="font-medium text-gray-900 mb-1">Strengths</div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Industry-leading safety approach</li>
                      <li>• Strong technical team (ex-OpenAI)</li>
                      <li>• Major partnerships with Google, AWS, Notion</li>
                      <li>• Novel RLHF techniques</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="font-medium text-gray-900 mb-1">Weaknesses</div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Behind OpenAI in market adoption</li>
                      <li>• Limited multimodal capabilities</li>
                      <li>• Higher compute requirements</li>
                      <li>• Newer brand with less recognition</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="font-medium text-gray-900 mb-1">Opportunities</div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Enterprise focus for safety-critical applications</li>
                      <li>• Regulatory advantage as AI governance increases</li>
                      <li>• Early in commercialization journey</li>
                      <li>• Expanding API ecosystem</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="font-medium text-gray-900 mb-1">Threats</div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Intense competition (OpenAI, Cohere, etc.)</li>
                      <li>• Rapid pace of open-source advancement</li>
                      <li>• High operating costs and burn rate</li>
                      <li>• Dependency on cloud providers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Funding History</h3>
              <ChartComponent
                type={ChartType.Bar}
                height={250}
                data={{
                  labels: ['Seed', 'Series A', 'Series B', 'Series C'],
                  datasets: [
                    {
                      label: 'Funding Amount ($M)',
                      data: [124, 310, 580, 450],
                      backgroundColor: ['#5025c4', '#6f42c1', '#8258d0', '#9670dc']
                    }
                  ]
                }}
              />
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Latest Round (2023):</span>
                  <span className="font-medium text-gray-900">$450M Series C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lead Investors:</span>
                  <span className="font-medium text-gray-900">Google, Spark Capital</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Post-money Valuation:</span>
                  <span className="font-medium text-gray-900">$4.1B</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Market Position</h3>
              <ChartComponent
                type={ChartType.Pie}
                height={250}
                data={{
                  labels: ['Anthropic', 'OpenAI', 'Cohere', 'AI21 Labs', 'Other'],
                  datasets: [
                    {
                      data: [18, 56, 12, 8, 6],
                      backgroundColor: ['#5025c4', '#6f42c1', '#8258d0', '#9670dc', '#a989e1']
                    }
                  ]
                }}
              />
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Share (LLM API):</span>
                  <span className="font-medium text-gray-900">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year-over-Year Growth:</span>
                  <span className="font-medium text-gray-900">320%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Enterprise Adoption:</span>
                  <span className="font-medium text-gray-900">Medium-High</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Strategic Fit Assessment</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">Technology Alignment</div>
                  <div className="text-sm font-medium text-gray-900">95%</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">Market Growth Potential</div>
                  <div className="text-sm font-medium text-gray-900">88%</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">Team Quality</div>
                  <div className="text-sm font-medium text-gray-900">97%</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">Business Model Viability</div>
                  <div className="text-sm font-medium text-gray-900">82%</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">Corporate Strategy Alignment</div>
                  <div className="text-sm font-medium text-gray-900">92%</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="font-medium text-gray-900 mb-2">AI Investment Recommendation</div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">High Priority Investment Opportunity (Tier 1).</span> Anthropic represents a strategic fit with your corporate focus on responsible AI deployment. Their constitutional AI approach provides a unique differentiation in the market and addresses enterprise concerns around AI safety and governance. Consider pursuing partnership discussions, with potential for strategic investment in the next funding round.
              </p>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Layers className="h-4 w-4 mr-2" />
              Compare Companies
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Download className="h-4 w-4 mr-2" />
              Export Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};