import { MachineryEquipment, Menu } from "./arigato/types";

export type SortKey = 'name' | 'lastUpdated' | 'price';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: SortKey;
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Name',
  slug: null,
  sortKey: 'name',
  reverse: false
};

export const MenuItems: Menu[] = [
  {
    title: "ArigatoCorp",
    path: "/arigatoCorp"
  },
  {
    title: "CNC",
    path: "/cnc"
  }
]
export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'lastUpdated', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'price', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'price', reverse: true }
];


export const machineryEquipmentData: MachineryEquipment[] = [
  {
    title: "Excavator",
    description: "A heavy construction machine for digging and moving earth.",
    size: "10 tons",
    availability: true,
    picture: "https://example.com/images/excavator.jpg",
  },
  {
    title: "Bulldozer",
    description: "A powerful machine for pushing soil, sand, and debris.",
    size: "20 tons",
    availability: false,
    picture: "https://example.com/images/bulldozer.jpg",
  },
  {
    title: "Forklift",
    description: "A compact vehicle for lifting and transporting heavy loads.",
    size: "5 tons",
    availability: true,
    picture: "https://example.com/images/forklift.jpg",
  },
  {
    title: "Backhoe Loader",
    description: "A multipurpose machine with a shovel at the front and a backhoe at the back.",
    size: "8 tons",
    availability: false,
    picture: "https://example.com/images/backhoe.jpg",
  },
  {
    title: "Road Roller",
    description: "A compactor-type machine for road construction.",
    size: "12 tons",
    availability: true,
    picture: "https://example.com/images/road-roller.jpg",
  },
  {
    title: "Concrete Mixer",
    description: "A machine for mixing cement, sand, and water.",
    size: "4 tons",
    availability: true,
    picture: "https://example.com/images/concrete-mixer.jpg",
  },
  {
    title: "Crane",
    description: "A tall machine used for lifting heavy materials.",
    size: "50 tons",
    availability: false,
    picture: "https://example.com/images/crane.jpg",
  },
  {
    title: "Dump Truck",
    description: "A truck for transporting loose materials like sand and gravel.",
    size: "15 tons",
    availability: true,
    picture: "https://example.com/images/dump-truck.jpg",
  },
  {
    title: "Pile Driver",
    description: "A machine used to drive piles into the soil for foundation support.",
    size: "25 tons",
    availability: false,
    picture: "https://example.com/images/pile-driver.jpg",
  },
  {
    title: "Crawler Loader",
    description: "A tracked vehicle used for material handling and excavation.",
    size: "18 tons",
    availability: true,
    picture: "https://example.com/images/crawler-loader.jpg",
  },
  {
    title: "Grader",
    description: "A machine used for leveling surfaces during grading operations.",
    size: "14 tons",
    availability: true,
    picture: "https://example.com/images/grader.jpg",
  },
  {
    title: "Asphalt Paver",
    description: "A machine for laying asphalt during road construction.",
    size: "11 tons",
    availability: false,
    picture: "https://example.com/images/asphalt-paver.jpg",
  },
  {
    title: "Skid Steer Loader",
    description: "A versatile machine for construction and landscaping tasks.",
    size: "3 tons",
    availability: true,
    picture: "https://example.com/images/skid-steer.jpg",
  },
  {
    title: "Trencher",
    description: "A machine for digging trenches, commonly used for laying pipes.",
    size: "7 tons",
    availability: false,
    picture: "https://example.com/images/trencher.jpg",
  },
  {
    title: "Compactor",
    description: "A machine for compacting soil, gravel, and asphalt.",
    size: "6 tons",
    availability: true,
    picture: "https://example.com/images/compactor.jpg",
  },
  {
    title: "Hydraulic Hammer",
    description: "An attachment for breaking rock and concrete structures.",
    size: "2 tons",
    availability: true,
    picture: "https://example.com/images/hydraulic-hammer.jpg",
  },
  {
    title: "Tower Crane",
    description: "A tall crane used for lifting in high-rise construction projects.",
    size: "60 tons",
    availability: false,
    picture: "https://example.com/images/tower-crane.jpg",
  },
  {
    title: "Scraper",
    description: "A machine for moving large quantities of earth quickly.",
    size: "22 tons",
    availability: true,
    picture: "https://example.com/images/scraper.jpg",
  },
  {
    title: "Wheel Loader",
    description: "A machine for loading materials into trucks or other vehicles.",
    size: "9 tons",
    availability: true,
    picture: "https://example.com/images/wheel-loader.jpg",
  },
  {
    title: "Paver Finisher",
    description: "A machine for laying materials during road construction.",
    size: "13 tons",
    availability: false,
    picture: "https://example.com/images/paver-finisher.jpg",
  },
];


export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const WIX_SESSION_COOKIE = 'wix-session';
