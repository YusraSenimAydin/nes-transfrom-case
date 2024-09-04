import React from 'react';
import {
  SortedSelect,
  StatusIndicator,
  VirtualScroll
} from '../components';

const Selects3 = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Select Bileşenleri 3</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Sorted Selectt</h3>
          <SortedSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Status Indicator</h3>
          <StatusIndicator />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Virtual Scroll</h3>
          <VirtualScroll />
        </div>
      </div>
    </div>
  );
};

export default Selects3;
