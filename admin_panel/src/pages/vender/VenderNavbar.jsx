// src/components/AdminNavbar.jsx
import { Link } from "react-router-dom";

const VenderNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Vender Panel</h1>
      <div className="space-x-4">
        <Link to="/vendor/dashboard" className="hover:underline">
          Home
        </Link>
        
        <Link to="/vender/add-product" className="hover:underline">
          Add Product
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("vendorToken");
            localStorage.removeItem("vendorEmail");
            window.location.href = "/vendor/login"; // or navigate using React Router
          }}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default VenderNavbar;
