"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

// Define animation variants for the dot for cleaner code
const dotVariants = {
  inactive: {
    backgroundColor: '#4b5563', // Inactive dot color (gray)
    scale: 1,
    boxShadow: 'none',
  },
  active: {
    backgroundColor: 'oklch(0.577 0.245 27.325)', // Active dot color
    scale: 1.5,
    boxShadow: '0 0 8px oklch(0.577 0.245 27.325), 0 0 16px oklch(0.577 0.245 27.325)', // The glow
  },
  passed: {
    backgroundColor: 'oklch(0.577 0.245 27.325)', // Passed dot color (filled, no glow)
    scale: 1,
    boxShadow: 'none',
  },
};

export default function HowItWorksDesktop({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStep(Math.min(Math.floor(latest * steps.length), steps.length - 1));
  });

  return (
    <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-5 items-center gap-x-12">
          
          <div className="relative py-12 col-span-2">
            <div className="absolute left-4 top-0 h-full w-px bg-gray-700" />
            <motion.div
              className="absolute left-4 top-0 h-full w-px"
              style={{
                scaleY: timelineProgress,
                transformOrigin: 'top',
                backgroundColor: 'oklch(0.577 0.245 27.325)',
              }}
            />
            
            <ul className="space-y-32">
              {steps.map((step, index) => {
                // Determine the state of the dot based on scroll progress
                let dotState = 'inactive';
                if (activeStep === index) {
                  dotState = 'active';
                } else if (activeStep > index) {
                  dotState = 'passed';
                }

                return (
                  <li key={step.number} className="relative">
                    <div className="absolute left-4 top-5 flex size-4 -translate-x-1/2 items-center justify-center">
                      <motion.div
                        className="size-full rounded-full"
                        variants={dotVariants}
                        // --- THE FIX ---
                        // Use the determined state for the animation
                        animate={dotState}
                        // Explicitly set the initial state: first dot is active, others are inactive
                        initial={index === 0 ? 'active' : 'inactive'}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    
                    <motion.div
                      animate={{ opacity: activeStep === index ? 1 : 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start"
                    >
                      <div className="ml-12 max-w-md break-words">
                        <p className="text-5xl font-bold text-[oklch(0.577_0.245_27.325)]">{step.number}</p>
                        <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-400">{step.description}</p>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="relative h-[600px] w-full col-span-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.imageSrc}
                animate={{ opacity: activeStep === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="overflow-hidden rounded-xl border border-gray-700 shadow-xl shadow-black/30">
                  <Image src={step.imageSrc} alt={step.title} width={1200} height={900} className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}