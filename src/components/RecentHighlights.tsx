import React from 'react';
import { Crown, Medal, Star } from 'lucide-react';

const champions = [
  
];

export function RecentHighlights() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Últimos Campeões
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Conheça as equipes que fizeram história em nossos torneios
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {champions.map((champion, index) => (
            <div
              key={champion.tournament}
              className="flex flex-col overflow-hidden rounded-lg bg-gray-800"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={champion.image}
                  alt={champion.team}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-gray-800 p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {index === 0 ? (
                      <Crown className="h-5 w-5 text-yellow-500" />
                    ) : index === 1 ? (
                      <Medal className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Star className="h-5 w-5 text-yellow-700" />
                    )}
                    <p className="text-sm font-medium text-yellow-500">
                      {champion.tournament}
                    </p>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-white">
                      {champion.team}
                    </h3>
                    <p className="mt-1 text-base text-gray-300">
                      Prêmio: {champion.prize}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}