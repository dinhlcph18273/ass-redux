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
import Product from './pages/Product';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />} >
          <Route index element={<Homepage />} />
          <Route path='products' element={<Product />} />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
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
