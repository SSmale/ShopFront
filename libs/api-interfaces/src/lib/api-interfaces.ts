export interface Product {
  title: string;
}

export interface Order {
  name: string;
  address: string;
  paid: boolean;
  total: number; // pennies
  products: OrderProduct[];
}

export interface OrderProduct extends Product {
  picked: boolean;
}
