import React, { useRef, useEffect, forwardRef } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert, Button } from 'antd';


const CustomSelectWithRef = forwardRef((props, ref) => <CustomSelect {...props} forwardedRef={ref} />);

const AutoFocusSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();
  const selectRef = useRef(null);

  const options = posts.map(post => ({ label: post.title, value: post.id }));

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus(); 
    }
  }, []);

  const handleBlur = () => {
    if (selectRef.current) {
      selectRef.current.blur(); 
    }
  };

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  return (
    <>
      <CustomSelect
        ref={selectRef}
        options={options}
        placeholder="Select an option"
        onClear={() => console.log('Selection cleared')}
      />
      <Button onClick={handleBlur} style={{ marginTop: '10px' }}>
        Remove Focus (Blur)
      </Button>
    </>
  );
};

export default AutoFocusSelect;