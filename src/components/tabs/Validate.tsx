import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, MessageSquare, FileCheck, Download } from 'lucide-react';

export const Validate: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: 'Welcome to the Expert Validation interface. I can help you validate your CVC investment thesis, compare technologies, or provide expert perspectives on market trends. What would you like to validate today?' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('anthropic') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Anthropic, the primary risks to validate include:\n\n1. Competitive Position: OpenAI maintains a significant first-mover advantage with widespread GPT adoption. Anthropic will need to differentiate based on safety and reliability, not just raw capabilities.\n\n2. Business Model Risk: Anthropic's current API-based business model faces pricing pressure from open source models and larger competitors who can operate at lower margins.\n\n3. Regulatory Uncertainty: While Anthropic's safety-focused approach may be advantageous in a regulated environment, shifting regulatory landscapes could impact go-to-market timelines.\n\n4. Talent Retention: AI talent remains highly competitive, and Anthropic will need to maintain its team despite aggressive recruiting from tech giants.\n\nI recommend conducting technical due diligence specifically on their Constitutional AI approach and requesting detailed unit economics for their API business to validate the sustainability of their financial model.';
    } else if (lowerMessage.includes('anthropic') && lowerMessage.includes('valuation')) {
      return 'Anthropic\'s current $4.1B valuation reflects strong investor confidence, but requires validation against several benchmarks:\n\n1. Comparable Companies: The valuation represents a ~30x multiple on estimated 2024 revenue, which is high but in-line with leading AI companies. OpenAI\'s recent valuation was ~50x revenue, while Cohere is ~20x.\n\n2. Growth Trajectory: Anthropic is projecting 200-250% YoY growth for the next 3 years. If achieved, the current valuation represents a more reasonable 8-10x multiple on projected 2026 revenue.\n\n3. Strategic Value: Beyond financial metrics, Anthropic has strategic value through its safety-focused approach and technical talent pool. Their Constitutional AI approach could be particularly valuable as regulatory pressure increases.\n\n4. Downside Protection: Recent funding rounds included significant corporate strategic investors (Google, Salesforce) with commercial agreements that provide baseline revenue guarantees.\n\nWhile the valuation reflects current AI market enthusiasm, it can be justified if Anthropic maintains its growth trajectory and successfully differentiates through its safety-first approach.';
    } else if (lowerMessage.includes('compare') && (lowerMessage.includes('anthropic') || lowerMessage.includes('claude'))) {
      return 'Comparison of Leading LLM Providers:\n\n**Anthropic (Claude)**\n• Technical Approach: Constitutional AI, RLHF\n• Differentiator: Safety, reliability, context length (100K tokens)\n• Enterprise Focus: High, with specific safety features\n• Pricing: Premium tier with competitive enterprise rates\n• Ecosystem: Growing, with key partners like Notion, Quora\n\n**OpenAI (GPT-4)**\n• Technical Approach: RLHF, multimodal pre-training\n• Differentiator: First-mover, multimodal capabilities\n• Enterprise Focus: High, with significant Microsoft integration\n• Pricing: Premium with high adoption\n• Ecosystem: Largest, most developed ecosystem\n\n**Cohere**\n• Technical Approach: Specialized command models\n• Differentiator: Enterprise customization, multilingual\n• Enterprise Focus: Very high, B2B primary focus\n• Pricing: Enterprise-focused with flexible deployment\n• Ecosystem: Growing with targeted enterprise use cases\n\nAnthropics's key advantage is its safety-first approach, making it potentially better suited for regulated industries or critical applications where reliability and explainability are paramount. However, OpenAI currently leads in general capabilities and ecosystem adoption.';
    } else if (lowerMessage.includes('anthropic') && lowerMessage.includes('recommend')) {
      return 'Based on our analysis and validation process, I recommend proceeding with a strategic investment in Anthropic with the following approach:\n\n1. Investment Thesis: Anthropic represents a strong strategic fit for enhancing your AI capabilities while aligning with responsible AI principles. Their safety-focused approach differentiates them in an increasingly competitive market.\n\n2. Recommended Structure:\n   • Investment Size: $5-10M range\n   • Target: Secondary shares or participation in upcoming funding round\n   • Commercial Agreement: Secure favorable API access and early product roadmap visibility\n\n3. Value Creation Levers:\n   • Technology Access: Early access to Claude models for internal application development\n   • Strategic Insight: Regular briefings on AI safety and governance approaches\n   • Ecosystem Positioning: Potential to connect with other enterprise customers\n\n4. Risks to Monitor:\n   • Funding Environment: Be prepared for down-round protection if AI funding cools\n   • Technical Differentiation: Validate ongoing differentiation vs. open-source alternatives\n   • Enterprise Go-to-Market: Track their ability to build enterprise-ready features and security\n\nThis recommendation is supported by multiple expert validations, including our technical AI research team and analysis of comparable strategic CVC investments in the AI sector.';
    } else {
      return 'Thank you for your question. To provide the most accurate validation, I\'d like to understand more about your specific concerns. \n\nAs an expert validation system, I can help with:\n\n1. Technology assessment and verification of claims\n2. Market size and growth validation\n3. Competitive landscape analysis\n4. Due diligence support for specific companies\n5. Investment thesis stress-testing\n\nCould you please provide more details about what specific aspect you\'d like me to validate? For example, are you interested in validating Anthropic\'s technical capabilities, their market position, or perhaps comparing multiple companies in the generative AI space?';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Validate</h2>
          <p className="text-gray-600 mt-1">Expert validation and due diligence for investment decisions.</p>
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
              <h3 className="text-xl font-semibold text-gray-900">About Validate</h3>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>The <span className="font-medium text-gray-800">Validate</span> tab connects CVC teams with expert AI validation to verify investment theses, perform due diligence, and generate credible investment documentation.</p>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expert-level AI validation of investment theses</li>
                  <li>Technology claims verification</li>
                  <li>Market size and growth validation</li>
                  <li>Company comparison and benchmarking</li>
                  <li>Investment memo generation with evidence-based recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Business Value:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>85% reduction in due diligence research time</li>
                  <li>75% faster creation of investment documentation</li>
                  <li>More rigorous validation of investment hypotheses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col h-[600px] overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-medium text-gray-900">Expert Validation Assistant</h3>
            <div className="text-xs text-gray-500 px-2 py-1 bg-gray-200 rounded-full">Powered by Accenture KnowledgeGraph</div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.role === 'user' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex space-x-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask for validation on investment thesis, technology claims, or market sizing..."
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none overflow-hidden"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
                className={`p-2 rounded-md ${
                  !message.trim() || isTyping
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                } transition-colors duration-150`}
              >
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Try: "What are the key risks I should validate for Anthropic?" or "Is Anthropic's valuation justified?"
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Validation Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <div className="text-sm text-gray-600">Technical Claims</div>
                  <div className="text-sm font-medium text-gray-900">4/5 validated</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <div className="text-sm text-gray-600">Market Size</div>
                  <div className="text-sm font-medium text-gray-900">3/3 validated</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <div className="text-sm text-gray-600">Team Background</div>
                  <div className="text-sm font-medium text-gray-900">5/5 validated</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <div className="text-sm text-gray-600">Financials</div>
                  <div className="text-sm font-medium text-gray-900">2/4 validated</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <div className="text-xs flex justify-between text-gray-500">
                <span>Overall Validation: 14/17 items</span>
                <span className="font-medium">82% Complete</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200 flex-grow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Documentation</h3>
              <button className="text-sm text-gray-600 hover:text-gray-900">
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Investment Memo</h4>
                    <p className="text-xs text-gray-500 mt-1">Generated from validation analysis</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Technical Due Diligence Report</h4>
                    <p className="text-xs text-gray-500 mt-1">AI safety and capabilities assessment</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Market Size Verification</h4>
                    <p className="text-xs text-gray-500 mt-1">Third-party data comparison</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Competitive Analysis</h4>
                    <p className="text-xs text-gray-500 mt-1">Landscape and differentiation report</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <Download className="h-4 w-4 mr-2" />
                Export Complete Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};