import React from 'react';
import { Spin, Alert } from 'antd';

const FetchingWrapper = ({ isLoading, error, children }) => {
     if (isLoading) {
          return <Spin />;
     }
     if (error) {
          return <Alert message="Error fetching data" type="error" />;
     }

     return <>{children}</>;
};

export default FetchingWrapper;
