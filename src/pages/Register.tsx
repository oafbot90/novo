import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

export function Register() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    discord: '',
    freeFireId: '',
    mode: 'solo',
    paymentProof: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, whatsapp, discord, freeFireId, mode } = formData;

    // Formatar a mensagem
    const message = `*Inscrição para Torneio*\n\n` +
      `*Nome do Jogador/Equipe:* ${name}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Discord:* ${discord || 'Não informado'}\n` +
      `*ID do Free Fire:* ${freeFireId}\n` +
      `*Modo de Jogo:* ${mode}\n\n` +
      `*Comprovante de Pagamento:* ${formData.paymentProof ? 'Anexado' : 'Não anexado'}`;

    // Redirecionar para o WhatsApp com a mensagem
    const whatsappNumber = '77991306232';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Inscrição para Torneio</h2>
          <p className="mt-2 text-gray-400">Preencha todos os dados para participar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nome do Jogador/Equipe
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="discord" className="block text-sm font-medium text-gray-300">
                Discord
              </label>
              <input
                type="text"
                id="discord"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="freeFireId" className="block text-sm font-medium text-gray-300">
              ID do Free Fire
            </label>
            <input
              type="text"
              id="freeFireId"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              onChange={(e) => setFormData({ ...formData, freeFireId: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Modo de Jogo</label>
            <select
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
            >
              <option value="solo">Solo</option>
              <option value="duo">Duo</option>
              <option value="squad">Squad</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Comprovante de Pagamento
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md hover:border-yellow-500 transition-colors">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-yellow-500 hover:text-yellow-400">
                    <span>Fazer upload do arquivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*,.pdf"
                      onChange={(e) => setFormData({ ...formData, paymentProof: e.target.files?.[0] || null })}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-400">PNG, JPG ou PDF até 10MB</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-4 rounded-md">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">Informações de Pagamento</h3>
                <div className="mt-2 text-sm text-gray-300">
                  <p>Chave PIX: 77991306232</p>
                  <p className="mt-1">Valor: Gratuito</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Confirmar Inscrição
          </button>
        </form>
      </div>
    </div>
  );
}