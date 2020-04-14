export interface IProduct {
  title: string;
}

export interface IOrder {
  id: number;
  name: string;
  address: string;
  paid: boolean;
  total: number; // pennies
  products: IOrderProduct[];
}

export interface IOrderProduct {
  product: IProduct;
  picked: boolean;
}
