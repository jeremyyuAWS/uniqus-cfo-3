import { ReactNode } from 'react';

export interface Agent {
  id: number;
  name: string;
  painSolved: string;
  kpi: string;
  capabilities: string;
  icon: ReactNode;
  demoConversation: { role: string; content: string }[];
  tags?: string[];
}

export interface GraphData {
  nodes: {
    id: string;
    name: string;
    type: string;
  }[];
  links: {
    source: string;
    target: string;
  }[];
}