import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';

const SortedSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();

 
  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;


  const options = posts
    .sort((a, b) => a.title.localeCompare(b.title)) 
    .map((post, index) => ({
      label: `${index + 1}. ${post.title}`, 
      value: post.id,
      disabled: post.id % 2 === 0 
    }));

  return (
    <CustomSelect
   
      options={options}
      placeholder="Select with sorted and indexed options"
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default SortedSelect;
