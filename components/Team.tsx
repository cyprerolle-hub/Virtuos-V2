import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Sarah Cohen",
    role: "Experte ACV & Durabilité",
    bio: "15 ans d'expérience dans l'ingénierie environnementale. Elle garantit la rigueur scientifique de Virtuos.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Marc Dubreuil",
    role: "Game Designer",
    bio: "Spécialiste de la gamification pédagogique. Il transforme des concepts complexes en gameplay engageant.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Responsable Pédagogique",
    bio: "Psychologue du travail, elle s'assure que chaque session de jeu se traduit par un apprentissage concret.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">L'équipe derrière Virtuos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une synergie d'experts en environnement, de créatifs et de pédagogues unis pour transformer la formation RSE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-virtuos-green transition-colors duration-300">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                {/* Decorative circle behind */}
                <div className="absolute inset-0 rounded-full bg-virtuos-green/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-virtuos-green text-sm font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed px-4 mb-4">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;