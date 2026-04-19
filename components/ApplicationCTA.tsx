'use client';

import { useEffect, useState } from 'react';

export default function ApplicationCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        Become part of our team!
      </h2>
      <p className="text-xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
        We&apos;re looking for driven students ready to make an impact. Apply now and start your consulting journey.
      </p>

      {/* Apply Now button with glow */}
      <a
        href="https://share.hsforms.com/1dYI0I9c4TY-JKKqX86F6OAbw4n1"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 bg-orange text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(232,119,34,0.5)]"
      >
        <span>Apply Now</span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>

    </div>
  );
}
