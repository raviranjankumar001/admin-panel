import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AdminLogin from '../pages/auth/AdminLogin';
import VendorLogin from '../pages/auth/VendorLogin';
import VendorRegister from '../pages/auth/VendorRegister';
import AdminDashboard from '../pages/admin/Dashboard';
import AddProduct from '../pages/admin/AddProduct';
import AllProducts from '../pages/admin/AllProduct';
import VenderHome from '../pages/vender/VenderHome';
import VenderAddProduct from '../pages/vender/VenderAddproduct';
// (Import login pages when ready)

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes below when login pages are ready */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<AllProducts />} />
        <Route path='/vendor/dashboard' element={<VenderHome/>} />
        <Route path='/vender/add-product' element={<VenderAddProduct/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
