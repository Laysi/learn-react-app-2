import React, { FC } from 'react';
import './ProductBrowsingPage.scss';
import { Grid, Container, Card, CardActionArea, CardMedia, CardContent, Typography, Stack, Select, MenuItem, TextField } from '@mui/material';
import { generateProductData, ProductItem } from '../../data/Product';
import { useNavigate, useParams } from 'react-router-dom';

interface ProductBrowsingPageProps { }

const ShopItem: FC<{ item: ProductItem }> = (props) => {
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
  );
}

const ProductBrowsingPage: FC<ProductBrowsingPageProps> = () => {
  const { search } = useParams<{ search: string | undefined }>();
  const searchText = search || '';
  let data: ProductItem[] = generateProductData(30).filter(item =>
    item.name.includes(searchText)
  );
  if (data.length === 0) {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          No products found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Stack direction={'row'} justifyContent={'center'} spacing={1} sx={{ marginBottom: 2 }}>
      <Typography variant="body1" sx={{ margin: 1, paddingTop: 2 }}>排序:</Typography>
        <Select value="" displayEmpty>
          <MenuItem value="" disabled>
            排序
          </MenuItem>
          <MenuItem value="price_asc">價格從低到高</MenuItem>
          <MenuItem value="price_desc">價格從高到低</MenuItem>
          <MenuItem value="name_asc">最新</MenuItem>
          <MenuItem value="name_desc">最熱銷</MenuItem>
        </Select>
        <Typography variant="body1" sx={{ margin: 1, paddingTop: 2 }}>過濾:</Typography>
        <TextField label="價格" variant="outlined" />
        <Select value="" displayEmpty>
          <MenuItem value="" disabled>
            類別
          </MenuItem>
          <MenuItem value="category1">小吃</MenuItem>
          <MenuItem value="category2">娛樂</MenuItem>
          <MenuItem value="category3">公仔</MenuItem>
          <MenuItem value="category4">其他</MenuItem>
        </Select>
      </Stack>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <ShopItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductBrowsingPage;
