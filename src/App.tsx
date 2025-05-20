import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AgentHub } from './components/tabs/AgentHub';
import { OGISuperAgent } from './components/tabs/OGISuperAgent';
import { Analytics } from './components/tabs/Analytics';
import { AboutOGI } from './components/tabs/AboutOGI';

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, name: 'Agent Hub', component: <AgentHub /> },
    { id: 1, name: 'OGI Super Agent', component: <OGISuperAgent /> },
    { id: 2, name: 'Analytics', component: <Analytics /> },
    { id: 3, name: 'About OGI', component: <AboutOGI /> },
  ];

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          CFO AI Agent Hub
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Organizational General Intelligence (OGI) for enterprise finance leaders, 
          orchestrating AI agents for analytics, compliance, and automation.
        </p>
        
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="animate-fade-in">
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </Layout>
  );
}

export default App;