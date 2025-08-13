import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";
import { ChevronRight } from "lucide-react";
import VantaNetBackground from "./ui/VantaNetBackground";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      {/* Main container for the hero section */}
      <div className="relative min-h-screen bg-black"> {/* Base background */}
        
        {/* Background Layer */}
        <div className="absolute opacity-100 inset-0 z-0">
          <VantaNetBackground />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center">
          {/* Added responsive padding for better spacing on all devices */}
          <div className="text-center px-4 sm:px-6 lg:px-8">
            
            {/* 
              RESPONSIVE HEADING:
              - Starts smaller on mobile (text-6xl)
              - Gets larger on medium screens and up (md:text-8xl)
            */}
            <h1 className="text-6xl md:text-8xl font-extrabold text-white font-playwrite">
              Tamally
            </h1>
            
            {/* 
              RESPONSIVE PARAGRAPH:
              - Less top margin on mobile (mt-8)
              - More top margin on medium screens and up (md:mt-20)
              - Font size is also responsive
            */}
            <p className="mt-8 md:mt-20 max-w-2xl text-lg md:text-xl text-gray-300">
              Your assistant to make easy and converting Email Templates.
            </p>
            
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg"  variant="destructive">
                <Link
                  href="https://chromewebstore.google.com/detail/ai-email-template-editor/anpamecmmdpglhlnkkoclhplfkkakjhf?authuser=1&hl=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Chrome for Free
                  <ChevronRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 
          RESPONSIVE FADE-OUT:
          - Shorter on mobile (h-24) to save space
          - Taller on medium screens and up (md:h-40) for a smoother effect
        */}
        <div 
          className="
            absolute 
            bottom-0 
            left-0 
            w-full 
            h-15 md:h-20 
            bg-gradient-to-t 
            from-black
            to-transparent 
            z-10
          "
        />
      </div>
    </>
  );
}