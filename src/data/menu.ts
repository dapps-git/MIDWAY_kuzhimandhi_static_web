export interface MenuItem {
  id: string;
  name: string;
  category: "kuzhimandhi" | "grills" | "sides" | "drinks";
  description: string;
  prices: {
    quarter?: number;
    half?: number;
    full?: number;
    single?: number;
  };
  spiceLevel: "Mild" | "Medium" | "Spicy" | "Fiery";
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Kuzhimandhi Dishes
  {
    id: "chicken-kuzhimandhi",
    name: "Classic Chicken Kuzhimandhi",
    category: "kuzhimandhi",
    description: "Authentic slow pit-smoked tender chicken infused with 14 Yemeni whole spices, served on aromatic long-grain basmati rice with special tomato salsa & garlic dip.",
    prices: {
      quarter: 220,
      half: 420,
      full: 800
    },
    spiceLevel: "Medium",
    isBestseller: true,
    image: "/images/hero-mandhi.jpg"
  },
  {
    id: "peri-peri-mandhi",
    name: "Peri Peri Kuzhimandhi",
    category: "kuzhimandhi",
    description: "Pit-smoked chicken glazed with our fiery signature African bird's eye chili & peri-peri spice dust, served over steaming spiced Mandhi rice.",
    prices: {
      quarter: 240,
      half: 460,
      full: 880
    },
    spiceLevel: "Fiery",
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beef-kuzhimandhi",
    name: "Royal Beef Kuzhimandhi",
    category: "kuzhimandhi",
    description: "Melt-in-your-mouth slow pit-roasted beef ribs & chunks marinated in roasted cumin, black lime & cardamom, served on saffron ghee-kissed basmati.",
    prices: {
      quarter: 280,
      half: 540,
      full: 1040
    },
    spiceLevel: "Medium",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "honey-chilli-mandhi",
    name: "Honey Glazed Chilli Mandhi",
    category: "kuzhimandhi",
    description: "Succulent charcoal-roasted chicken finished in a wok with pure honey, crushed red chilies, and garlic cloves, laid atop fragrant Mandhi rice.",
    prices: {
      quarter: 250,
      half: 480,
      full: 920
    },
    spiceLevel: "Medium",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1527477321055-43615b629c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mutton-kuzhimandhi",
    name: "Heritage Mutton Kuzhimandhi",
    category: "kuzhimandhi",
    description: "Premium baby mutton cooked for 4 hours inside underground clay pit until fall-off-the-bone tender. Infused with black dried lime and green cardamom.",
    prices: {
      half: 620,
      full: 1190
    },
    spiceLevel: "Mild",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // Charcoal Grills & Alfaham
  {
    id: "alfaham-regular",
    name: "Classic Charcoal Alfaham",
    category: "grills",
    description: "Juicy Arabian spiced chicken char-grilled over natural coconut shell charcoal, served with Kuboos, garlic dip (Toum), and spicy tomato salsa.",
    prices: {
      quarter: 150,
      half: 290,
      full: 560
    },
    spiceLevel: "Medium",
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kanthari-alfaham",
    name: "Spicy Kanthari Green Chilli Alfaham",
    category: "grills",
    description: "Tender chicken marinated in crushed native bird's eye chillies (Kanthari Mulaku), shallots, and curry leaf extract. Deeply aromatic and spicy.",
    prices: {
      quarter: 170,
      half: 320,
      full: 620
    },
    spiceLevel: "Fiery",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pepper-bbq-alfaham",
    name: "Black Pepper BBQ Alfaham",
    category: "grills",
    description: "Malabar black pepper-infused yoghurt marinade charred to smoky perfection with a glistening peppery glaze.",
    prices: {
      quarter: 160,
      half: 310,
      full: 600
    },
    spiceLevel: "Spicy",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // Sides and Starters
  {
    id: "mandhi-rice-portion",
    name: "Extra Aromatic Mandhi Rice",
    category: "sides",
    description: "Steaming hot portion of long-grain basmati cooked in meat broth with dried lime, whole cinnamon, and cloves.",
    prices: {
      single: 110
    },
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mayo-salsa-combo",
    name: "Creamy Garlic Toum & Spicy Salsa Dip",
    category: "sides",
    description: "Traditional Middle Eastern garlic emulsion dip (Toum) and zesty crushed tomato-chili-coriander salsa.",
    prices: {
      single: 50
    },
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fresh-hummus-kuboos",
    name: "Creamy Hummus with 2 Warm Kuboos",
    category: "sides",
    description: "Velvety chickpea tahini puree drizzled with extra virgin olive oil, smoked paprika, and freshly baked Arabic flatbread.",
    prices: {
      single: 130
    },
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts and Drinks
  {
    id: "royal-kunafa",
    name: "Royal Cheesy Cream Kunafa",
    category: "drinks",
    description: "Crispy golden kataifi spun pastry layered with rich melted cheese cream, soaked in orange blossom saffron sugar syrup and pistachios.",
    prices: {
      single: 190
    },
    spiceLevel: "Mild",
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blue-curacao-mojito",
    name: "Midway Ocean Blue Curacao Mojito",
    category: "drinks",
    description: "Refreshing sparkling citrus cooler with mint leaves, zesty lemon wedges, and crushed ice.",
    prices: {
      single: 90
    },
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "passion-fruit-cooler",
    name: "Fresh Passion Fruit Pulpy Fizz",
    category: "drinks",
    description: "Pure tropical Malabar passion fruit pulp shaken with chilled fizz, rock salt, and mint.",
    prices: {
      single: 90
    },
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
  }
];

