import React from 'react';
import { motion } from 'framer-motion';

interface DashboardMockupProps {
  imageSrc: string;
  title: string;
  description?: string;
}

export const DashboardMockup: React.FC<DashboardMockupProps> = ({ imageSrc, title, description }) => {
  return (
    <motion.div 
      className="rounded-lg overflow-hidden border border-gray-200 shadow-card bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-2 bg-gray-50 border-b border-gray-200 flex items-center">
        <div className="flex space-x-2 ml-2">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-xs text-gray-500 mx-auto pr-6">{title}</div>
      </div>
      <div className="p-4">
        <img 
          src={imageSrc} 
          alt={`${title} dashboard`} 
          className="w-full rounded-md border border-gray-100"
        />
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </motion.div>
  );
};