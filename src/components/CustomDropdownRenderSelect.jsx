import React, { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';
import { Input, Button, message } from 'antd';

const CustomDropdownRenderSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const [searchValue, setSearchValue] = useState('');
  const [newItem, setNewItem] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (posts.length > 0) {
      setOptions(posts.map(post => ({ label: post.title, value: post.id })));
    }
  }, [posts]); 


  const handleAddItem = () => {
    if (newItem) {
      const newOption = { label: newItem, value: newItem };
      setOptions(prevOptions => [...prevOptions, newOption]);
      setNewItem('');
      message.success(`Added new item: ${newItem}`);
    } else {
      message.error('Please enter a value');
    }
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const dropdownRender = menu => (
    <div>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        style={{ marginBottom: 8 }}
      />
      {menu}
      <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item"
          style={{ flex: 'auto', marginRight: 8 }}
        />
        <Button
          type="primary"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </div>
    </div>
  );

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
    <CustomSelect
      options={filteredOptions}
      dropdownRender={dropdownRender}
      placeholder="Select with custom dropdown"
    />
    </FetchingWrapper>
  );
};

export default CustomDropdownRenderSelect;
