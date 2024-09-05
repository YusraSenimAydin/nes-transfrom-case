import React, { useEffect, useRef } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const AutoFocusSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const selectRef = useRef(null);

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus(); 
      console.log('CustomSelect is focused automatically');
    }
  }, []);

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        ref={selectRef}
        options={options}
        placeholder="Select an option"
        autoFocus 
        
      />
    </FetchingWrapper>
  );
};

export default AutoFocusSelect;
