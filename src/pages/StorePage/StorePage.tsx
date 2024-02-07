import React, { FC } from 'react';
import './StorePage.scss';

interface StorePageProps {}

const StorePage: FC<StorePageProps> = () => (
  <div className="StorePage" data-testid="StorePage">
    StorePage Component
  </div>
);

export default StorePage;
