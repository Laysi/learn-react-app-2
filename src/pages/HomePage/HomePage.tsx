import { type FC } from 'react';
import './HomePage.scss';
import Dashboard from '../../layout/Dashboard/Dashboard';
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    HomePage
  </div>
);

export default HomePage;