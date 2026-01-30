import React from 'react';
import { EDUCATION_HISTORY } from '../constants';
import { GraduationCap, ExternalLink } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.id} className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border-t-4 border-primary-500 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-800">
                <GraduationCap size={48} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                     <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-lg">
                        {edu.year}
                    </span>
                    {edu.logo && (
                        <div className="w-12 h-12 bg-white rounded-lg p-1 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                             <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                    )}
                </div>
               
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 pr-2 leading-tight">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{edu.institution}</p>
                
                {edu.link && (
                  <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium mt-auto"
                  >
                    Visit Institution <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};