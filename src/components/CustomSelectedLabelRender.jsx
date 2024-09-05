import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const CustomSelectedLabelRender = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  
  const options = posts.map(post => ({
    label: post.title,
    value: post.id,
  }));


  const labelRender = ({ label, value }) => {
    if (!label) {
      return <span style={{ color: 'red' }}>The current value has no corresponding option</span>;
    }
    return <span>{label}</span>;
  };

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
    <CustomSelect
      options={options}
      labelRender={labelRender} 
      placeholder="Select an option"
    />
    </FetchingWrapper>
  );
};

export default CustomSelectedLabelRender;
