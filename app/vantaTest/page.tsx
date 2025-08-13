// app/vantaTest/page.tsx

import VantaNetBackground from '@/components/ui/VantaNetBackground';

export default function VantaTestPage() {
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Use the new, self-contained component */}
      <VantaNetBackground />

      {/* Your page content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '20%',
          color: 'white', // Set text color to be visible on the dark background
        }}
      >
        <h1>Vanta NET Effect</h1>
        <p>This should finally work.</p>
      </div>
    </main>
  );
}