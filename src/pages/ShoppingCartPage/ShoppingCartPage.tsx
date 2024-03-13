import React, { FC, useState } from 'react';
import './ShoppingCartPage.scss';
import { Container, Stack, Typography, Button, Checkbox, Table, TableBody, TableCell, TableRow, IconButton } from '@mui/material';
import { generateOrderData, OrderItem } from '../../data/Order';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ShoppingCartPageProps {}

const ShoppingCartPage: FC<ShoppingCartPageProps> = () => {
  const orderData = generateOrderData(1);

  return (
    <Container>
      <Stack direction='column'>
        <Stack direction='row' sx={{ mt: 2, color: 'red', alignItems: 'center' }}>
          <Typography variant='body2' sx={{ pr: 0, ml: 6 }}>全選</Typography><Checkbox />
          <Typography variant='body2' sx={{ pr: 18, ml: 7 }}>商品</Typography>
          <Typography variant='body2' sx={{ pr: 10 }}>數量</Typography>
          <Typography variant='body2' sx={{ pr: 10, ml: 4 }}>價格</Typography>
          <Typography variant='body2' sx={{ pr: 10 }}>總價</Typography>
        </Stack>
        {orderData.map((item) => (
          <OrderList key={item.id} item={item} />
        ))}
      </Stack>
    </Container>
  );
};

interface OrderListProps {
  item: OrderItem;
}

const OrderList: FC<OrderListProps> = ({ item }) => {
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>(() => {
    const initialQuantities: { [productId: number]: number } = {};
    item.items.forEach((product) => {
      initialQuantities[product.id] = product.id; 
    });
    return initialQuantities;
  });

  const decreaseQuantity = (productId: number) => {
    const currentQuantity = quantities[productId] || productId; 
    if (currentQuantity > productId) {
      setQuantities({ ...quantities, [productId]: currentQuantity - 1 });
    }
  };

  const increaseQuantity = (productId: number) => {
    const currentQuantity = quantities[productId] || productId; 
    setQuantities({ ...quantities, [productId]: currentQuantity + 1 });
  };

  return (
    <Stack direction='row' sx={{ mb: 2, alignItems: 'center' }} bgcolor={'#FFF27B'}>
      <Stack direction='column' sx={{ pl: '60px' }}>
        <Table>
          <TableBody>
            {item.items.map((product) => (
              <TableRow key={product.id} sx={{ pr: 5 }}>
                <TableCell sx={{ pr: 5 }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ pr: 5 }}>
                  <Typography variant='body2' sx={{ maxWidth: '90px', overflowWrap: 'break-word' }}>{product.name}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <IconButton onClick={() => decreaseQuantity(product.id)} sx={{ backgroundColor: 'transparent' }}><RemoveIcon /></IconButton>
                    <Typography variant='body2'>{quantities[product.id]}</Typography>
                    <IconButton onClick={() => increaseQuantity(product.id)} sx={{ backgroundColor: 'transparent' }}><AddIcon /></IconButton>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant='body2' sx={{ ml: 7, pr: 5 }}>{product.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>{product.price * quantities[product.id]}</Typography> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack direction='row' sx={{ mt: 2, ml: 2, color: 'red', alignItems: 'center' }}>
          <Button variant='contained'>刪除</Button>
          <Typography variant='body2' sx={{ mr: 1,ml:40 }}>訂單金額: </Typography>
          <Typography variant='body2'>{item.total}</Typography>
          <Button variant='contained'>結帳</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoppingCartPage;



