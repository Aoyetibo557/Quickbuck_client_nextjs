import React, { useEffect } from 'react'
import DashLayout from '../../layouts/DashLayout'
import { Breadcrumb } from 'antd';



export default function Tasks() {
  return (
    <div>Welcome to the Tasks Page</div>
  )
}


Tasks.getLayout = function getLayout(page) {
    return (
        <DashLayout>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Tasks</Breadcrumb.Item>
            </Breadcrumb>
            {page}
        </DashLayout>
    )
    }