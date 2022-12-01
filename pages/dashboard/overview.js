import React, {useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashLayout from '../../layouts/DashLayout'
import { Breadcrumb } from 'antd';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import {AiTwotonePieChart} from 'react-icons/ai';
import { BsCashStack, BsClockHistory } from 'react-icons/bs';

import { Row, Col} from 'antd';
import OverviewCard from '../../components/_card/OverviewCard';
const card = [
  { icon: <HiOutlineSquares2X2 />, title: 'Total Tasks', percentage: '+10%', info: '50', amt: "", tagColor: "blue", tag: "Lifetime" },
  { icon: <AiTwotonePieChart color='red' />, title: 'Total Expenses', percentage: '+3%', amt: 1100,tagColor: "red", tag: "Lifetime" },
  { icon: <BsCashStack color='green' />, title: 'Total Earnings', percentage: '+5%', info: "", amt: 1000, tagColor: "green", tag: "Lifetime" },
  // add active days
  { icon: <BsClockHistory color='purple' />, title: 'Active Days', percentage: '', info: "25 days", amt: "", tagColor: "purple", tag: "Lifetime" },
]

export default function Overview() {
  const { data: session, status } = useSession();
  const router = useRouter();



  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/authpage/login');
    }
  }, [status]);


  if (status === 'loading') {
    return <div>
      <h1>Loading...</h1>
    </div>;
  }

  if(status === 'authenticated')
    return (
      <div className="site-card-wrapper">
        <div className="site-layout-content">
          <Row justify='start' >
            {card.map((item, index) => (
              <Col span={6} key={index}>
                <OverviewCard
                  icon={item.icon}
                  title={item.title}
                  percentage={item.percentage}
                  info={item?.info}
                  tag={item?.tag}
                  amt={item?.amt}
                  tagColor={item.tagColor}
                />
              </Col>
            ))}
          </Row>
        </div>

      </div>
    )
  

}


Overview.getLayout = function getLayout(page) {
  return (
    <DashLayout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
      </Breadcrumb>
      {page}
    </DashLayout>
  )
}