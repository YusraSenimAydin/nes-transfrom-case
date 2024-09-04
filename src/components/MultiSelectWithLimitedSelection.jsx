import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MAX_COUNT = 3;

const MultiSelectWithLimitedSelection = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const [selectedItems, setSelectedItems] = useState([]);

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  const handleChange = value => {
    if (value.length <= MAX_COUNT) {
      setSelectedItems(value);
    }
  };

  const suffix = (
    <>
      <span>
        {selectedItems.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <CustomSelect
      mode="multiple"
      options={options}
      value={selectedItems}
      onChange={handleChange}
      placeholder={`Select up to ${MAX_COUNT} options`}
      suffixIcon={suffix}
      maxTagCount={MAX_COUNT}
    />
  );
};

export default MultiSelectWithLimitedSelection;
