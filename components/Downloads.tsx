import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Downloads: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à former vos équipes ?
            </h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
                Téléchargez les règles complètes pour comprendre la mécanique ou contactez-nous directement pour organiser une session.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white rounded-xl transition-all w-full sm:w-auto group">
                    <Download size={20} className="text-virtuos-green" />
                    <span className="font-medium">Règles du Jeu (PDF)</span>
                </button>

                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-virtuos-green text-black rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] w-full sm:w-auto font-bold group">
                    <span>Faire un devis</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">
               <span className="flex items-center gap-2">
                   <FileText size={14} /> Documentation technique incluse
               </span>
               <span className="hidden md:block">•</span>
               <span>Support pédagogique garanti</span>
            </div>
        </motion.div>

      </div>
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-virtuos-green/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>
    </section>
  );
};

export default Downloads;