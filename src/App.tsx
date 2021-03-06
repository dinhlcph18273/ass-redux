import React from 'react';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCategory from './features/category/pages/AddCategory';
import EditCategory from './features/category/pages/EditCategory';
import ListCategory from './features/category/pages/ListCategory';
import Addproduct from './features/product/page/Addproduct';
import EditProduct from './features/product/page/EditProduct';
import ListProducts from './features/product/page/ListProducts';
import Dashboard from './pages/admin/Dashboard';
import Homepage from './pages/Homepage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AboutPage from './pages/AboutPage';


// import styles bundle
import 'swiper/css/bundle';
import ProductPage from './pages/ProductPage';
import PrivateRouter from './component/PrivateRouter';
import ProductDetail from './pages/ProductDetail';
import ProductWithCate from './component/ProductWithCate';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />} >
          <Route index element={<Homepage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='category/:id' element={<ProductWithCate />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<CheckOut />} />
        </Route>
        <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ListProducts />} />
            <Route path='add' element={<Addproduct />} />
            <Route path=':id/edit' element={<EditProduct />} />
          </Route>
          <Route path='category'>
            <Route index element={<ListCategory />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/edit' element={<EditCategory />} />
          </Route>
        </Route>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />

      </Routes>
    </div>
  );
}

export default App;
