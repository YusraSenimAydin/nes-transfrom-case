import React from 'react';
import { Spin, Alert } from 'antd';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';

const CustomSelectedLabelRender = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  
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
    <CustomSelect
      options={options}
      labelRender={labelRender} 
      placeholder="Select an option"
    />
  );
};

export default CustomSelectedLabelRender;
