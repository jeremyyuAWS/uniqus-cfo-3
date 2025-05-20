import React, { useState } from 'react';
import { AgentCard } from '../AgentCard';
import { AgentDemoContainer } from '../demos/AgentDemoContainer';
import { CashFlowForecasterDemo } from '../demos/CashFlowForecasterDemo';
import { ARCollectionsPrioritizerDemo } from '../demos/ARCollectionsPrioritizerDemo';
import { APPaymentRunOptimizerDemo } from '../demos/APPaymentRunOptimizerDemo';
import { CloseCycleOrchestratorDemo } from '../demos/CloseCycleOrchestratorDemo';
import { TransferPricingComplianceDemo } from '../demos/TransferPricingComplianceDemo';
import { SaaSRevRecCopilotDemo } from '../demos/SaaSRevRecCopilotDemo';
import { FXHedgeTriageAgentDemo } from '../demos/FXHedgeTriageAgentDemo';
import { SpendIntelligenceDemo } from '../demos/SpendIntelligenceDemo';
import { ESGDisclosureDrafterDemo } from '../demos/ESGDisclosureDrafterDemo';
import { ScenarioPlanningCopilotDemo } from '../demos/ScenarioPlanningCopilotDemo';
import { agentData } from '../../data/agentData';

export const AgentHub: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDemo = (agentId: number) => {
    setSelectedAgent(agentId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Helper function to render the appropriate demo component based on agent ID
  const renderDemoComponent = (agentId: number) => {
    switch (agentId) {
      case 1: 
        return <CashFlowForecasterDemo />;
      case 2:
        return <ARCollectionsPrioritizerDemo />;
      case 3:
        return <APPaymentRunOptimizerDemo />;
      case 4:
        return <CloseCycleOrchestratorDemo />;
      case 5:
        return <TransferPricingComplianceDemo />;
      case 6:
        return <SaaSRevRecCopilotDemo />;
      case 7:
        return <FXHedgeTriageAgentDemo />;
      case 8:
        return <SpendIntelligenceDemo />;
      case 9:
        return <ESGDisclosureDrafterDemo />;
      case 10:
        return <ScenarioPlanningCopilotDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Agent Hub</h2>
        <p className="text-gray-600">
          Specialized AI agents designed to solve specific pain points for enterprise CFOs.
          Each agent delivers measurable financial impact and efficiency gains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentData.map((agent) => (
          <AgentCard 
            key={agent.id}
            agent={agent}
            onDemoClick={() => handleOpenDemo(agent.id)}
          />
        ))}
      </div>

      {selectedAgent !== null && (
        <AgentDemoContainer
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          agent={agentData.find(agent => agent.id === selectedAgent)!}
          onTagClick={(tag) => {
            const found = agentData.find(agent => agent.tags?.includes(tag));
            if (found) {
              setSelectedAgent(found.id);
              setIsModalOpen(true);
            }
          }}
        >
          {renderDemoComponent(selectedAgent)}
        </AgentDemoContainer>
      )}
    </div>
  );
};