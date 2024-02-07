import React, { FC, ReactNode } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default MainLayout;