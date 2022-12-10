import React from 'react';
import {Avatar, Dropdown, Image, Space, Layout as LayoutContainer } from 'antd';
import styles from "../styles/DashboardLayout.module.css";
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import  SideBar from '../components/_sidebar/SideBar'
import { AiOutlineUser, AiOutlineSetting, AiOutlineLogin} from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const {Header, Content } = LayoutContainer;

const items = [
  {
    key: '1',
    label : <Link href="/dashboard/profile">Profile</Link>,
    icon: <AiOutlineUser />

  },
  {
    key: '2',
    label : <Link href="/dashboard/settings">Settings</Link>,
    icon: <AiOutlineSetting />
  },{
    key: '3',
    label : <a onClick={() => signOut()}>Logout</a>,
    icon: <AiOutlineLogin />,
  }
]

export default function Layout({children}) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <LayoutContainer>
     
      <SideBar trigger={null} collapsed={collapsed} setCollapsed={setCollapsed} />
      <LayoutContainer 
        className="site-layout" 
        style={{
          marginLeft: collapsed ? 80 : 200 }}
      >
        <Header className={styles.site_layout_header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}


          <Dropdown 
              menu={{items}}
              trigger={['click']}
          > 
            <a onClick={e => e.preventDefault()}>
              <Space>
                <Avatar title="menu"
                  size={{
                    xs: 24,
                    sm: 28,
                    md: 30,
                    lg: 44,
                    xl: 50,
                    xxl: 60,
                  }}
                    src="https://avatars.dicebear.com/api/male/sfwe.svg"
                  // icon={<AntDesignOutlined />}
                  // src= {
                  //   <Image
                  //     src="https://avatars.dicebear.com/api/male/78sdf.svg"
                  //     alt="avatar"
                  //   />
                  // }
                  
                />
                <DownOutlined />
              </Space>
              
            </a>
          </Dropdown>
          
         
        </Header>
        <Content
          className={styles.site_layout_background}
        >
          <div className='content'>
            
           
            {children}
          </div>
        </Content>
      </LayoutContainer>
    </LayoutContainer>
  )
}

