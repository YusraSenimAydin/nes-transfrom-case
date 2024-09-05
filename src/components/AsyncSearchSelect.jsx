import React, { useCallback } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';
import debounce from 'lodash/debounce';

const AsyncSearchSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  const handleSearch = (searchText) => {
    console.log('Search text:', searchText);

  };

  const debouncedSearch = useCallback(debounce(handleSearch, 300), []);


  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
    <CustomSelect
      options={options}
      showSearch
      onSearch={debouncedSearch}
      filterOption={(input, option) =>
        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
      }
      placeholder="Search and select"
    /> </FetchingWrapper>
  );
};

export default AsyncSearchSelect;