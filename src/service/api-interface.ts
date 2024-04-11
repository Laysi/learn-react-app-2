import { Faker, zh_TW, base, en, es } from '@faker-js/faker';
let faker = new Faker({ locale: [zh_TW, es, en, base] });

//API
export interface ApiService {
  login(username: string, password: string): Promise<User>;
  logout(): Promise<void>;
  getUserProfile(): Promise<UserProfile>;

  listNotify(): Promise<Notification[]>;

  listProduct(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;

  listOrder(): Promise<Order[]>;
  placeOrder(
    items: OrderProduct[],
    transportation: Transportation
  ): Promise<Order>;

  listLocation(): Promise<PickupLocation[]>;
}

export interface User {
  username: string;
  email: string;
  name: string;

}

type Gender = "female" | "male";

export interface UserProfile {
  email: string;
  username: string;
  name: string;
  phone: string;
  gender: Gender;
}

export interface Notification {
  title: string;
  description: string;
  timestamp: Date;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  coverUrl: string;
  variant: string[];
}

export interface OrderProduct {
  data: Product;
  variant: string;
  amount: number;
}

type TransportationType = "familymart" | "hilife";
export interface PickupLocation {
  type: TransportationType;
  city: string;
  name: string;
  address: string;
}

export interface Transportation {
  type: TransportationType;
  location: PickupLocation;
}

export interface Order {
  id: number;
  createdAt: Date;
  items: OrderProduct[];
  transportation: Transportation;
  total: number;
}

// Mock
export class MockApi implements ApiService {
  private user: User | null = null;
  private notifyList: Notification[];
  private productList: Product[];
  private orderList: Order[];
  private locationList: PickupLocation[];

  constructor() {
    this.notifyList = this.generateNotificationData(faker.number.int({ min: 30, max: 50 }));
    this.productList = this.generateProductData(faker.number.int({ min: 30, max: 50 }));
    this.orderList = this.generateOrderData(faker.number.int({ min: 30, max: 50 }), this.productList);
    this.locationList = this.generatePickLocationData(faker.number.int({ min: 1000, max: 2000 }))
  }

  private generateNotificationData(amount: number): Notification[] {
    const adjectives: string[] = ["新鮮的", "美味的", "有機的", "自家製的", "天然的", "健康的", "獨特的", "經典的", "傳統的", "豪華的"];
    const nouns: string[] = ["蘋果汁", "草莓醬", "烘焙麵包", "牛肉乾", "蔬菜包", "果醬", "蜂蜜", "巧克力", "香料", "茶葉"];
    const titles: string[] = ["家庭必備", "美食選擇", "健康選項", "甜蜜享受", "美味佳肴", "天然選擇", "獨家配方", "傳統美味", "精緻選品", "優質選擇"];
    const items: Notification[] = [];
    for (let i = 0; i < amount; i++) {
      const name: string = `${faker.helpers.arrayElement(adjectives)}${faker.helpers.arrayElement(nouns)}`;
      const title: string = faker.helpers.arrayElement(titles);
      const description: string = `${title}的超級優惠記得回來使用!!`;
      const item: Notification = {

        title: name + '，95折券 大放送。',
        description,
        timestamp: new Date(),
        image: "https://picsum.photos/100"
      };
      items.push(item);
    }
    return items;
  }



  private generateProductData(amount: number): Product[] {
    const adjectives: string[] = ["新鮮的", "美味的", "有機的", "自家製的", "天然的", "健康的", "獨特的", "經典的", "傳統的", "豪華的"];
    const nouns: string[] = ["蘋果汁", "草莓醬", "烘焙麵包", "牛肉乾", "蔬菜包", "果醬", "蜂蜜", "巧克力", "香料", "茶葉"];
    const titles: string[] = ["家庭必備", "美食選擇", "健康選項", "甜蜜享受", "美味佳肴", "天然選擇", "獨家配方", "傳統美味", "精緻選品", "優質選擇"];
    const products: Product[] = [];
    for (let i = 0; i < amount; i++) {

      const name: string = `${faker.helpers.arrayElement(adjectives)}${faker.helpers.arrayElement(nouns)}`;
      const title: string = faker.helpers.arrayElement(titles);
      const description: string = `${title}，${name}，每一口都是對味蕾的極致呵護。`;
      const price: number = faker.number.float({ min: 10, max: 100, fractionDigits: 2 });
      const product: Product = {
        id: i + 1,
        name,
        price,
        description,
        coverUrl: "https://picsum.photos/200",
        variant: ['原版', '冰原'],
      };
      products.push(product);
    }
    return products;
  }


  private generateOrderData(amount: number, products: Product[]): Order[] {
    const items: Order[] = [];
    for (let i = 0; i < amount; i++) {
      const item: Order = {
        id: (i + 1),
        createdAt: new Date(),
        total: 0,
        items: faker.helpers.arrayElements(products, { min: 1, max: 7 }).map(p => ({
          data: p,
          amount: faker.number.int({ min: 1, max: 10 }),
          variant: faker.helpers.arrayElement(p.variant),
        })),
        transportation: {
          location: {
            address: '',
            city: '',
            name: '',
            type: 'familymart'
          },
          type: 'familymart',
        },
      };
      item.total = item.items.reduce((sum, item) => sum + item.data.price, 0);
      items.push(item);
    }
    return items;
  }
  private generatePickLocationData(amount: number): PickupLocation[] {
    const items: PickupLocation[] = [];
    for (let i = 0; i < amount; i++) {
      let city = faker.location.city();
      let street = faker.location.street();
      let number = faker.location.buildingNumber();
      items.push({
        address: [city, street, number, '號'].join(' '),
        city: city,
        name: `${city}${street}店`,
        type: faker.helpers.arrayElement(['familymart', 'hilife']),
      })
    }
    return items;
  }


  async login(username: string, password: string): Promise<User> {
    await waitRandom();
    this.user = { username: username, name: username, email: 'test@test.test' };
    return this.user;
  }

  async logout(): Promise<void> {
    await waitRandom();
    this.user = null;
  }

  async getUserProfile(): Promise<UserProfile> {
    await waitRandom();
    if (this.user == null) {
      return Promise.reject("user not login");
    }
    return Promise.resolve({
      username: this.user!.username,
      email: this.user!.email,
      gender: "male",
      name: this.user!.name,
      phone: "no data",
    });
  }

  async listNotify(): Promise<Notification[]> {
    await waitRandom();
    return this.notifyList;
  }

  async listProduct(): Promise<Product[]> {
    await waitRandom();
    return this.productList;
  }


  async getProductById(id: number): Promise<Product | undefined> {
    await waitRandom();
    return this.productList.find(p => p.id === id - 1);
  }

  async listOrder(): Promise<Order[]> {
    await waitRandom();
    return this.orderList;
  }

  async placeOrder(items: OrderProduct[], transportation: Transportation): Promise<Order> {
    await waitRandom();
    let order: Order = {
      id: this.orderList.length,
      createdAt: new Date(),
      items: items,
      total: items.reduce((sum, item) => sum + item.data.price, 0),
      transportation: transportation,
    };
    this.orderList.push(order);
    return order;
  }
  async listLocation(): Promise<PickupLocation[]> {
    await waitRandom();
    return this.locationList;
  }
}

async function waitRandom(): Promise<void> {
  return wait(faker.number.int({ min: 500, max: 2000 }));
}

async function wait(ms: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(resolve, ms);
  });
}

//Cart Service
export interface Cart {
  items: OrderProduct[];
}

