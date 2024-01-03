import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div data-testid="Dashboard">
    <Header />
    <Footer />
  </div>
);

export default Dashboard;
