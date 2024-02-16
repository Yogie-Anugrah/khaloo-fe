'use client';
import { TabsProps, theme } from 'antd';
const {
  token: { colorBgContainer },
} = theme.useToken();
const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
  <div>
    <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
  </div>
);

export default renderTabBar;
