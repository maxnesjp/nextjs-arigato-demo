import { Menu } from "./arigato/types";

export type SortKey = 'name' | 'lastUpdated' | 'price' | "availability" | "delivery";

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

export const ArigatoFilterItems: SortFilterItem[] = [
  { title: '', slug: 'latest-desc', sortKey: 'lastUpdated', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'price', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'price', reverse: true },
  { title: 'Availability', slug: 'availability', sortKey: 'availability', reverse: true },
  { title: 'Delivery time', slug: 'delivery', sortKey: 'delivery', reverse: true }
]

export const MenuItems: Menu[] = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Jay",
    path: "/search/jay"
  },
  {
    title: "CNC",
    path: "/search/cnc"
  }
]
export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'lastUpdated', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'price', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'price', reverse: true }
];