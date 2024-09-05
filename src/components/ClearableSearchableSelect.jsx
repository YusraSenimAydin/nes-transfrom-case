import React, { useState, useMemo } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { SearchOutlined } from '@ant-design/icons';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const ClearableSearchableSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const filteredOptions = useMemo(() => {
    return posts
      .filter(post =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map(post => ({ label: post.title, value: post.id }));
  }, [searchValue, posts]);

  const handleSearch = value => {
    setSearchValue(value);
  };

  const handleChange = value => {
    setSelectedValue(value);
    setSearchValue('');
  };

  const handleClear = () => {
    setSelectedValue(null);
    setSearchValue('');
  };

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        options={filteredOptions}
        showSearch
        value={selectedValue}
        placeholder="Select or search"
        onSearch={handleSearch}
        onChange={handleChange}
        filterOption={false}
        allowClear
        onClear={handleClear}
        notFoundContent={filteredOptions.length === 0 ? 'No results found' : null}
        suffixIcon={<SearchOutlined />}
      />
    </FetchingWrapper>
  );
};

export default ClearableSearchableSelect;
