import { NavItem, Property } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Ventas', href: '#sales' },
  { label: 'Alquiler vacacional', href: '#rentals' },
  { label: 'Nuestros servicios', href: '#services' },
  { label: 'Estimación', href: '#valuation' },
  { label: 'Noticias', href: '#news' },
  { label: 'Contacto', href: '#contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: 1,
    type: 'Penthouse Canal View',
    location: 'Empuriabrava - Sector Caballito',
    price: '790.000 €',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600', // Imagen de ultra-lujo actualizada
    isExclusive: true,
    widthClass: 'min-w-[90vw] md:min-w-[700px]', // Más ancho para efecto cine
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      area: 210,
      land: 0,
      pool: true,
      parking: true,
      terrace: true,
      garden: false,
      seaView: true,
      mooring: true
    },
    ref: 'EMP-2940'
  },
  {
    id: 2,
    type: 'Villa Minimalista',
    location: 'Rosas - Almadrava',
    price: '2.450.000 €',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600', // UPDATED: Working high-res image
    isExclusive: true,
    widthClass: 'min-w-[80vw] md:min-w-[500px]',
    specs: {
      bedrooms: 5,
      bathrooms: 5,
      area: 450,
      land: 1200,
      pool: true,
      parking: true,
      terrace: true,
      garden: true,
      seaView: true,
      mooring: false
    },
    ref: 'ROS-1102'
  },
  {
    id: 3,
    type: 'Modern Dock House',
    location: 'Empuriabrava - Sector Muga',
    price: '1.150.000 €',
    image: 'https://www.immocenterempuriabrava.com/sites/default/files/styles/property_search/public/photos/6291/3c8930a6a22bfedd1a7227bcedd13c3d_770x460.jpg?itok=p9PmafML',
    isExclusive: false,
    widthClass: 'min-w-[85vw] md:min-w-[600px]',
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      land: 500,
      pool: false,
      parking: true,
      terrace: true,
      garden: true,
      seaView: false,
      mooring: true
    },
    ref: 'EMP-3321'
  },
  {
    id: 4,
    type: 'Apartamento Royal',
    location: 'Santa Margarita',
    price: '420.000 €',
    image: 'https://www.immocenterempuriabrava.com/sites/default/files/styles/property_search/public/photos/4946/ce7f0238e0d9a24368eaefdc7d203245_770x460.jpg?itok=mGcVYoMJ',
    isExclusive: true,
    widthClass: 'min-w-[70vw] md:min-w-[450px]',
    specs: {
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      pool: true, // Comunitaria
      parking: false,
      terrace: true,
      garden: false,
      seaView: true,
      mooring: false
    },
    ref: 'STM-0042'
  },
  {
    id: 5,
    type: 'Masia Reformada',
    location: 'Pau - Zona Rustica',
    price: '895.000 €',
    image: 'https://www.immocenterempuriabrava.com/sites/default/files/styles/property_search/public/photos/6287/3773335e1b2bedd10046b11ae7c4d771_770x460.jpg?itok=2vmS9Wum',
    isExclusive: false,
    widthClass: 'min-w-[90vw] md:min-w-[700px]',
    specs: {
      bedrooms: 6,
      bathrooms: 4,
      area: 380,
      land: 5000,
      pool: true,
      parking: true,
      terrace: true,
      garden: true,
      seaView: false,
      mooring: false
    },
    ref: 'PAU-8821'
  }
];