import React from 'react';
import {
  FieldNameMapping,
  SelectableWithCount,
  LabelInValue,
  LoadingStateSelectWithDisabledOptions,
  MultiSelectWithLimitedSelection,
  VariantsSelectWithCustomIcon,
  PlacementCustomization,
  PopupStyledSelect,
  CustomSelectedLabelRender,
} from '../components';

const Selects2 = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Select Bileşenleri 2</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Field Name Mapping</h3>
          <FieldNameMapping />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Selectable With Count</h3>
          <SelectableWithCount />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Label In Value</h3>
          <LabelInValue />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Loading State Select With Disabled Options</h3>
          <LoadingStateSelectWithDisabledOptions />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Multi-Select With Limited Selection</h3>
          <MultiSelectWithLimitedSelection />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Variants Select With Custom Icon</h3>
          <VariantsSelectWithCustomIcon />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Popup Styled Select</h3>
          <PopupStyledSelect />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Placement Customization</h3>
          <PlacementCustomization />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Selected Label Render</h3>
          <CustomSelectedLabelRender />
        </div>
      </div>
    </div>
  );
};

export default Selects2;
