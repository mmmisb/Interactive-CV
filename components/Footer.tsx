import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{PERSONAL_INFO.name}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{PERSONAL_INFO.title}</p>
        
        <div className="flex justify-center gap-6 mb-8">
            <span className="text-sm text-slate-500 dark:text-slate-500">
                {PERSONAL_INFO.email} • {PERSONAL_INFO.location}
            </span>
        </div>

        <p className="text-slate-400 dark:text-slate-600 text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};