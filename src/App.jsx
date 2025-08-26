import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Layout from './components/Layout';
import Signup from './pages/Signup';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
