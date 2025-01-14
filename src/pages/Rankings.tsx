import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';

const teamStats = [
  
];

export function Rankings() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Classificação Geral</h2>
        
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Posição
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Equipe
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Kills
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Vitórias
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Pontos
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {teamStats.map((team) => (
                  <tr key={team.teamName} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {team.rank === 1 ? (
                          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                        ) : team.rank === 2 ? (
                          <Award className="h-5 w-5 text-gray-400 mr-2" />
                        ) : team.rank === 3 ? (
                          <Target className="h-5 w-5 text-yellow-700 mr-2" />
                        ) : (
                          <span className="text-gray-400 w-9">{team.rank}º</span>
                        )}
                        <span className="text-white">{team.rank}º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">
                      {team.teamName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {team.kills}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {team.wins}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-yellow-500 font-semibold">{team.points}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}