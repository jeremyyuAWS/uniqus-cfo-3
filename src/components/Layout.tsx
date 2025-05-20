import React, { ReactNode } from 'react';
import { BrainCircuit } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BrainCircuit className="h-8 w-8 text-gray-800" />
              <span className="ml-2 font-semibold text-xl text-gray-900">OGI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150">
                Enterprise Login
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="pb-10">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="flex items-center">
              <BrainCircuit className="h-6 w-6 text-gray-700" />
              <span className="ml-2 text-sm font-medium text-gray-500">© 2025 OGI Platform</span>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Privacy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Terms
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};