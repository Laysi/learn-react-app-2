import React, { FC } from 'react';
import './LogInPage.scss';
import { Container, Typography, TextField, Button, Link, Grid } from '@mui/material';

interface LogInPageProps {}

const LogInPage: FC<LogInPageProps> = () => (
  <div className="LogInPage" style={{ backgroundColor: '#F5F5F5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" align="center" gutterBottom>
        登入
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="帳號" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} container justifyContent="space-between">
            <TextField label="密碼" type="password" variant="outlined" fullWidth />
            <Link href="#" variant="body2" style={{ marginTop: '8px' }}>
              忘記密碼？
            </Link>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          登入
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          註冊
        </Button>
      </form>
    </Container>
  </div>
);

export default LogInPage;
