export interface BranchExperience {
  id: string;
  locationName: string;
  phone: string;
  tel: string;
  title: string;
  image: string | null;
  galleryImages: string[];
  mapUrl: string;
  address: string;
}

const DEFAULT_GALLERY = [
  "/images/branch-gallery/gallery-exterior.jpg",
  "/images/branch-gallery/gallery-counter.jpg",
  "/images/branch-gallery/gallery-dining.jpg",
  "/images/branch-gallery/gallery-staircase.jpg",
  "/images/branch-gallery/gallery-reception.jpg",
];

export const BRANCH_EXPERIENCES: BranchExperience[] = [
  {
    id: "valluvambram",
    locationName: "VALLUVAMBRAM",
    phone: "9846726016",
    tel: "+919846726016",
    title: "Gather at the National Highway Hub",
    image: "/images/branches/branch-valluvambram.jpg",
    galleryImages: DEFAULT_GALLERY,
    mapUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    address: "National Highway Junction, Valluvambram, Kerala 673642",
  },
  {
    id: "manjeri-kacherippadi",
    locationName: "MANJERI · KACHERIPPADI",
    phone: "9846726726",
    tel: "+919846726726",
    title: "Authentic Pit-Smoked Dining at Central Manjeri",
    image: "/images/branches/branch-manjeri-kacherippadi.jpg",
    galleryImages: DEFAULT_GALLERY,
    mapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    address: "Kacherippadi, Central Manjeri, Malappuram, Kerala 676121",
  },
  {
    id: "manjeri-jaseela",
    locationName: "MANJERI · JASEELA JUNCTION",
    phone: "9846726393",
    tel: "+919846726393",
    title: "Spacious Family Cabins at Bypass Junction",
    image: "/images/branch-gallery/gallery-exterior.jpg",
    galleryImages: DEFAULT_GALLERY,
    mapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    address: "Jaseela Junction, Bypass Road, Manjeri, Kerala 676121",
  },
  {
    id: "perinthalmanna",
    locationName: "PERINTHALMANNA",
    phone: "8592900222",
    tel: "+918592900222",
    title: "Exquisite Flavours along Calicut Road",
    image: "/images/branch-gallery/gallery-exterior.jpg",
    galleryImages: DEFAULT_GALLERY,
    mapUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    address: "Calicut Road, Near Bypass, Perinthalmanna, Kerala 679322",
  },
  {
    id: "vaniyambalam",
    locationName: "VANIYAMBALAM",
    phone: "88919 26726",
    tel: "+918891926726",
    title: "Vibrant Evening Ambience at Station Road Hub",
    image: "/images/branches/branch-courtyard.jpg",
    galleryImages: [
      "/images/branches/branch-courtyard.jpg",
      ...DEFAULT_GALLERY,
    ],
    mapUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    address: "Station Road, Vaniyambalam, Wandoor, Kerala 679339",
  },
  {
    id: "nilambur",
    locationName: "NILAMBUR",
    phone: "7736426726",
    tel: "+917736426726",
    title: "Gateway to Great Taste on Nilambur Highway",
    image: "/images/branches/branch-courtyard.jpg",
    galleryImages: [
      "/images/branches/branch-courtyard.jpg",
      ...DEFAULT_GALLERY,
    ],
    mapUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    address: "Main Highway Road, Nilambur, Kerala 679329",
  },
];

