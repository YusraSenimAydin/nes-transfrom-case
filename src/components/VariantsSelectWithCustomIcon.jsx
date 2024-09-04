import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { ForwardOutlined  , CaretRightOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Spin, Alert } from 'antd';

const VariantsSelectWithCustomIcon = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <>
    <CustomSelect
      options={options}
      suffixIcon={<ForwardOutlined />}
      variant=" outlined"  
      placeholder="Select an option-Outlined"
    />
    <CustomSelect
      options={options}
      suffixIcon={<CaretRightOutlined /> }
      variant=" filled"  
      placeholder="Select an option-Filled"
    />
    <CustomSelect
      options={options}
      suffixIcon={<DoubleRightOutlined />}
      variant=" Borderless"  
      placeholder="Select an option-Borderless"
    />
    </>
  

  );
};

export default VariantsSelectWithCustomIcon;
