"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HowItWorksMobile from './HowItWorksMobile';

const HowItWorksDesktop = dynamic(() => import('./HowItWorksDesktop'), {
  ssr: false,
});

const steps = [
  {
    number: '1', title: 'Download the Extension',
    description: 'Click on the above button under the title for the extension',
    imageSrc: '/images/how-to-step-1.png',
  },
  {
    number: '2', title: 'Open the modal in Gmail',
    description: 'After Downloading, an icon will appear in the Messaging Modal.',
    imageSrc: '/images/how-to-step-2.png',
  },
  {
    number: '3', title: 'Create and edit your email Templates',
    description: 'You can now edit and create the templates as per your wants with the help of AI',
    imageSrc: '/images/how-to-step-3.png',
  },
];

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('change', listener);
    return () => window.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
};

export default function HowItWorks() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (!isMounted) return null;

  return (
    <section className="bg-black">
      {/* --- FIX #2: Added container for margins and centering --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isDesktop ? <HowItWorksDesktop steps={steps} /> : <HowItWorksMobile steps={steps} />}
      </div>
    </section>
  );
}