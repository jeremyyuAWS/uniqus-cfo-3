import React, { useState } from 'react';
import { UploadCloud, Search, ArrowRight, HelpCircle, FileText, Download } from 'lucide-react';
import { BarChart } from '../charts/BarChart';

export const Discover: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 2500);
    }, 1500);
  };
  
  const sectorData = [
    { name: 'Generative AI', value: 87, color: '#5025c4' },
    { name: 'Quantum Computing', value: 72, color: '#6f42c1' },
    { name: 'Edge Computing', value: 65, color: '#8258d0' },
    { name: 'Digital Twins', value: 58, color: '#9670dc' },
    { name: 'Sustainable Tech', value: 52, color: '#a989e1' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Discover</h2>
          <p className="text-gray-600 mt-1">Explore sectors, trends, and technology domains aligned with your strategic goals.</p>
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
              <h3 className="text-xl font-semibold text-gray-900">About Discover</h3>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>The <span className="font-medium text-gray-800">Discover</span> tab helps CVC teams explore emerging technology domains and identify potential investment opportunities based on corporate strategy.</p>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Strategy-driven sector recommendations</li>
                  <li>AI-generated investment heatmaps</li>
                  <li>Automated trend spotting across 500K+ startups</li>
                  <li>Technology domain clustering</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Business Value:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>60% faster identification of relevant investment areas</li>
                  <li>42% reduction in research time</li>
                  <li>85% higher alignment with corporate strategic goals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showResults ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200 hover:shadow-card-hover transition-shadow duration-300">
            <div className="text-gray-800 mb-4">
              <UploadCloud className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Corporate Strategy</h3>
            <p className="text-sm text-gray-600 mb-4">Upload your corporate strategy document to get AI-powered recommendations aligned with your strategic goals.</p>
            
            <div className="mt-4">
              <button
                onClick={handleUpload}
                disabled={isUploading || isAnalyzing}
                className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isUploading || isAnalyzing
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'text-white bg-gray-800 hover:bg-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors`}
              >
                {isUploading ? 'Uploading...' : isAnalyzing ? 'Analyzing...' : 'Upload Document'}
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200 hover:shadow-card-hover transition-shadow duration-300">
            <div className="text-gray-800 mb-4">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select from Templates</h3>
            <p className="text-sm text-gray-600 mb-4">Choose from our predefined corporate strategy templates to get started quickly.</p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                <span className="flex-grow text-sm">Digital Transformation Strategy</span>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                <span className="flex-grow text-sm">Sustainability Innovation Focus</span>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                <span className="flex-grow text-sm">Healthcare Tech Transformation</span>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Strategic Alignment Assessment</h3>
            <p className="text-gray-600 mb-4">Based on your corporate strategy focused on digital transformation, AI adoption, and sustainable tech, we've identified these key investment areas:</p>
            
            <div className="h-80 mb-4">
              <BarChart 
                data={sectorData}
                horizontal={true}
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Strategy-to-Sector Mapping</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-gray-400">•</div>
                  <div>
                    <span className="font-medium text-gray-900">Digital Customer Experience:</span>
                    <span className="text-gray-600"> Mapped to Generative AI (87% relevance) and Digital Twins (58% relevance)</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-gray-400">•</div>
                  <div>
                    <span className="font-medium text-gray-900">Cloud Transformation:</span>
                    <span className="text-gray-600"> Mapped to Edge Computing (65% relevance) and Quantum Computing (72% relevance)</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-gray-400">•</div>
                  <div>
                    <span className="font-medium text-gray-900">ESG Focus Areas:</span>
                    <span className="text-gray-600"> Mapped to Sustainable Tech (52% relevance) and Digital Twins (58% relevance)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Top Startups in Generative AI</h3>
              
              <div className="space-y-4">
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">Anthropic</h4>
                    <div className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full">
                      92% Match
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">AI safety and research company focused on building reliable, interpretable, and steerable AI systems.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Series C • $450M • Founded 2021
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">Cohere</h4>
                    <div className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full">
                      89% Match
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Creating enterprise-ready large language models and NLP tools for text generation, search, and analysis.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Series C • $270M • Founded 2019
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">Adept AI</h4>
                    <div className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full">
                      85% Match
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Building AI that can automate complex workflows and interact with software the way humans do.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Series B • $350M • Founded 2022
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tech Convergence Opportunities</h3>
              
              <div className="space-y-4">
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">AI + Edge Computing</h4>
                  <p className="text-sm text-gray-600 mt-1">Companies building infrastructure for running AI models at the edge, reducing latency and enabling real-time applications.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Projected CAGR: 38% (2024-2028)
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Digital Twins + Sustainable Tech</h4>
                  <p className="text-sm text-gray-600 mt-1">Virtual replicas of physical systems for optimizing energy usage, reducing waste, and simulating sustainability improvements.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Projected CAGR: 42% (2024-2028)
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Quantum + AI Hybrid Systems</h4>
                  <p className="text-sm text-gray-600 mt-1">Next-gen computing architectures that combine quantum processing for specific AI workloads with traditional computing.</p>
                  <div className="mt-2 text-xs text-gray-500">
                    Projected CAGR: 45% (2024-2028)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Search className="h-4 w-4 mr-2" />
              Refine Search
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};