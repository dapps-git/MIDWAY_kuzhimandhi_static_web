export interface Branch {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  timing: string;
  mapShareUrl: string;
  googleMapUrl: string;
  features: string[];
  isMainHub?: boolean;
  image: string;
  mapImage: string;
  description?: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "manjeri",
    name: "Midway Kuzhimandi - Manjeri",
    area: "Manjeri",
    city: "Malappuram, Kerala",
    address: "Bypass Junction, Manjeri, Malappuram, Kerala 676121",
    phone: "+91 98460 12345",
    whatsapp: "919846012345",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    googleMapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    features: ["Family Dine-in", "Underground Pit Smoke", "AC Hall", "Parking"],
    image: "/images/map-manjeri.svg",
    mapImage: "/images/map-manjeri.svg",
    description: "Located at the central Bypass Junction in Manjeri, serving authentic wood-smoked Kuzhimandhi with spacious AC dining and parking."
  },
  {
    id: "perinthalmanna",
    name: "Midway Kuzhimandi - Perinthalmanna",
    area: "Perinthalmanna",
    city: "Malappuram, Kerala",
    address: "Calicut Road, Near Bypass, Perinthalmanna, Kerala 679322",
    phone: "+91 98460 23456",
    whatsapp: "919846023456",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    googleMapUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    features: ["Family Cabins", "Alfaham Special", "Takeaway Counter", "Ample Parking"],
    image: "/images/branch-perinthalmanna.jpg",
    mapImage: "/images/map-perinthalmanna.svg",
    description: "Our premium Perinthalmanna outlet along Calicut Road offers elegant glass-front family dining, private cabins, and authentic wood-smoked Mandhi."
  },
  {
    id: "vaniyambalam",
    name: "Midway Kuzhimandi - Vaniyambalam",
    area: "Vaniyambalam",
    city: "Malappuram, Kerala",
    address: "Station Road, Vaniyambalam, Wandoor, Kerala 679339",
    phone: "+91 98460 34567",
    whatsapp: "919846034567",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    googleMapUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    features: ["Late Night Dining", "Speedy Takeaway", "Spacious Seating", "Warm Ambience"],
    image: "/images/branch-vaniyambalam.jpg",
    mapImage: "/images/map-vaniyambalam.svg",
    description: "Famous for its vibrant evening atmosphere, illuminated frontage, and lightning-fast takeaway service on Station Road, Vaniyambalam."
  },
  {
    id: "nilambur",
    name: "Midway Kuzhimandi - Nilambur",
    area: "Nilambur",
    city: "Malappuram, Kerala",
    address: "Main Highway Road, Nilambur, Kerala 679329",
    phone: "+91 98460 45678",
    whatsapp: "919846045678",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    googleMapUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    features: ["Gateway to Great Taste", "Highway Rest Stop", "Honey Chilli Mandhi", "Ample Parking"],
    image: "/images/branch-nilambur.jpg",
    mapImage: "/images/map-nilambur.svg",
    description: "Welcome through the iconic 'Gateway to Great Taste' arch. Our Nilambur branch is the preferred highway destination for families and travelers."
  },
  {
    id: "valluvalmbram",
    name: "Midway Kuzhimandi - Valluvambram",
    area: "Valluvambram",
    city: "Malappuram, Kerala",
    address: "National Highway Junction, Valluvambram, Kerala 673642",
    phone: "+91 98460 56789",
    whatsapp: "919846056789",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    googleMapUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    features: ["Flagship Kitchen", "Modern Wood-Facade Dining", "AC Family Dining", "Express Takeaway"],
    isMainHub: true,
    image: "/images/branch-valluvalmbram.jpg",
    mapImage: "/images/map-valluvalmbram.svg",
    description: "Featuring a striking modern wood-cladded architecture and prime National Highway junction access, our Valluvambram branch serves thousands of Mandhi lovers daily."
  }
];

export function getBranchById(id: string): Branch | undefined {
  const normalized = id.toLowerCase().trim();
  return (
    BRANCHES.find((b) => b.id.toLowerCase() === normalized) ||
    BRANCHES.find((b) => b.area.toLowerCase() === normalized) ||
    (normalized === "valluvambram" ? BRANCHES.find((b) => b.id === "valluvalmbram") : undefined)
  );
}

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/midway_mandi_?exln=MTNybzJscGViaWU4dA==",
  facebook: "https://facebook.com/midwaykuzhimandi",
  whatsapp: "https://wa.me/919846012345?text=Hello%20Midway%20Kuzhimandi",
  centralLocation: "https://maps.app.goo.gl/3X4Bq2YbFwvkiKes9"
};
