import React, {useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {Row, Col } from 'antd';
import TaskCard from '../taskcard/TaskCard';
import { getUserCreatedJobs } from '../../../utils/userauth';
import NotFound from '../../_notfound/NotFound';



function MyjobBoard() {
    const [userJobs, setUserJobs] = useState([]);
  const {data: session} = useSession();

  useEffect(() => {
    const timeout = getUserCreatedJobs(session?.user?.name).then((data) => {
        setUserJobs(data.jobs);
    }).then(() => {
        console.clear();
        // console.log("userJobs",userJobs);
    }).catch((err) => {
        console.log(err);
    });

    return () => clearTimeout(timeout);
  }, []);

  return userJobs.length > 0 ? (
    <div>
        <Row 
            justify="start" 
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }} 
        >
            <Col className="gutter-row" span={6}>
                {userJobs.map((job) => (
                    <TaskCard key={job.jobId} task={job} />
                ))}
            </Col>
        </Row>
    </div>
  ) : (
    <div>
        <NotFound />
    </div>
  )
}

export default MyjobBoard