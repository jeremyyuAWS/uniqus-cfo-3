import React from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Database, 
  Bot, 
  Workflow, 
  Lock 
} from 'lucide-react';

export const AboutOGI: React.FC = () => {
  const features = [
    {
      title: 'Enterprise Data Integration',
      description: 'Seamlessly connects to ERP, CRM, banking, and procurement systems to unify financial data across the organization.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'LLM-Powered Reasoning',
      description: 'Combines large language models with structured financial logic to deliver explainable, compliant outputs.',
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      title: 'Multi-Agent Orchestration',
      description: 'Coordinates specialized financial agents to tackle complex workflows that span multiple systems and processes.',
      icon: <Workflow className="h-6 w-6" />
    },
    {
      title: 'Compliance & Security',
      description: 'Built with enterprise-grade security and compliance controls, including audit trails and validation steps.',
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: 'Financial Domain Expertise',
      description: 'Pre-trained on financial regulations, accounting standards, and best practices specific to enterprise finance.',
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: 'Governance Controls',
      description: 'Provides fine-grained access controls, approval workflows, and oversight mechanisms for sensitive financial operations.',
      icon: <Lock className="h-6 w-6" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About OGI</h2>
        <p className="text-gray-600 mb-4">
          Organizational General Intelligence (OGI) represents the next evolution of enterprise AI, 
          moving beyond single-purpose tools to an orchestrated system of specialized agents working together.
        </p>
        <p className="text-gray-600">
          For CFOs facing increased complexity and compliance demands, OGI provides a framework that connects
          data sources, financial systems, and AI capabilities into a cohesive intelligence layer that enhances
          human decision-making across the finance function.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-card border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="text-gray-800 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-8 text-white mt-8">
        <h3 className="text-xl font-semibold mb-4">Why OGI for Modern CFOs</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white mr-3">
              →
            </span>
            <span>Manage increasingly lean finance teams while handling growing regulatory complexity</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white mr-3">
              →
            </span>
            <span>Leverage rich cloud data environments to extract strategic insights and operational efficiencies</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white mr-3">
              →
            </span>
            <span>Meet board-level expectations for digital transformation and data-driven finance excellence</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white mr-3">
              →
            </span>
            <span>Navigate global compliance pressures and reporting requirements with confidence</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Request Enterprise Demo
        </button>
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Download Whitepaper
        </button>
      </div>
    </div>
  );
};