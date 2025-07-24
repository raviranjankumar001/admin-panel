// src/pages/admin/AllProducts.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

import AdminNavbar from './AdminNavbar';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem('adminToken');
    const res = await axios.get('http://localhost:8000/api/product/all', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(res.data.products);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken');
    await axios.delete(`http://localhost:8000/api/product/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <AdminNavbar />
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      {products.map((product) => (
        <div key={product._id} className="border p-4 mb-3">
          <h2>{product.name} - ₹{product.price}</h2>
          <img src={product.image} className="h-20 w-20 object-cover" />
          <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-3 py-1 mt-2">Delete</button>
        </div>
      ))}
    </div>
  );
}
