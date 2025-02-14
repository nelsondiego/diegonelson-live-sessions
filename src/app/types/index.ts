export interface Location {
  name: string;
  address?: string;
  googleMapsUrl?: string;
}

export interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  status: 'upcoming' | 'past' | 'cancelled';
  image: string;
}

export interface Sponsor {
  id: number;
  name: string;
  description?: string;
  logo: string;
  website?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  active: boolean;
  url?: string;
}