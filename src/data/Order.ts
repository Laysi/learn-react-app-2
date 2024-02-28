import { ProductItem, generateProductData } from "./Product";

export interface OrderItem{
    createdAt:Date;
    id:string;
    items:ProductItem[];
    total:number;
}

export function generateOrderData(numProducts: number): OrderItem[] {
    const items: OrderItem[] = [];
    for (let i = 0; i < numProducts; i++) {
      const item: OrderItem = {
        id:(i+1).toString(),
        createdAt:new Date(),
        total:0,
        items:generateProductData(1+Math.floor(Math.random() * 7)),
      };
      item.total = item.items.reduce((sum,item)=>sum+item.price,0);
      items.push(item);
    }
    return items;
  }

