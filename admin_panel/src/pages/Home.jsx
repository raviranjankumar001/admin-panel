import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Multi-Vendor E-Commerce Admin Panel</h1>
      <div className="space-x-4">
        <Link to="/admin/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Admin Login
          </button>
        </Link>
        <Link to="/vendor/login">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Vendor Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
