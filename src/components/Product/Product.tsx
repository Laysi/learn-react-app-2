import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  coverUrl: string;
}

const adjectives: string[] = ["新鮮的", "美味的", "有機的", "自家製的", "天然的", "健康的", "獨特的", "經典的", "傳統的", "豪華的"];
const nouns: string[] = ["蘋果汁", "草莓醬", "烘焙麵包", "牛肉乾", "蔬菜包", "果醬", "蜂蜜", "巧克力", "香料", "茶葉"];
const titles: string[] = ["家庭必備", "美食選擇", "健康選項", "甜蜜享受", "美味佳肴", "天然選擇", "獨家配方", "傳統美味", "精緻選品", "優質選擇"];

export function generateProductData(numProducts: number): Product[] {
  const products: Product[] = [];
  for (let i = 0; i < numProducts; i++) {
    const name: string = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
    const title: string = titles[Math.floor(Math.random() * titles.length)];
    const description: string = `${title}，${name}，每一口都是對味蕾的極致呵護。`;
    const price: number = parseFloat((Math.random() * (100 - 10) + 10).toFixed(2));
    const product: Product = {
      id: i + 1,
      name,
      price,
      description,
      coverUrl: "https://picsum.photos/200"
    };
    products.push(product);
  }
  return products;
}
interface ProductProps { }

const Product: FC<ProductProps> = () => {
  let data = generateProductData(30);
  return (
    <Container >
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={4} md={2} key={item.id}  >
            <ShopItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}


const ShopItem: FC<{ item: Product }> = (props) => {
  const navigate = useNavigate();
  return(
  <Card sx={{  margin: 1, display: 'flex', flexDirection: 'column' }} onClick={()=>navigate(`/productDetails/${props.item.id}`)}>
    <CardActionArea>
      <CardMedia
        component="img"
        image={props.item.coverUrl}
        alt={props.item.name}
      />
      <CardContent>
        <Typography gutterBottom  component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.item.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

)
  }



export default Product;
