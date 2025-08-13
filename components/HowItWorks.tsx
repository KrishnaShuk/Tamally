"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HowItWorksMobile from './HowItWorksMobile';

// --- THE FIX ---
// Dynamically import the desktop component and disable Server-Side Rendering (ssr)
const HowItWorksDesktop = dynamic(() => import('./HowItWorksDesktop'), {
  ssr: false,
});

const steps = [
  {
    number: '1', title: 'Prepare your Mailing List',
    description: 'Create your Google Sheets with your mailing list.',
    imageSrc: '/images/how-to-step-1.png',
  },
  {
    number: '2', title: 'Create Your Email Template',
    description: 'Choose a template, write your content, and save it.',
    imageSrc: '/images/how-to-step-2.png',
  },
  {
    number: '3', title: 'Send Your Mail Merge',
    description: 'Go back to your sheet and click send.',
    imageSrc: '/images/how-to-step-3.png',
  },
];

// Custom hook to safely check media queries on the client
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
  // Guard against hydration errors by only rendering after mount
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (!isMounted) {
    return null; // Or a loading skeleton component
  }

  return (
    <section className="bg-black">
      {isDesktop ? <HowItWorksDesktop steps={steps} /> : <HowItWorksMobile steps={steps} />}
    </section>
  );
}