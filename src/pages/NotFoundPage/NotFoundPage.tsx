import React, { FC } from 'react';
import './NotFoundPage.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField, Divider, TableBody, Table, TableCell, TableRow } from '@mui/material';
interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <Container>
      <Stack direction='column' sx={{ mt: 2, color: 'red' }}>
        <Typography variant='h1'>Error 404!</Typography>
        <Typography variant='h4'>頁面未找到</Typography>
      </Stack>
    </Container>
  )
};

export default NotFoundPage;
