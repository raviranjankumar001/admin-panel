// src/pages/admin/AddProduct.jsx
import { useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    email: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('email', formData.email);
    data.append('image', formData.image);

    await axios.post('http://localhost:8000/api/product', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Product Added');
    setFormData({ name: '', price: '', email: '', image: null });
  };

  return (<>
  <AdminNavbar />
  <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} value={formData.name} className="border p-2" />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} value={formData.price} className="border p-2" />
      <input type="email" name="email" placeholder="Vendor Email" onChange={handleChange} value={formData.email} className="border p-2" />
      <input type="file" name="image" onChange={handleChange} className="border p-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Add Product</button>
    </form>
  </>
    
  );
}
