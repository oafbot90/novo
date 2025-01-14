import React from 'react';
import { Menu, Trophy, Users, Calendar, Tv, BarChart, Play, Newspaper, Book, Handshake } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Trophy },
  { name: 'Inscrição', href: '/register', icon: Users },
  { name: 'Calendário', href: '/calendar', icon: Calendar },
  { name: 'Streaming', href: '/streaming', icon: Tv },
  { name: 'Classificação', href: '/rankings', icon: BarChart },
  { name: 'Campeonatos', href: '/tournaments', icon: Play },
  { name: 'Notícias', href: '/news', icon: Newspaper },
  { name: 'Regras', href: '/rules', icon: Book },
  { name: 'Patrocinadores', href: '/sponsors', icon: Handshake },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}