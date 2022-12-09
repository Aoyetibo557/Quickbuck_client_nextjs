import React,{ useState, useEffect} from 'react'
import DashLayout from '../../layouts/DashLayout'
import {Row, Col, Card, Breadcrumb } from 'antd';
import { getUserCreatedJobs } from '../../utils/userauth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import TaskCard from '../../components/_task/taskcard/TaskCard';
import MyjobBoard from '../../components/_task/board/MyjobBoard';


export default function MyJobs() {
    const {data: session, status} = useSession();

    const router = useRouter();


    useEffect(() => {
        if(status === 'unauthenticated') {
            router.push('/authpage/login');
        }
        
    }, [router, status]);

    if(status === 'loading') {
        return <div>
            <h1>Loading...</h1>
        </div>;
    }

    if(status === 'authenticated') {
        return (
            <div>
                <MyjobBoard />
            </div>
        )
    }
}


MyJobs.getLayout = function getLayout(page) {
  return (
    <DashLayout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>My Jobs</Breadcrumb.Item>
      </Breadcrumb>
      {page}
    </DashLayout>
  )
}
