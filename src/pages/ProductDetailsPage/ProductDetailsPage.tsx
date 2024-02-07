import React, { FC } from 'react';
import './ProductDetailsPage.scss';

interface ProductDetailsPageProps {}

const ProductDetailsPage: FC<ProductDetailsPageProps> = () => (
  <div className="ProductDetailsPage" data-testid="ProductDetailsPage">
    ProductDetailsPage Component
  </div>
);

export default ProductDetailsPage;
