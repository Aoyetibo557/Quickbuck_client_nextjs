import React from 'react'
import { Layout, Menu, Popconfirm, Button } from 'antd';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';
import Link from 'next/link'


import {
  UserOutlined,
  SettingOutlined,
  DollarOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SideBar({ trigger, collapsed, setCollapsed }) {
  // move item with the key of 5 to the bottom of the menu
  
  return (
    <Sider
     
      trigger={trigger} 
      collapsible 
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        padding: "10px",
        // backgroundColor: "#fff",
      }}
    >
        <div className="logo">
          <h3>QuickBuck Freelancer</h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HiOutlineSquares2X2 />,
              label: <Link href="/dashboard/overview">Overview</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label:<Link href="/dashboard/tasks">Tasks</Link>,
              Link: '/dashboard/tasks',
            },{
              key: '3',
              icon: <BsChatDots />,
              label: <Link href="/dashboard/chat">Chat</Link>,
            },
            {
              key: '4',
              icon: <DollarOutlined />,
              label: <Link href="/dashboard/payments">Payments</Link>,
            },{
              key: '7',
              icon: collapsed ? <AiOutlineMenuUnfold  /> : <AiOutlineMenuFold  />,
              label: "Hide Sidebar",
              onClick: () => setCollapsed(!collapsed)
            },
            
          ]}
        />
      </Sider>
  )
}

export default SideBar