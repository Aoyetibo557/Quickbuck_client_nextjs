import React, { useEffect } from 'react';
import DashLayout from '../../layouts/DashLayout'
import { Breadcrumb, Rate } from 'antd';
import DashHeader from '../../components/_dashboard/_header/DashHeader';
import {useSession} from 'next-auth/react';
import { useRouter } from 'next/router';


function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
          router.push('/authpage/login');
        }
    }, [router, status]);

    if (status === 'loading') {
        return <div>
            <h1>Loading...</h1>
        </div>;
    }

    if(status === 'authenticated')
        return (
            <div>
                <div>
                    <DashHeader />
                </div>
            </div>
        )
}

export default Home


Home.getLayout = function getLayout(page) {
  return (
    <DashLayout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      {page}
    </DashLayout>
  )
}