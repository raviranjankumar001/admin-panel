import React from 'react';
import VenderNavbar from './VenderNavbar';

const VenderHome = () => {
  return (
    <div>
      <VenderNavbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Vender Dashboard</h2>
      </div>
    </div>
  );
};

export default VenderHome;
