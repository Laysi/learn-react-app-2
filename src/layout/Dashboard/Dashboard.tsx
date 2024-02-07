import React, { FC } from 'react';
import Product from '../../components/Product/Product';
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div data-testid="Dashboard">
    <Product />
  </div>
);

export default Dashboard;
