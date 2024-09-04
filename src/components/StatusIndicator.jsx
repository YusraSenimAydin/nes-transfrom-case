import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const StatusIndicator = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <>
      <CustomSelect
        options={options}
        suffixIcon={<CheckOutlined style={{ color: 'green' }} />}
        status="error"
        placeholder="Select with status indicator"
      />
      <CustomSelect
        options={options}
        suffixIcon={<CheckOutlined style={{ color: 'blue' }} />} 
        status="warning"
        placeholder="Select with status indicator"
      />
    </>
  );
};

export default StatusIndicator;