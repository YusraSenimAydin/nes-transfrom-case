import React from 'react';
import { Select, Tag } from 'antd';
import { usePosts } from '../hooks/usePosts'; 
import FetchingWrapper from './FetchingWrapper';

const ColorTagSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const [selectedItems, setSelectedItems] = React.useState([]);


  const colorMap = ['gold', 'green']; 

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const colorIndex = posts.findIndex(post => post.id === value) % colorMap.length;
    const color = colorMap[colorIndex];

    return (
      <FetchingWrapper isLoading={isLoading} error={error}>
      <Tag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
          maxWidth: '150px', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Tag>
      </FetchingWrapper>
    );
  };

  const options = posts.map(post => ({
    label: post.title,
    value: post.id,
  }));

  return (
    <div>
      <Select
        mode="multiple"
        tagRender={tagRender}
        value={selectedItems}
        onChange={setSelectedItems}
        placeholder="Select colors"
        options={options}
        allowClear
        showSearch
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default ColorTagSelect;
