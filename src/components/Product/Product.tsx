import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useApi } from '../../service/api-service';
import * as api from '../../service/api-interface';
interface ProductProps { }

const Product: FC<ProductProps> = () => {
  // let data = generateProductData(30);
  const [data, setData] = useState<api.Product[]>([]);
  const apiService = useApi();
  useEffect(() => {
    async function getData() {
      const mockApi = new api.MockApi();
      let data = await mockApi.listProduct();
      setData(data);
    }
    getData();
  }, []);
  
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


const ShopItem: FC<{ item: api.Product }> = (props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ margin: 1, display: 'flex', flexDirection: 'column' }} onClick={() => navigate(`/productDetails/${props.item.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.item.coverUrl}
          alt={props.item.name}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
