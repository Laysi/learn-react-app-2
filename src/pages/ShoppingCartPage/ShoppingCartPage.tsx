import React, { FC } from 'react';
import './ShoppingCartPage.scss';

interface ShoppingCartPageProps {}

const ShoppingCartPage: FC<ShoppingCartPageProps> = () => (
  <div className="ShoppingCartPage" data-testid="ShoppingCartPage">
    ShoppingCartPage Component
  </div>
);

export default ShoppingCartPage;
