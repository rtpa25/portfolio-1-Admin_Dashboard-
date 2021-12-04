/** @format */

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import Cookies from 'js-cookie';
import Login from './pages/Login';
import Page404 from './pages/404';

const Container = styled.div`
  margin-top: 1rem;
`;

function App() {
  const token = Cookies.get('token');

  return (
    <BrowserRouter>
      <Topbar />
      <Container className='flex'>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={token ? <Home /> : <Navigate to={'/login'} />}
          />
          <Route path='/home' element={token ? <Home /> : <></>} />
          <Route
            path='/users'
            element={token ? <UserList /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/user/:userId'
            element={token ? <User /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/newUser'
            element={token ? <NewUser /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/products'
            element={token ? <ProductList /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/product/:productId'
            element={token ? <Product /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/newProduct'
            element={token ? <NewProduct /> : <Navigate to={'/login'} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
