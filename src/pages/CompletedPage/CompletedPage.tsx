import React, { FC } from 'react';
import './CompletedPage.scss';

interface CompletedPageProps {}

const CompletedPage: FC<CompletedPageProps> = () => (
  <div className="CompletedPage" data-testid="CompletedPage">
    CompletedPage Component
  </div>
);

export default CompletedPage;
