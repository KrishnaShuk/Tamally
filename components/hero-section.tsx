import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Globe, Rocket, Maximize2, Wrench, ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Platform text */}
          <div className="text-center mb-36">
          </div>

          {/* Main heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 max-w-5xl mx-auto">
              AI Email Template Editor
            </h1>
            <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase ">BY</p><p className="font-playwrite">Tamally</p>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-md">
              Coming Soon
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="text-left">
              <div className="mb-4">
                <Globe className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Robust Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">Reliable and scalable infrastructure ensures your creative workflow is never interrupted.
</p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <Rocket className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Easy Setup</h3>
              <p className="text-muted-foreground leading-relaxed">Quick and simple configuration for any use case. Go from idea to professional template in seconds.</p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <Maximize2 className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Effortless Scaling</h3>
              <p className="text-muted-foreground leading-relaxed">From a single welcome email to a full marketing campaign, our AI is built to handle any demand with ease.</p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <Wrench className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Low Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">We handle the complexity of prompts, infrastructure, and model updates so you can focus on creating.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}