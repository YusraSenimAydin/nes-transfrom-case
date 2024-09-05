import React, { forwardRef } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CustomSelect = forwardRef(({
  options = [],
  filterOption,
  onSearch,
  allowClear,
  showSearch,
  dropdownStyle,
  dropdownRender,
  tagRender,
  suffixIcon,
  optionRender,
  labelRender,
  autoFocus,
  popupClassName,
  popupMatchSelectWidth,
  ...props
}, ref) => {
  const defaultDropdownRender = (menu) => menu;

  return (
    <Select
      {...props}
      ref={ref}
      allowClear={allowClear}
      showSearch={showSearch}
      filterOption={filterOption}
      onSearch={onSearch}
      dropdownStyle={dropdownStyle}
      dropdownRender={dropdownRender || defaultDropdownRender}
      tagRender={tagRender}
      suffixIcon={suffixIcon}
      autoFocus={autoFocus}
      popupClassName={popupClassName}         
      popupMatchSelectWidth={popupMatchSelectWidth}  
      style={{ width: '100%' }}
    >
      {options.map((option, index) => (
        <Option key={option.value || index} value={option.value}>
          {optionRender ? optionRender(option) : option.label}
        </Option>
      ))}
    </Select>
  );
});

export default CustomSelect;
