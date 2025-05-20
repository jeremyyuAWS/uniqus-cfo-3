import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface OGIChatProps {
  selectedNode: string | null;
}

export const OGIChat: React.FC<OGIChatProps> = ({ selectedNode }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { 
      role: 'agent', 
      content: 'Hello, I am your OGI Super Agent. I can help you understand how our agents work together and answer questions about finance operations. What would you like to know?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedNode) {
      handleNodeSelection(selectedNode);
    }
  }, [selectedNode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleNodeSelection = (nodeId: string) => {
    // Get node information from somewhere
    setIsTyping(true);
    
    setTimeout(() => {
      const nodeInfo = getNodeInfo(nodeId);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'system', 
          content: `You selected: ${nodeInfo.name}` 
        },
        { 
          role: 'agent', 
          content: nodeInfo.description 
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(input);
      setMessages(prev => [...prev, { role: 'agent', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simple AI response simulation
  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('agent') && lowerMessage.includes('work together')) {
      return 'Our agents work together through a process called orchestration. The OGI framework allows agents to share context, handoff tasks, and collaborate on complex workflows. For example, the Cash-Flow Forecaster might identify a liquidity issue and alert the AR Collections Prioritizer to focus on specific high-value invoices.';
    } else if (lowerMessage.includes('security') || lowerMessage.includes('compliance')) {
      return 'All our agents operate within enterprise security boundaries. They are SOC 2 compliant, support data residency requirements, and provide comprehensive audit trails. Our Transfer Pricing and ESG agents specifically have enhanced compliance controls built in.';
    } else if (lowerMessage.includes('data') || lowerMessage.includes('integrate')) {
      return 'We integrate with major ERP systems (SAP, Oracle, NetSuite), banking platforms, and cloud service providers. Our agents extract, transform, and normalize data from these sources to create a unified financial data layer that powers all analytics and automation.';
    } else {
      return 'I can help with questions about our agents, their capabilities, how they integrate with your systems, and the value they can deliver for your finance organization. Feel free to ask about specific use cases or integration points.';
    }
  };

  // Mock node info
  const getNodeInfo = (nodeId: string) => {
    const nodeMap: Record<string, { name: string; description: string }> = {
      'agent1': {
        name: 'Cash-Flow Forecaster',
        description: 'This agent combines traditional time-series forecasting with ML to predict cash positions with higher accuracy. It integrates with bank APIs for real-time data and runs Monte Carlo simulations to show probability distributions of future cash positions.'
      },
      'agent2': {
        name: 'AR Collections Prioritizer',
        description: 'This agent analyzes historical payment data to identify at-risk invoices and prioritize collection efforts. It can draft personalized email templates for collectors and track the effectiveness of different collection strategies.'
      },
      'system1': {
        name: 'ERP System',
        description: 'The central financial system of record that provides transaction data, GL entries, and master data. Our agents connect securely through APIs to extract and write data when authorized.'
      },
      'data1': {
        name: 'Banking Data',
        description: 'Real-time and historical cash movements across all corporate accounts. This data powers liquidity forecasting, reconciliation, and working capital optimization.'
      },
    };
    
    return nodeMap[nodeId] || { name: nodeId, description: 'Detailed information about this node is not available yet.' };
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} ${message.role === 'system' ? 'justify-center' : ''}`}
          >
            {message.role === 'system' ? (
              <div className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500">
                {message.content}
              </div>
            ) : (
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            )}
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
      
      <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-lg">
        <div className="flex space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about agent capabilities, integrations, or use cases..."
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none overflow-hidden"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className={`p-2 rounded-md ${
              !input.trim() || isTyping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            } transition-colors duration-150`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};