import React, { FC } from 'react';
import './HistoricalOrdersPage.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField, Divider, TableBody, Table, TableCell, TableRow } from '@mui/material';
import { generateOrderData, OrderItem } from '../../data/Order';
interface HistoricalOrdersPageProps { }

const HistoricalOrdersPage: FC<HistoricalOrdersPageProps> = () => {
  let data = generateOrderData(10);
  console.log(data);
  return (
    <Container>
      <Stack direction='column'>
        <Stack direction={'row'} sx={{ mt: 2, color: 'red' }}>
          <Typography variant='body2' sx={{ pr: 0, ml: 2 }} >訂單編號</Typography>
          <Typography variant='body2' sx={{ pl: 10 }}>商品</Typography>
          <Typography variant='body2' sx={{ pl: 15.5 }}>數量</Typography>
          <Typography variant='body2' sx={{ pl: 11 }}>價格</Typography>
          <Typography variant='body2' sx={{ pl: 13 }}>總價</Typography>
        </Stack>
        {data.map((item) => (
          <OrderList item={item} />
        ))}
      </Stack>
    </Container>
  )
};

const OrderList: FC<{ item: OrderItem }> = (props) => {
  return (
    <Stack direction='row' sx={{ mb: 2 }} bgcolor={'#FFF27B'}>
      <Typography variant='body2' sx={{ mt: 2, ml: 2, pl: '30px' }}>{props.item.id}</Typography>

      <Stack direction='column' sx={{ pl: '60px' }}>
        <Table>
          <TableBody>
            {props.item.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ pr: 10 }}>
                  <Typography variant='body2' sx={{ maxWidth: '90px', overflowWrap: 'break-word' }}>{item.name}</Typography>
                </TableCell>
                <TableCell sx={{ pr: 10 }}>
                  <Typography variant='body2' >{item.id}</Typography>
                </TableCell>
                <TableCell sx={{ pr: 10 }}>
                  <Typography variant='body2'>{item.price}</Typography>
                </TableCell>
                <TableCell sx={{ pr: 10 }}>
                  <Typography variant='body2'>{item.price * item.id}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack direction='row' sx={{ mt: 2, ml: 2, color: 'red' }}>
          <Typography variant='body2' sx={{ mr: 1, }}>訂單金額: </Typography>
          <Typography variant='body2' >{props.item.total}</Typography>
        </Stack>
        <Button variant='contained' sx={{ maxWidth:'100px',ml:50,transform: 'translateY(-30px) translateX(30px)'}}>再買一次</Button>
      </Stack>


    </Stack>
  )
}

export default HistoricalOrdersPage;
