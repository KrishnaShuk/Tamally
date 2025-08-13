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
      <div className="relative min-h-screen bg-black"> {/* Set a base background */}
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <VantaNetBackground />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-8xl font-extrabold text-white font-playwrite">
              Tamally
            </h1>
            <p className="mt-20 max-w-2xl text-xl text-gray-300">
              Your assistant to make easy and converting Email Templates.
            </p>
            <div className="mt-8 flex justify-center">
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

        {/* --- ADDED: Diminishing/Fade-out Effect --- */}
        <div 
          className="
            absolute 
            bottom-0 
            left-0 
            w-full 
            h-40 
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