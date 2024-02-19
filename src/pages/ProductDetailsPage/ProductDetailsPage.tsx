import React, { FC } from 'react';
import './ProductDetailsPage.scss';
import { useNavigate } from 'react-router-dom';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface ProductDetailsPageProps { }

const ProductDetailsPage: FC<ProductDetailsPageProps> = () => (
  <Container>
    <Stack direction='column'>
      <Grid container>
        <Grid item xs={6}>
          <Stack direction='column'>
            <Box>
              <img src="https://picsum.photos/400/250" alt='product' />
            </Box>
            <Stack direction='row'>
              <Box sx={{ p: 1 }}>
                <img src="https://picsum.photos/120" alt='product' />
              </Box>
              <Box sx={{ p: 1 }}>
                <img src="https://picsum.photos/120" alt='product' />
              </Box>
              <Box sx={{ p: 1 }}>
                <img src="https://picsum.photos/120" alt='product' />
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={6} sx={{ P: 1 }}>
          <Stack direction='column'>
            <Stack direction='row'>
              <Typography variant='h5' fontWeight='bold'>MHW(商品名稱)</Typography>
            </Stack>
            <Stack direction='row'>
              <Typography variant='body2' fontWeight='bold' sx={{ mr: 1 }}>2</Typography>
              <Typography variant='body2' color='gray'>已售出</Typography>
            </Stack>
            <Stack direction='row'>
              <Typography variant='h5' fontWeight='bold' sx={{ my: 1, color: 'red', }}>$300 - $1200</Typography>
            </Stack>
            <Stack direction='row' spacing={2} sx={{my:1}}>
              <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>規格</Typography>
              <Chip label='原版'></Chip>
              <Chip label='冰原'></Chip>
            </Stack>
            <Stack direction='row' spacing={2} sx={{my:1}}>
              <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>運送</Typography>
              <Chip label='全家'></Chip>
              <Chip label='萊爾富'></Chip>
            </Stack>
            <Stack direction='row' sx={{my:1}}>
              <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>運費</Typography>
              <Typography variant='h6' >$60</Typography>
            </Stack>
            <Stack direction='row' sx={{my:1}}>
              <Typography variant='h6' fontWeight='bold' sx={{ mr: 1 }}>購買數量</Typography>
              <TextField  size='small' defaultValue='1' label='數量'/>
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
    </Stack>
  </Container>
);

export default ProductDetailsPage;
