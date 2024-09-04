import React, {  useState, useMemo } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { SearchOutlined } from '@ant-design/icons';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';

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
  };

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  return (
    <CustomSelect
      options={filteredOptions}
      showSearch
      value={selectedValue || searchValue}
      placeholder="Select or search"
      style={{ width: '100%' }}
      onSearch={handleSearch}
      onChange={handleChange}
      filterOption={false}
      allowClear
      notFoundContent={filteredOptions.length === 0 ? 'No results found' : null}
      suffixIcon={<SearchOutlined />}
    />
  );
};

export default ClearableSearchableSelect;
