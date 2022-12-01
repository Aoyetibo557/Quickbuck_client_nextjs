import React from 'react';
import { Layout as LayoutContainer } from 'antd';
import  SideBar from '../components/_sidebar/SideBar'

const { Content } = LayoutContainer;

export default function Layout({children}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <LayoutContainer>
      <SideBar trigger={null} collapsed={collapsed} setCollapsed={setCollapsed} />
      <LayoutContainer 
        className="site-layout" 
        style={{ marginLeft: collapsed ? 80 : 200 }}
        
      >
        <Content
          className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 480,
              height: "79vh",
            }}
        >
          <div className='content'>
            
           
            {children}
          </div>
        </Content>
      </LayoutContainer>
    </LayoutContainer>
  )
}

