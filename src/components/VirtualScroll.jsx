import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const VirtualScroll = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        options={options}
        virtual={false}
        placeholder="Select without virtual scroll"
      />
    </FetchingWrapper>
  );
};

export default VirtualScroll;

