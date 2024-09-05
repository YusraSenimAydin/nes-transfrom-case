import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const SortedSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));


  const options = sortedPosts.map((post, index) => ({
    label: `${index + 1}. ${post.title}`, 
    value: post.id,
    disabled: post.id % 2 === 0 
  }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        options={options}
        placeholder="Select with sorted and indexed options"
        filterOption={(input, option) =>
          option.label.toLowerCase().includes(input.toLowerCase())
        }
        showSearch
        allowClear
        onSearch={(value) => console.log(`Search term: ${value}`)}
      />
    </FetchingWrapper>
  );
};

export default SortedSelect;
