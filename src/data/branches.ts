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
}

export const BRANCHES: Branch[] = [
  {
    id: "manjeri",
    name: "Midway Kuzhimandi - Manjeri",
    area: "Manjeri",
    city: "Malappuram, Kerala",
    address: "Bypass Junction, Manjeri, Malappuram, Kerala",
    phone: "+91 98460 12345",
    whatsapp: "919846012345",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    googleMapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    features: ["Family Dine-in", "Underground Pit Smoke", "AC Hall", "Parking"],
    image: "/images/map-manjeri.svg"
  },
  {
    id: "perinthalmanna",
    name: "Midway Kuzhimandi - Perinthalmanna",
    area: "Perinthalmanna",
    city: "Malappuram, Kerala",
    address: "Calicut Road, Near Bypass, Perinthalmanna, Kerala",
    phone: "+91 98460 23456",
    whatsapp: "919846023456",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    googleMapUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    features: ["Family Cabins", "Alfaham Special", "Takeaway Counter"],
    image: "/images/map-perinthalmanna.svg"
  },
  {
    id: "vaniyambalam",
    name: "Midway Kuzhimandi - Vaniyambalam",
    area: "Vaniyambalam",
    city: "Malappuram, Kerala",
    address: "Station Road, Vaniyambalam, Wandoor, Kerala",
    phone: "+91 98460 34567",
    whatsapp: "919846034567",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    googleMapUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    features: ["Late Night Dining", "Speedy Takeaway", "Spacious Seating"],
    image: "/images/map-vaniyambalam.svg"
  },
  {
    id: "nilambur",
    name: "Midway Kuzhimandi - Nilambur",
    area: "Nilambur",
    city: "Malappuram, Kerala",
    address: "Main Highway Road, Nilambur, Kerala",
    phone: "+91 98460 45678",
    whatsapp: "919846045678",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    googleMapUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    features: ["Highway Rest Stop", "Honey Chilli Mandhi", "Ample Parking"],
    image: "/images/map-nilambur.svg"
  },
  {
    id: "valluvalmbram",
    name: "Midway Kuzhimandi - Valluvalmbram",
    area: "Valluvalmbram",
    city: "Malappuram, Kerala",
    address: "National Highway Junction, Valluvalmbram, Kerala",
    phone: "+91 98460 56789",
    whatsapp: "919846056789",
    timing: "11:30 AM - 12:00 Midnight",
    mapShareUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    googleMapUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    features: ["Flagship Kitchen", "AC Family Dining", "Express Takeaway"],
    isMainHub: true,
    image: "/images/map-valluvalmbram.svg"
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/midway_mandi_?exln=MTNybzJscGViaWU4dA==",
  facebook: "https://facebook.com/midwaykuzhimandi",
  whatsapp: "https://wa.me/919846012345?text=Hello%20Midway%20Kuzhimandi",
  centralLocation: "https://maps.app.goo.gl/3X4Bq2YbFwvkiKes9"
};
