import React from 'react';
import {  Award, BarChart3, Recycle, ShieldCheck, Leaf, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const GameFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ISO / Compliance Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-800/40 to-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-virtuos-green/5 rounded-full blur-[80px]"></div>
            
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 text-virtuos-green mb-2">
                <ShieldCheck size={24} />
                <span className="font-bold tracking-wide uppercase text-sm">Validé scientifiquement</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Conforme aux standards internationaux</h2>
              <p className="text-gray-400">
                Virtuos n'est pas qu'un jeu, c'est un outil pédagogique rigoureux basé sur la méthodologie de l'ADEME et les normes internationales pour l'Analyse du Cycle de Vie.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                <Award className="text-virtuos-green" size={20} />
                <span className="font-mono text-sm font-semibold text-gray-200">ISO 14040</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                <Award className="text-virtuos-green" size={20} />
                <span className="font-mono text-sm font-semibold text-gray-200">ISO 14044</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                <Leaf className="text-virtuos-green" size={20} />
                <span className="font-mono text-sm font-semibold text-gray-200">Base ADEME</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                    icon: <Leaf size={32} />,
                    title: "Environnement",
                    desc: "Minimisez l'empreinte carbone et l'impact sur les ressources naturelles à travers les 6 étapes du cycle de vie.",
                    color: "text-emerald-400"
                },
                {
                    icon: <Users size={32} />,
                    title: "Social",
                    desc: "Assurez le bien-être de vos employés et l'impact sociétal positif de votre entreprise fictive.",
                    color: "text-blue-400"
                },
                {
                    icon: <TrendingUp size={32} />,
                    title: "Économique",
                    desc: "Restez rentable tout en investissant dans la transformation durable. L'équilibre est la clé.",
                    color: "text-amber-400"
                }
            ].map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-8 rounded-2xl bg-virtuos-gray/30 border border-white/5 hover:border-white/10 hover:bg-virtuos-gray/50 transition-all group"
                >
                    <div className={`mb-6 ${feature.color} p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {feature.desc}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* 6 Phases Cycle */}
        <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-white mb-12">Maîtrisez les 6 phases du cycle de vie</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {['Extraction', 'Fabrication', 'Transport', 'Distribution', 'Usage', 'Fin de vie'].map((phase, i) => (
                    <div key={i} className="flex items-center">
                        <div className="px-6 py-3 rounded-full border border-virtuos-green/30 bg-virtuos-green/5 text-virtuos-green text-sm font-medium hover:bg-virtuos-green hover:text-black transition-all cursor-default">
                            {phase}
                        </div>
                        {i !== 5 && <div className="hidden md:block w-8 h-px bg-white/10 mx-2"></div>}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default GameFeatures;