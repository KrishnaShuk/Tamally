import React from 'react';
import Image from 'next/image';

// You can define a more specific type if needed
interface Step {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function HowItWorksMobile({ steps }: { steps: Step[] }) {
  return (
    <div className="py-16 lg:hidden">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />
        </div>
        <ul className="space-y-12">
          {steps.map((step, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 overflow-hidden rounded-xl border border-gray-700">
                <Image src={step.imageSrc} alt={step.title} width={600} height={400} />
              </div>
              <p className="text-4xl font-bold text-orange-500">{step.number}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}