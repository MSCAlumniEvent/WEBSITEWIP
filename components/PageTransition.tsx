'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip fade on initial page load
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setVisible(false);
    window.scrollTo(0, 0);
    // Wait one frame for opacity:0 to paint, then fade in
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
