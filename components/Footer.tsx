import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-white/10">
        {/* Full width inspiring image outro */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-virtuos-green to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-6 inline-block">
                        VIRT<span className="text-virtuos-green">UOS</span>
                    </a>
                    <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                        Le serious game de référence pour l'enseignement de la responsabilité sociétale des entreprises et l'éco-conception.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Liens</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-virtuos-green transition-colors">Accueil</a></li>
                        <li><a href="#features" className="hover:text-virtuos-green transition-colors">Le Jeu</a></li>
                        <li><a href="#team" className="hover:text-virtuos-green transition-colors">L'Équipe</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Légal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-virtuos-green transition-colors">Mentions Légales</a></li>
                        <li><a href="#" className="hover:text-virtuos-green transition-colors">Confidentialité</a></li>
                        <li><a href="#" className="hover:text-virtuos-green transition-colors">CGV</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Virtuos Game. Tous droits réservés.
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-gray-500 text-xs">Systèmes opérationnels</span>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;