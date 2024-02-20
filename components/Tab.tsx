import React from 'react';
import { Tabs as AntdTabs } from 'antd';

interface TabsProps extends React.ComponentProps<typeof AntdTabs>{
  // Add any additional props you need for your component
}

const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <AntdTabs style={{ fontFamily: "'__Poppins_b809fa', '__Poppins_Fallback_b809fa'"}} {...props}>
      {/* Add your tab content here */}
    </AntdTabs>
  );
};

export default Tabs;
