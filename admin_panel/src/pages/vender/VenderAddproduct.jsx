// src/pages/vendor/VendorAddProduct.jsx
import { useState } from 'react';
import axios from 'axios';
import VenderNavbar from './VenderNavbar';

export default function VendorAddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
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

    const token = localStorage.getItem('vendorToken');
    const email = localStorage.getItem('vendorEmail');
    if (!token || !email) {
      alert('Vendor not logged in!');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('email', email); // auto-fill from vendor
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:8000/api/vendor/product', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Product added!');
      setFormData({ name: '', price: '', image: null });
    } catch (err) {
      alert('Error while adding product');
      console.error(err);
    }
  };

  return (<>
  <VenderNavbar />
  <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
        value={formData.name}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={formData.price}
        className="border p-2 w-full"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Add Product
      </button>
    </form>
  </>
    
  );
}
