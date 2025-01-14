import React from 'react';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export function Rules() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Regras e FAQ</h2>
        
        <div className="space-y-8">
          <section className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-white">Regras Gerais</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>1. Todos os jogadores devem ter nível mínimo 30 no Free Fire.</p>
              <p>2. É proibido o uso de qualquer tipo de hack ou modificação no jogo.</p>
              <p>3. Jogadores devem estar presentes 15 minutos antes do início da partida.</p>
              <p>4. É obrigatório mostrar a tela dando tiro.</p>
            </div>
          </section>

          <section className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-white">Desclassificação</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>1. Uso de programas não autorizados.</p>
              <p>2. Comportamento anti-desportivo.</p>
              <p>3. Ausência na hora da partida.</p>
              <p>4. Compartilhamento de conta.</p>
            </div>
          </section>

          <section className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-white">Premiação</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>1. Os prêmios serão pagos em até 7 dias úteis após o torneio.</p>
              <p>2. É necessário ter uma conta bancária ou PIX para recebimento.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}