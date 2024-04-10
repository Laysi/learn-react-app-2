import React, { FC, useEffect, useState } from 'react';
import './ProductDetailsPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useApi } from '../../service/api-service';
import * as api from '../../service/api-interface';
interface ProductDetailsPageProps { }

const ProductDetailsPage: FC<ProductDetailsPageProps> = () => {
  const api = useApi();
  const {id} = useParams();
  const [data, setData] = useState<api.Product>();
  useEffect(() => {
    async function getData() {
      if (id === undefined) return;
      let dataProduct = await api.getProductById(parseInt(id));
      setData(dataProduct);
    }
    getData();
  },[]);
  return (
    <Container>
      <Stack direction='column'>
        <Grid container>
          <Grid item xs={6}>
            <Stack direction='column'>
              <Box>
                <img src={data?.coverUrl} alt='product' />
              </Box>
              <Stack direction='row'>
                <Box sx={{ p: 1 }}>
                  <img src={data?.coverUrl} alt='product' />
                </Box>
                <Box sx={{ p: 1 }}>
                  <img src={data?.coverUrl} alt='product' />
                </Box>
                <Box sx={{ p: 1 }}>
                  <img src={data?.coverUrl} alt='product' />
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} sx={{ P: 1 }}>
            <Stack direction='column'>
              <Stack direction='row'>
                <Typography variant='h5' fontWeight='bold'>{data?.name}</Typography>
              </Stack>
              <Stack direction='row'>
                <Typography variant='body2' fontWeight='bold' sx={{ mr: 1 }}>2</Typography>
                <Typography variant='body2' color='gray'>已售出</Typography>
              </Stack>
              <Stack direction='row'>
                <Typography variant='h5' fontWeight='bold' sx={{ my: 1, color: 'red', }}>{data?.price}</Typography>
              </Stack>
              <Stack direction='row' spacing={2} sx={{ my: 1 }}>
                <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>規格</Typography>
                <Chip label='原版'></Chip>
                <Chip label='冰原'></Chip>
              </Stack>
              <Stack direction='row' spacing={2} sx={{ my: 1 }}>
                <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>運送</Typography>
                <Chip label='全家'></Chip>
                <Chip label='萊爾富'></Chip>
              </Stack>
              <Stack direction='row' sx={{ my: 1 }}>
                <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>運費</Typography>
                <Typography variant='h6' >$60</Typography>
              </Stack>
              <Stack direction='row' sx={{ my: 1 }}>
                <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>購買數量</Typography>
                <TextField size='small' defaultValue='1' label='數量' />
                <IconButton aria-label='add' color='primary'>
                  <AddIcon />
                </IconButton>
                <IconButton aria-label='minus' color='primary'>
                  <RemoveIcon />
                </IconButton>
              </Stack>
              <Stack direction='row'>
                <Button variant='contained' color='primary' sx={{ mr: 5 }}>加入購物車</Button>
                <Button variant='contained' color='primary'>立即購買</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Stack direction='column' sx={{ bgcolor: 'lightgray', alignItems: 'start', p: 2, textAlign: 'start' }}>
              <Typography variant="h6" color="inherit">
                商品規格
              </Typography>
              <Divider flexItem sx={{ my: 2 }} ></Divider>
              <Stack direction='row'>
                <Typography variant="body1" sx={{ minWidth: 100 }} fontWeight='bold'>
                  商品數量:
                </Typography>
                <Typography variant="body1" >404</Typography>
              </Stack>
              <Stack direction='row'>
                <Typography variant="body1" sx={{ minWidth: 100 }} fontWeight='bold'>
                  產地:
                </Typography>
                <Typography variant="body1" >台灣</Typography>
              </Stack>
              <Stack direction='row'>
                <Typography variant="body1" sx={{ minWidth: 100 }} fontWeight='bold'>
                  產品資訊:
                </Typography>
                <Typography variant="body1" >{data?.description}</Typography>
              </Stack>
            </Stack>

          </Grid>

        </Grid>
      </Stack>
    </Container>

  )
};

export default ProductDetailsPage;


