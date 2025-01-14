export interface Tournament {
  id: string;
  name: string;
  date: string;
  time: string;
  mode: 'solo' | 'duo' | 'squad';
  map: string;
  registrationOpen: boolean;
  prizePool: string;
  streamUrl?: string;
}

export interface Player {
  id: string;
  name: string;
  contact: {
    whatsapp?: string;
    discord?: string;
  };
  freeFireId: string;
  team?: string;
}

export interface TeamStats {
  rank: number;
  teamName: string;
  kills: number;
  wins: number;
  points: number;
}