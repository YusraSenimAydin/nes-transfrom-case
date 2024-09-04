import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts'; 
import { Spin, Alert } from 'antd';

const SelectableWithCount = () => {
     const { data: posts = [], isLoading, error } = usePosts();
     const [selectedItems, setSelectedItems] = useState([]);

     if (isLoading) return <Spin />;
     if (error) return <Alert message="Error fetching posts" type="error" />;

     const filteredOptions = posts
          .map(post => ({ label: post.title, value: post.id }))
          .filter(option => !selectedItems.includes(option.value));

     const handleChange = value => {
          setSelectedItems(value);
     };

     const renderOptionLabel = label => (
          <span>{label}</span>
     );

     return (
          <div>
               <CustomSelect
                    mode="multiple"
                    options={filteredOptions}
                    value={selectedItems}
                    onChange={handleChange}
                    placeholder="Select items"
                    allowClear
                    showSearch
                    optionRender={renderOptionLabel}
                    dropdownRender={menu => (
                         <div>
                              {menu}
                              <div style={{ padding: 8 }}>
                                   <span>{selectedItems.length} / {filteredOptions.length + selectedItems.length}</span>
                              </div>
                         </div>
                    )}
               />
          </div>
     );
};

export default SelectableWithCount;
