import React from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import { usePosts } from '../hooks/usePosts';
import { Spin, Alert } from 'antd';

const CustomDropdownStyledSelect = () => {
  const { data: posts = [], isLoading, error } = usePosts();


  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching posts" type="error" />;

  const options = posts.map(post => ({
    label: post.title,
    value: post.id,
  }));

  return (
    <CustomSelect
      options={options}
      dropdownStyle={{ 
        background: '#fff', 
        padding: '8px', 
        borderRadius: '0.375rem', 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' 
      }}
      optionRender={(option) => (
        <div className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors">
          <div className="font-semibold text-gray-800 text-sm">
            {option.label}
          </div>
        </div>
      )}
      dropdownRender={(menu) => (
        <div className="bg-gray-50 rounded-md shadow-lg overflow-hidden">
          {menu}
          <div className="p-3 border-t border-gray-200 text-center">
            <a 
              href="https://www.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline font-semibold"
            >
              Visit Google
            </a>
          </div>
        </div>
      )}
      placeholder="Select an option"
    />
  );
};

export default CustomDropdownStyledSelect;