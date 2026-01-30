import React from 'react';
import { PERSONAL_INFO, CONTACT_LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950 -z-10" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold tracking-wide animate-fade-in-up">
            Curriculum Vitae
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight animate-fade-in-up delay-100">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium animate-fade-in-up delay-200">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl animate-fade-in-up delay-300">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-400">
            {/* Social Links Only - Download Button Removed */}
            <div className="flex gap-4 items-center">
              {CONTACT_LINKS.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full shadow-md hover:shadow-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                  title={link.text}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-left delay-500">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary-600 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img 
                src="https://i.ibb.co/Fq8xhtjS/2016-2.jpg" 
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Muhammad+Moammar&background=0D8ABC&color=fff&size=500';
                }}
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce-slow">
              <p className="text-sm font-bold text-slate-900 dark:text-white">15+ Years</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};