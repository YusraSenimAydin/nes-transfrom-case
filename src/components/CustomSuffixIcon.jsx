import React from 'react';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { CaretRightOutlined, CommentOutlined } from '@ant-design/icons';
import FetchingWrapper from './FetchingWrapper';


const CustomSuffixIcon = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  const options = posts.map(post => ({
    label: post.title,
    value: post.id,
    icon: <CommentOutlined />
  }));


  const optionRender = (option) => (
    <div className="flex items-center">
      {option.icon && <span className="mr-2">{option.icon}</span>}
      {option.label}
    </div>
  );

  return (
    <FetchingWrapper isLoading={isLoading} error={error}>
      <CustomSelect
        options={options}
        suffixIcon={<CaretRightOutlined />}
        placeholder="Select an option"
        optionRender={optionRender}
      />
    </FetchingWrapper>
  );
};

export default CustomSuffixIcon;
