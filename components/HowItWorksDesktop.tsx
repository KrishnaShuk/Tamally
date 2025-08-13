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
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-start gap-16 px-8">
          {/* Left Column */}
          <div className="relative py-12">
            <div className="absolute left-8 top-0 h-full w-px bg-gray-700" />
            <motion.div
              className="absolute left-8 top-0 h-full w-px bg-orange-500"
              style={{ scaleY: timelineProgress, transformOrigin: 'top' }}
            />
            <ul className="space-y-48">
              {steps.map((step, index) => (
                <li key={step.number}>
                  <motion.div
                    animate={{ opacity: activeStep === index ? 1 : 0.4 }}
                    className="flex items-start"
                  >
                    <div className="absolute left-8 top-0 flex size-8 -translate-x-1/2 items-center justify-center">
                      <motion.div
                        animate={{ backgroundColor: activeStep >= index ? '#f97316' : '#4b5563' }}
                        className="size-5 rounded-full"
                      />
                    </div>
                    <div className="ml-20">
                      <p className="text-5xl font-bold text-orange-500">{step.number}</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column */}
          <div className="relative h-[500px] w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.imageSrc}
                animate={{ opacity: activeStep === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="overflow-hidden rounded-xl border border-gray-700">
                  <Image src={step.imageSrc} alt={step.title} width={1200} height={800} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}