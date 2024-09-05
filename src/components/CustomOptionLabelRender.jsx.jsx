import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const CustomOptionLabelRender = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
    <CustomSelect
      options={options}
      placeholder="Select an option"
      allowClear
      showSearch
      labelInValue
      optionLabelProp="label"
      dropdownRender={menu => (
        <div>
          {menu}
          <div style={{ padding: 8 }}>
            <span style={{ color: 'red' }}>
              {options.length} options available
            </span>
          </div>
        </div>
      )}
    /> 
    </FetchingWrapper>
  );
};

export default CustomOptionLabelRender;
