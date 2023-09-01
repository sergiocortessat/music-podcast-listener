import {RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import { customRoutes } from './routes/index';

const App = () => {
  return (
    <main className="intro">
      <NavBar />
      <RouterProvider router={customRoutes} />
    </main>
  );
};

export default App;