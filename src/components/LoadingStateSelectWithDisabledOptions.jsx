import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';

const LoadingStateSelectWithDisabledOptions = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <>
      <FetchingWrapper isLoading={isLoading} error={error}>
        <CustomSelect
          options={options}
          loading
          placeholder="Loading..."
        />
        <CustomSelect
          options={options}
          loading
          disabled
          placeholder="Loading with Disable..."
        />
      </FetchingWrapper>
    </>
  );
};

export default LoadingStateSelectWithDisabledOptions;
