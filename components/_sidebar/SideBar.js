import React from 'react'
import { Layout, Menu, Divider } from 'antd';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';
import Link from 'next/link'


import {
  UserOutlined,
  SettingOutlined,
  DollarOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SideBar({ trigger, collapsed, setCollapsed }) {
  
  
  return (
    <Sider
      trigger={trigger} 
      collapsible 
      collapsed={collapsed}
      style={{
        width: 300,
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
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <h3
            style={{
              color: "#fff",
              marginLeft: collapsed ?"0" : "15px",
              textAlign: "center",
              fontSize: collapsed ? "13px" : "1.7rem",
              fontWeight: "500",
            }}
          >QuickBuck</h3>
         
        </div>
        <Divider style={{ 
          backgroundColor: "#ccc",
          margin: "10px 0" }} />
        <Menu
          theme="dark"
          mode="inline"
          style={{
            height: "100%",
            marginTop:30
          }}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FiHome />,
              label: <Link href="/dashboard/home">Home</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label:<Link href="/dashboard/tasks">Tasks</Link>,
              Link: '/dashboard/tasks',
            },{
              key: '3',
              icon: <MdOutlineTaskAlt />,
              label: <Link href="/dashboard/myjobs">My Jobs</Link>,
            },{
              key: '4',
              icon: <BsChatDots />,
              label: <Link href="/dashboard/chat">Chat</Link>,
            },
            {
              key: '5',
              icon: <DollarOutlined />,
              label: <Link href="/dashboard/payments">Payments</Link>,
            },
            
          ]}
        />
      </Sider>
  )
}

export default SideBar