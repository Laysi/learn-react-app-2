import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div data-testid="Dashboard">
    <Header />
    <Product />
    <Footer />
  </div>
);

export default Dashboard;
