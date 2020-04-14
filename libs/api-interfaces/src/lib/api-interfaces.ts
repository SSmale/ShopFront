export interface IProduct {
  id: number;
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
  id: number;
  product: IProduct;
  order: IOrder;
  picked: boolean;
}
