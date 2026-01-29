export interface Property {
  id: number;
  type: string;
  location: string;
  price: string;
  image: string;
  isExclusive?: boolean;
  widthClass?: string; // e.g., 'w-[400px]' or 'w-[600px]'
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number; // m2
    land?: number; // m2 terreno
    // New Amenities
    pool: boolean;
    parking: boolean;
    terrace: boolean;
    garden: boolean;
    seaView: boolean;
    mooring?: boolean; // Amarre
  };
  ref: string;
}

export interface NavItem {
  label: string;
  href: string;
}