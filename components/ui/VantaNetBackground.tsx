// components/ui/VantaNetBackground.tsx
"use client";

import { useEffect, useRef } from 'react';

// Define the types for the global Vanta and THREE objects for TypeScript
declare global {
  interface Window {
    THREE: any;
    VANTA: {
      NET: (options: any) => any; // Specify that VANTA has a NET method
    };
  }
}

const VantaNetBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
      .then(() => {
        return loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
      })
      .then(() => {
        if (!vantaEffect.current && vantaRef.current) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // --- Adjusted Options for a Lighter Net ---
            color: 0x888888,        // A light grey color, less intense than pure white.
            backgroundColor: 0x0,   // Background color (black)
            
            // 1. Decrease the number of points for a sparser net.
            points: 25.00,           // Original: 10.00
            
            // 2. Reduce the max distance to create fewer connection lines.
            maxDistance: 20.00,     // Original: 20.00
            
            // 3. Increase the spacing to spread the points further apart.
            spacing: 15.00          // Original: 15.00
          });
        }
      })
      .catch((error) => {
        console.error("VantaNet: Script loading failed.", error);
      });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
};

export default VantaNetBackground;