import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-virtuos-green/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-virtuos-green/30 bg-virtuos-green/10 text-virtuos-green text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-virtuos-green mr-2 animate-pulse"></span>
              Nouveau Serious Game RSE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Pilotez la <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-virtuos-green to-emerald-400">
                durabilité
              </span> de demain.
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Le serious game ultime pour maîtriser l'Analyse du Cycle de Vie (ACV) et le management responsable. Gérez, analysez, et performez sur 18 tours stratégiques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="group flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-virtuos-green rounded-full hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] w-full sm:w-auto"
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto backdrop-blur-sm">
                <PlayCircle className="mr-2 w-5 h-5 text-gray-400" />
                Voir la démo
              </button>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gray-800/50 backdrop-blur-sm group">
                <div className="absolute inset-0 bg-gradient-to-tr from-virtuos-green/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img 
                    src="Jeu_v2 (1).jpg" 
                    alt="Virtuos Game Board Mockup" 
                    className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Elements (Decorative) */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-virtuos-green rounded-full blur-2xl opacity-20"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-mono text-white">Turn 12/18</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
