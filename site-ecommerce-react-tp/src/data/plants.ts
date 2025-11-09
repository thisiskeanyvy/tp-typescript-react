// Catalogue de plantes: données de démonstration avec catégories et soins

export interface Plant {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'interieur' | 'exterieur' | 'aromates';
  care: {
    light: string;
    water: string;
    temperature: string;
  };
  stock: number;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    description: 'Plante d\'intérieur très populaire avec de grandes feuilles découpées. Parfaite pour apporter une touche tropicale à votre intérieur.',
    price: 29.99,
    image: '🌿',
    category: 'interieur',
    care: {
      light: 'Lumière indirecte',
      water: 'Arrosage modéré',
      temperature: '18-24°C',
    },
    stock: 15,
  },
  {
    id: 2,
    name: 'Ficus Lyrata',
    description: 'Aussi appelé "figuier lyre", cette plante au feuillage imposant est un classique de la décoration d\'intérieur.',
    price: 34.99,
    image: '🍃',
    category: 'interieur',
    care: {
      light: 'Lumière vive indirecte',
      water: 'Arrosage hebdomadaire',
      temperature: '18-25°C',
    },
    stock: 8,
  },
  {
    id: 3,
    name: 'Lavande',
    description: 'Plante aromatique et décorative, parfaite pour les jardins. Ses fleurs violettes embaument l\'air de leur parfum apaisant.',
    price: 12.99,
    image: '💜',
    category: 'exterieur',
    care: {
      light: 'Plein soleil',
      water: 'Arrosage modéré',
      temperature: 'Résiste au gel',
    },
    stock: 25,
  },
  {
    id: 4,
    name: 'Basilic',
    description: 'Herbe aromatique indispensable en cuisine. Facile à cultiver en pot ou en pleine terre.',
    price: 5.99,
    image: '🌱',
    category: 'aromates',
    care: {
      light: 'Lumière vive',
      water: 'Arrosage régulier',
      temperature: '15-25°C',
    },
    stock: 30,
  },
  {
    id: 5,
    name: 'Pothos',
    description: 'Plante grimpante ou retombante très facile d\'entretien. Idéale pour les débutants.',
    price: 14.99,
    image: '🌿',
    category: 'interieur',
    care: {
      light: 'Lumière modérée',
      water: 'Arrosage léger',
      temperature: '18-24°C',
    },
    stock: 20,
  },
  {
    id: 6,
    name: 'Rosier',
    description: 'Arbuste à fleurs emblématique. Disponible en plusieurs variétés et couleurs.',
    price: 19.99,
    image: '🌹',
    category: 'exterieur',
    care: {
      light: 'Plein soleil',
      water: 'Arrosage régulier',
      temperature: 'Résiste au gel',
    },
    stock: 12,
  },
  {
    id: 7,
    name: 'Menthe',
    description: 'Plante aromatique rafraîchissante, parfaite pour les infusions et la cuisine.',
    price: 6.99,
    image: '🌿',
    category: 'aromates',
    care: {
      light: 'Lumière modérée à vive',
      water: 'Arrosage fréquent',
      temperature: '15-25°C',
    },
    stock: 18,
  },
  {
    id: 8,
    name: 'Sansevieria',
    description: 'Plante d\'intérieur très résistante, également appelée "langue de belle-mère". Purifie l\'air.',
    price: 16.99,
    image: '🌵',
    category: 'interieur',
    care: {
      light: 'Toute lumière',
      water: 'Arrosage rare',
      temperature: '15-30°C',
    },
    stock: 22,
  },
];

