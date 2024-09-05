import React, { useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const SelectableWithCount = () => {
     const { data: posts = [], isLoading, error } = usePosts();
     const [selectedItems, setSelectedItems] = useState([]);

     const filteredOptions = posts
          .map(post => ({ label: post.title, value: post.id }))
          .filter(option => !selectedItems.includes(option.value));

     const handleChange = value => {
          setSelectedItems(value);
     };

     return (
          <>
               <FetchingWrapper isLoading={isLoading} error={error}>
                    <CustomSelect
                         mode="multiple"
                         options={filteredOptions}
                         value={selectedItems}
                         onChange={handleChange}
                         placeholder="Select items"
                         allowClear
                         showSearch
                         optionLabelProp="label"
                         dropdownRender={menu => (
                              <div>
                                   {menu}
                                   <div style={{ padding: 8 }}>
                                        <span>{selectedItems.length} / {filteredOptions.length + selectedItems.length}</span>
                                   </div>
                              </div>
                         )}
                    />
               </FetchingWrapper>
          </>
     );
};

export default SelectableWithCount;
