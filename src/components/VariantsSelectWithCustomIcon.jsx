import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { ForwardOutlined, CaretRightOutlined, DoubleRightOutlined } from '@ant-design/icons';
import FetchingWrapper from './FetchingWrapper';

const VariantsSelectWithCustomIcon = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  return (
    <>
      <FetchingWrapper isLoading={isLoading} error={error}>

        <CustomSelect
          options={options}
          suffixIcon={<ForwardOutlined />}
          variant=" outlined"
          placeholder="Select an option-Outlined"
        />
        <CustomSelect
          options={options}
          suffixIcon={<CaretRightOutlined />}
          variant=" filled"
          placeholder="Select an option-Filled"
        />
        <CustomSelect
          options={options}
          suffixIcon={<DoubleRightOutlined />}
          variant=" Borderless"
          placeholder="Select an option-Borderless"
        />
      </FetchingWrapper>
    </>
  );
};

export default VariantsSelectWithCustomIcon;
