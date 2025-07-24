import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import './index.css'; // Tailwind or normal CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppRoutes />
  // </React.StrictMode>
);
