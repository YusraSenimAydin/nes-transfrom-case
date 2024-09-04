import React, { useState } from 'react';
import { Radio, Spin, Alert } from 'antd';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';

const PlacementCustomization = () => {
  const [placement, setPlacement] = useState('topLeft');
  const { data: posts = [], isLoading, error } = usePosts();

  const handlePlacementChange = (e) => {
    setPlacement(e.target.value);
  };

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map((post) => ({
    label: post.title,
    value: post.id,
  }));

  return (
    <>
      <Radio.Group value={placement} onChange={handlePlacementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <CustomSelect
        options={options}
        popupMatchSelectWidth={false}
        placement={placement}
        placeholder="Select a post"
      />
    </>
  );
};

export default PlacementCustomization;
