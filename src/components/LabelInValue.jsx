import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';


const LabelInValue = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
    <CustomSelect
      options={options}
      labelInValue
      onChange={value => console.log('Selected:', value)}
      placeholder="Select with label in value"
    />
    </FetchingWrapper>
  );
};

export default LabelInValue;
