import React from 'react';
import { Trophy, Users, Calendar, DollarSign, MessageCircle } from 'lucide-react';

const tournaments = [
  {
    id: 1,
    name: 'Clyde Solo Showdown',
    date: '20/01 - 15:00',
    price: 'R$ 10,00',
    prizePool: 'R$ 400,00',
    maxPlayers: 48,
    currentPlayers: 0,
    whatsapp: '77991306232',
  },
  {
    id: 2,
    name: 'Clyde Battle Royale',
    date: '10/02 19:00',
    price: 'R$ 20,00',
    prizePool: 'R$ 800,00',
    maxPlayers: 48,
    currentPlayers: 0,
    whatsapp: '77991306232',
  },
];

interface RegistrationModalProps {
  tournament: typeof tournaments[0];
  onClose: () => void;
  onSubmit: (data: any) => void;
}

function RegistrationModal({ tournament, onClose, onSubmit }: RegistrationModalProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    nickname: '',
    freeFireId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Redirect to WhatsApp with pre-filled message
    const message = encodeURIComponent(
      `Olá! Acabei de me inscrever no torneio ${tournament.name}.\n` +
      `Nome: ${formData.name}\n` +
      `Nick: ${formData.nickname}\n` +
      `ID: ${formData.freeFireId}\n` +
      `Já realizei o pagamento via PIX!`
    );
    window.open(`https://wa.me/${tournament.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-black rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-white mb-4">Inscrição - {tournament.name}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Nome Completo</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Nickname</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md bg-gray-900 border-gray-600 text-white"
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">ID Free Fire</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              onChange={(e) => setFormData({ ...formData, freeFireId: e.target.value })}
            />
          </div>
          
          <div className="bg-gray-900 p-4 rounded-md mt-4">
            <h4 className="text-white font-medium mb-2">Informações de Pagamento</h4>
            <p className="text-gray-300">Valor: {tournament.price}</p>
            <p className="text-gray-300">PIX: exemplo@email.com</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-600 rounded-md text-white hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
            >
              Confirmar e Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function TournamentRooms() {
  const [selectedTournament, setSelectedTournament] = React.useState<typeof tournaments[0] | null>(null);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Salas de Campeonato</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">{tournament.name}</h3>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>{tournament.date}</span>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Inscrição: {tournament.price}</span>
                </div>
                
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Premiação: {tournament.prizePool}</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>{tournament.currentPlayers}/{tournament.maxPlayers} jogadores</span>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedTournament(tournament)}
                className="mt-6 w-full py-2 px-4 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
              >
                Participar
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTournament && (
        <RegistrationModal
          tournament={selectedTournament}
          onClose={() => setSelectedTournament(null)}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            setSelectedTournament(null);
          }}
        />
      )}
    </div>
  );
}