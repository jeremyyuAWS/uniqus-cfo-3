import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  title?: string;
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps, title }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card border border-gray-200 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>}
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className="flex flex-col items-center text-center max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="bg-gray-100 rounded-full p-4 mb-3">
                <div className="text-gray-800">
                  {step.icon}
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.description}</p>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div 
                className="mx-2 my-4 md:my-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.15 }}
              >
                <ArrowRight className="text-gray-400 h-5 w-5 md:rotate-0 rotate-90" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};