export interface NotificationItem{
    title:string;
    description:string;
    timestamp:Date;
    image:string;
}

const adjectives: string[] = ["新鮮的", "美味的", "有機的", "自家製的", "天然的", "健康的", "獨特的", "經典的", "傳統的", "豪華的"];
const nouns: string[] = ["蘋果汁", "草莓醬", "烘焙麵包", "牛肉乾", "蔬菜包", "果醬", "蜂蜜", "巧克力", "香料", "茶葉"];
const titles: string[] = ["家庭必備", "美食選擇", "健康選項", "甜蜜享受", "美味佳肴", "天然選擇", "獨家配方", "傳統美味", "精緻選品", "優質選擇"];

export function generateNotificationData(numProducts: number): NotificationItem[] {
    const items: NotificationItem[] = [];
    for (let i = 0; i < numProducts; i++) {
      const name: string = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
      const title: string = titles[Math.floor(Math.random() * titles.length)];
      const description: string = `${title}的超級優惠記得回來使用!!`;
      const item: NotificationItem = {
    
        title:name+'，95折券 大放送。',
        description,
        timestamp:new Date(),
        image: "https://picsum.photos/100"
      };
      items.push(item);
    }
    return items;
  }