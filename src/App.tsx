import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Discover } from './components/tabs/Discover';
import { Analyze } from './components/tabs/Analyze';
import { Strategize } from './components/tabs/Strategize';
import { Validate } from './components/tabs/Validate';

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, name: 'Discover', component: <Discover /> },
    { id: 1, name: 'Analyze', component: <Analyze /> },
    { id: 2, name: 'Strategize', component: <Strategize /> },
    { id: 3, name: 'Validate', component: <Validate /> },
  ];

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          CVC Vision
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          AI-Powered Foresight for Bold Investments
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