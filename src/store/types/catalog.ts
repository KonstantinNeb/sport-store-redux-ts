export type CatalogState = {
  catalogItems: CatalogItem[];
};

export type CatalogItem = {
  id: number;
  name: string;
  price: number;
};
