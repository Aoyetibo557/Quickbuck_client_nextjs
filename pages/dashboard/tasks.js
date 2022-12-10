import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashLayout from '../../layouts/DashLayout'
import { Breadcrumb } from 'antd';
import Board from '../../components/_task/board/Board';



export default function Tasks() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/authpage/login');
        }
    }, [router, status]);

    if (status === 'loading') {
        return <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh',

            }}
        >
            <h3
                style={{
                    color: '#1890ff',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                }}
            >Loading...</h3>
        </div>;
    }

    if(status === 'authenticated') {
        return (
            <div>
                <Board />
            </div>
        )
    }
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