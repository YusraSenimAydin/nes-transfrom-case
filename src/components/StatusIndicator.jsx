import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';
import { CheckOutlined } from '@ant-design/icons';

const StatusIndicator = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <>
     <FetchingWrapper isLoading={isLoading} error={error}>
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
      </FetchingWrapper>
    </>
  );
};

export default StatusIndicator;