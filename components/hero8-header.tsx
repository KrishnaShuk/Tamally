"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const menuItems = [
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    // --- FIX: Increased z-index from 20 to 50 ---
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="fixed z-50 w-full" // Changed z-20 to z-50
    >
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 w-full border-b backdrop-blur-sm" // Added backdrop-blur for better visuals
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 font-playwrite"
              >
                Tamally
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop Menu Links */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Dropdown and Desktop Right-Side Content */}
            <div 
              className="
                bg-background lg:bg-transparent 
                in-data-[state=active]:block 
                lg:in-data-[state=active]:flex 
                mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl 
                border lg:border-transparent 
                p-6 lg:p-0 
                shadow-2xl shadow-zinc-300/20 dark:shadow-none lg:shadow-none 
                md:flex-nowrap 
                lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0
              "
            >
              {/* Mobile Menu Links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* This container holds the ModeToggle for both mobile and desktop
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ModeToggle />
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};