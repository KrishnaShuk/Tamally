import React from 'react';
import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function HowItWorksMobile({ steps }: { steps: Step[] }) {
  return (
    <div className="py-16 sm:py-24 lg:hidden">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          How It Works
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-accent" />
      </div>
      <ul className="space-y-16">
        {steps.map((step, index) => (
          <li key={index} className="flex flex-col items-center text-center">
            
            {/* --- FIX: Text content is now first --- */}
            <p className="text-5xl font-bold text-brand-accent">{step.number}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 max-w-sm text-base text-gray-400">{step.description}</p>

            {/* --- FIX: Image is now last --- */}
            {/* Changed mb-8 (margin-bottom) to mt-8 (margin-top) to add space above the image */}
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-700 aspect-[4/3] mt-8">
              <Image
                src={step.imageSrc}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}