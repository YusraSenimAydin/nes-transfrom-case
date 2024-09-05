import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import FetchingWrapper from './FetchingWrapper';
import './index.css';

const PopupStyledSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        options={options}
        placeholder="Select with styled popup"
        popupClassName="custom-popup"          
        popupMatchSelectWidth={true}          
      />
    </FetchingWrapper>
  );
};

export default PopupStyledSelect;
