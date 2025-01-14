import React from 'react';
import { Calendar as CalendarIcon, Users, MapPin, Link } from 'lucide-react';

const tournaments = [
  {
    id: 1,
    name: 'Clyde Royale Championship - Temporada 1',
    date: '2025-01-25', // Formato ISO (AAAA-MM-DD)
    time: '15:00',
    mode: 'Solo',
    map: 'Bermuda',
    registrationOpen: true,
    streamUrl: 'https://twitch.tv/example',
  },
];

export function Calendar() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Calendário de Torneios</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => {
            // Formatação da data
            const formattedDate = new Date(tournament.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
            });

            return (
              <div key={tournament.id} className="bg-gray-900 rounded-lg shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      tournament.registrationOpen ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
                    }`}
                  >
                    {tournament.registrationOpen ? 'Inscrições Abertas' : 'Inscrições Encerradas'}
                  </span>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>
                      {formattedDate} às {tournament.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="capitalize">{tournament.mode}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>{tournament.map}</span>
                  </div>
                  
                  {tournament.streamUrl && (
                    <div className="flex items-center">
                      <Link className="h-5 w-5 text-yellow-500 mr-2" />
                      <a
                        href={tournament.streamUrl}
                        className="text-yellow-500 hover:text-yellow-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link da Transmissão
                      </a>
                    </div>
                  )}
                </div>
                
                {tournament.registrationOpen && (
                  <a
                    href="/register"
                    className="mt-6 block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-400"
                  >
                    Inscrever-se
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
