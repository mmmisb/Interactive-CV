import React, { useState } from 'react';
import { WORK_HISTORY } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeJobId, setActiveJobId] = useState(WORK_HISTORY[0].id);
  const activeJob = WORK_HISTORY.find(job => job.id === activeJobId) || WORK_HISTORY[0];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Vertical Timeline List (Left Side) */}
            <div className="md:w-1/3 flex-shrink-0 relative">
                {/* Vertical Line - Centered through the circles (left-8 means 32px, which is center of w-8 + p-4) */}
                <div className="absolute top-4 bottom-4 left-8 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block rounded-full"></div>
                
                <div className="space-y-4 relative z-10 flex overflow-x-auto md:overflow-visible md:flex-col md:space-y-2 pb-4 md:pb-0 snap-x hide-scrollbar">
                    {WORK_HISTORY.map((job) => {
                        const isActive = job.id === activeJobId;
                        return (
                            <button
                                key={job.id}
                                onClick={() => setActiveJobId(job.id)}
                                className={`
                                    flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 w-full snap-center shrink-0 md:shrink
                                    ${isActive 
                                        ? 'bg-white dark:bg-slate-800 shadow-lg border border-primary-200 dark:border-primary-900 translate-x-2' 
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                                    }
                                `}
                            >
                                <div className={`
                                    hidden md:flex w-8 h-8 rounded-full items-center justify-center shrink-0 border-2 transition-colors mt-1 z-10
                                    ${isActive 
                                        ? 'bg-primary-600 border-primary-600 text-white' 
                                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-400'
                                    }
                                `}>
                                   {isActive ? <div className="w-2.5 h-2.5 bg-white rounded-full" /> : <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full" />}
                                </div>
                                
                                <div className="min-w-0">
                                    <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-primary-700 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {job.title}
                                    </h4>
                                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                                      {job.period}
                                    </div>
                                    <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 truncate">
                                      {job.company}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Detail Card (Right Side) */}
            <div className="md:w-2/3 flex-grow">
                 <div key={activeJob.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 animate-fade-in-up h-full flex flex-col justify-center">
                    
                    {activeJob.description && (
                        <div className="mb-8 text-slate-600 dark:text-slate-300 italic bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-primary-500 shadow-sm text-sm md:text-base leading-relaxed">
                            "{activeJob.description}"
                        </div>
                    )}

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-slate-400 dark:bg-slate-600"></span>
                            Key Responsibilities
                        </h4>
                        <ul className="grid gap-3">
                            {activeJob.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 group text-sm md:text-base">
                                    <div className="mt-1.5 p-1 bg-primary-100 dark:bg-primary-900/30 rounded text-primary-600 dark:text-primary-400 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                                        <ChevronRight size={12} />
                                    </div>
                                    <span className="leading-relaxed">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};