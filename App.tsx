import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameFeatures from './components/GameFeatures';
import Team from './components/Team';
import Downloads from './components/Downloads';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-white selection:bg-virtuos-green selection:text-black overflow-x-hidden bg-virtuos-dark relative">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1518531933037-9a60aa203699?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <GameFeatures />
          <Team />
          <Downloads />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;