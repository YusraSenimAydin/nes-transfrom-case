import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';

const CustomOptionLabelRender = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <CustomSelect
      options={options}
      optionRender={label => <span style={{ color: 'red' }}>{label}</span>}
    />
  );
};

export default CustomOptionLabelRender;
