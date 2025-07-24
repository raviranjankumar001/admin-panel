// src/components/AdminNavbar.jsx
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div className="space-x-4">
        <Link to="/admin/dashboard" className="hover:underline">Home</Link>
        <Link to="/admin/products" className="hover:underline">Products</Link>
        <Link to="/admin/add-product" className="hover:underline">Add Product</Link>
        {/* <Link to="/admin/manage-categories" className="hover:underline">Manage Categories</Link> */}
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
