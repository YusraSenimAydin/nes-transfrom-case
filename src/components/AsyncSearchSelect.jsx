import React, { useCallback } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';
import debounce from 'lodash/debounce';

const AsyncSearchSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  const handleSearch = (searchText) => {
    console.log('Search text:', searchText);

  };

  const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <CustomSelect
      options={options}
      showSearch
      onSearch={debouncedSearch}
      filterOption={(input, option) =>
        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
      }
      placeholder="Search and select"
    />
  );
};

export default AsyncSearchSelect;