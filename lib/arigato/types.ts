
export type Collection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  featuredImage: Image;
  seo: SEO;
  tags: string[];
  updatedAt: string;
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Machinery = {
  id: number;
  category: string;
  title: string;
  description: string;
  size: string;
  availability: boolean;
  image: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  weight: string;
  power: string;
  engineType: string;
  maxDiggingDepth: string;
  bucketCapacity: string;
  operatingPressure: string;
  maxSpeed: string;
  fuelCapacity: string;
  hydraulicSystemCapacity: string;
  year: number;
  country: string;
  manufacturer: string;
  price: string;
  warranty: string;
  features: string[];
};

export type ProductDetailsLabelValue =  {
  productDetails: {
    label: string;
    value: string | number | string[];
  }[];
}


export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

export type MachineryEquipment = {
  title: string;
  description: string;
  size: string;
  availability: boolean;
  picture: string;
};