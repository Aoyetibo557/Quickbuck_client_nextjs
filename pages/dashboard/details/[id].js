import React from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashLayout from '../../../layouts/DashLayout'
import { Breadcrumb } from 'antd';



export default function TaskDetails() {
    // get the task id from the url
    const id = window.location.pathname.split("/")[2];
    console.log(id)
  return (
    <div>

    </div>
  )
}


TaskDetails.getInitialProps = async (ctx) => {
    const { id } = ctx.query;
    console.log(id)
    return { id };
}


TaskDetails.getLayout = function getLayout(page) {
  return (
    <DashLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Tasks</Breadcrumb.Item>
            <Breadcrumb.Item>Details</Breadcrumb.Item>
        </Breadcrumb>
        {page}
    </DashLayout>
  )
}