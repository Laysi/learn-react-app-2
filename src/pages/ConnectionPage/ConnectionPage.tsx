import React, { FC } from 'react';
import './ConnectionPage.scss';
import { Box, Container, Stack, Typography, } from '@mui/material';
interface ConnectionPageProps { }

const ConnectionPage: FC<ConnectionPageProps> = () => (
  <Container>
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
      <Stack direction={'column'}>
        <Typography variant={'h4'} fontWeight='bold' textAlign='left' sx={{ my: 2 }}>公司地址:台北市林森北路87號</Typography>
        <Typography variant={'h4'} fontWeight='bold' textAlign='left'>
          公司電話:<Typography variant={'h4'} fontWeight='bold' component="a" href="tel:0123456789" sx={{ textDecoration: 'none', color: 'inherit' }}>0123456789</Typography>
        </Typography>
        <Typography variant={'h4'} fontWeight='bold' textAlign='left' sx={{ my: 2 }}>電子信箱:0123456789@gmail.com</Typography>
        <Typography variant={'h4'} fontWeight='bold' textAlign='left' sx={{ my: 2 }}>LINE:0123456789</Typography>
      </Stack>
    </Box>
  </Container>
);

export default ConnectionPage;
