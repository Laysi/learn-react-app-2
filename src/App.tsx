import './App.css';
import AppRouters from './app-router';
import MainLayout from './layout/MainLayout/MainLayout';
function App() {
  return (
    <div className="App">
      <MainLayout >
        <AppRouters />
      </MainLayout>
    </div>
  );
}

export default App;
