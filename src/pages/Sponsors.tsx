import React from 'react';
import { FaCrown, FaMedal, FaStar, FaTrophy } from 'react-icons/fa';

const sponsors = [
  {
    name: 'Tc - Trendychic',
    tier: 'Diamante',
    icon: <FaCrown className="text-yellow-500 text-2xl animate-bounce" />,
    logo: 'https://i.ibb.co/QjqcHXH/efe2470f-0971-4c22-a29c-39e95c9e4d71.jpg',
    description: 'Loja de roupas masculina',
    instagram: 'https://instagram.com/trendyychiic_077', // Link do Instagram da loja
  }
];

export function Sponsors() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Nossos Patrocinadores</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="h-48 overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>
                  <div className="flex items-center space-x-2">
                    {sponsor.icon}
                    <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full">
                      {sponsor.tier}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{sponsor.description}</p>
                <a
                  href={sponsor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-400"
                >
                  Visitar Instagram
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Seja um Patrocinador</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Quer sua marca associada aos maiores torneios de Free Fire do Brasil?
            Entre em contato conosco e conheça nossos planos de patrocínio.
          </p>
          <a
            href="https://wa.me/77991306232?text=Olá, quero saber mais sobre os planos de patrocínio para os torneios de Free Fire!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 inline-block"
          >
            Quero ser Patrocinador
          </a>
        </div>
      </div>
    </div>
  );
}
