import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const professionalSkills = SKILLS.filter(s => s.category === 'Professional');
  const itSkills = SKILLS.filter(s => s.category === 'IT');

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Professional Skills */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                <CheckCircle2 size={24} />
              </div>
              Professional Domain
            </h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default shadow-sm text-sm font-medium flex items-center gap-2"
                >
                  {skill.logo && <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* IT & Technical Skills */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Terminal size={24} />
              </div>
              IT & Technical Systems
            </h3>
            <div className="flex flex-wrap gap-3">
              {itSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 cursor-default shadow-sm text-sm font-medium flex items-center gap-2"
                >
                  {skill.logo && <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};