import React from 'react';
import {
  AsyncSearchSelect,
  AutoFocusSelect,
  ClearableSearchableSelect,
  ColorTagSelect,
  CustomDropdownRenderSelect,
  CustomDropdownStyledSelect,
  CustomOptionLabelRender,
  CustomSelectedLabelRender
} from '../components';

const Selects1 = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Select Bileşenleri 1</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Async Search Select</h3>
          <AsyncSearchSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Auto Focus Select</h3>
          <AutoFocusSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Clearable Searchable Select</h3>
          <ClearableSearchableSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Color Tag Select</h3>
          <ColorTagSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Dropdown Render Select</h3>
          <CustomDropdownRenderSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Dropdown Styled Select</h3>
          <CustomDropdownStyledSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Option Label Render</h3>
          <CustomOptionLabelRender />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Selected Label Render</h3>
          <CustomSelectedLabelRender />
        </div>
      </div>
    </div>
  );
};

export default Selects1;
