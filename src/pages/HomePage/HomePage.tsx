import { type FC } from 'react';
import './HomePage.scss';
import Dashboard from '../../layout/Dashboard/Dashboard';
import { useAuth } from '../../service/auth-service';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const auth = useAuth();
  return (
  <div className="HomePage" data-testid="HomePage">
   {auth.currentUser?.name ?? '未登入'}
    <Dashboard />
  </div>);
};

export default HomePage;