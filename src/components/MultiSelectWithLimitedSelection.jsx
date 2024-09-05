import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';
import { DownOutlined } from '@ant-design/icons';


const MultiSelectWithLimitedSelection = ({ MAX_COUNT = 3 }) => {
  const { data: posts = [], isLoading, error } = usePosts();
  const [selectedItems, setSelectedItems] = useState([]);

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
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        mode="multiple"
        options={options}
        value={selectedItems}
        onChange={handleChange}
        placeholder={`Select up to ${MAX_COUNT} options`}
        suffixIcon={suffix}
        maxTagCount={MAX_COUNT}
      />
    </FetchingWrapper>
  );
};

export default MultiSelectWithLimitedSelection;
