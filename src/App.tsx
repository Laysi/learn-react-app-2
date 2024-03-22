import { createContext, useState } from 'react';
import './App.css';
import AppRouters from './app-router';
import MainLayout from './layout/MainLayout/MainLayout';
import { User } from './service/api-interface';
import { MockApiServiceProvider } from './service/api-service';
export const AppContext = createContext<{ login: (email: string, password: string) => Promise<User> }>({ login: () => Promise.reject('please setup AppContextProvider') });
function App() {
  const [user, setUser] = useState<User | null>(null);
  async function login(email: string, password: string) {
    let user = { email: email, name: email , username: email};
    setUser(user);
    return user;
  }
  return (
    <MockApiServiceProvider>
      <AppContext.Provider value={{ login: login }}>
        <div className="App">
          {user?.name ?? '未登入'}
          <MainLayout >
            <AppRouters />
          </MainLayout>
        </div>
      </AppContext.Provider>
    </MockApiServiceProvider>
  );
}

export default App;

