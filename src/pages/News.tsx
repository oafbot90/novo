import React, { useState } from 'react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Camp Clyde Free Fire Pro League - Temporada 1: Inscrições Abertas!',
    date: '2025-01-12',
    excerpt: 'A primeira temporada do Camp Clyde Free Fire Pro League está com inscrições abertas e a participação é gratuita! Confira os prêmios.',
    content: 'A primeira temporada do Camp Clyde Free Fire Pro League já está com inscrições abertas! Este torneio exclusivo para jogadores solo promete muita emoção e adrenalina. E o melhor de tudo: a participação é totalmente gratuita!\n\nOs competidores terão a chance de conquistar grandes prêmios e provar quem é o melhor no cenário competitivo de Free Fire.\n\nPremiação do Torneio:\n- 🥇 1º Lugar: Passe de Elite + 520 diamantes\n- 🥈 2º Lugar: 520 diamantes\n- 🥉 3º Lugar: Vaga garantida no próximo torneio\n\nDetalhes Adicionais:\n- As inscrições podem ser realizadas diretamente na nossa plataforma oficial.\n- O torneio será dividido em fases classificatórias e finais, com transmissões ao vivo dos jogos decisivos.\n\nNão perca a chance de entrar para a história do torneio e garantir sua vaga para a próxima temporada! Fique atento às datas e prepare-se para o grande confronto. A Camp Clyde Free Fire Pro League promete ser um dos maiores torneios de Free Fire deste ano!\n\nAcompanhe a nossa plataforma para mais detalhes sobre o evento e como garantir sua inscrição!',
    image: 'https://i.ibb.co/8PcMYGD/BCB1-D862-A921-43-CB-9-DF4-357484321766.webp',
  }
];

export function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Notícias</h2>

        {selectedNews ? (
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-500">
            <div className="relative">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(selectedNews.date).toLocaleDateString('pt-BR')}
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">{selectedNews.title}</h3>
              <p className="text-gray-300 mb-6 whitespace-pre-wrap">{selectedNews.content}</p>
              <button
                className="text-yellow-500 hover:text-yellow-400 flex items-center"
                onClick={() => setSelectedNews(null)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Voltar
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {news.map((item) => (
              <div
                key={item.id}
                className={`bg-gray-900 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 ${
    item.id === 1 ? 'ring-4 ring-yellow-500' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(item.date).toLocaleDateString('pt-BR')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.excerpt}</p>
                  <button
                    className="text-yellow-500 hover:text-yellow-400 flex items-center"
                    onClick={() => setSelectedNews(item)}
                  >
                    Ler mais <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
