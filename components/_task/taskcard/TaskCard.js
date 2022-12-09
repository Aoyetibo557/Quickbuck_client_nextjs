import React from 'react';
import styles from './Taskcard.module.css';
import { Dropdown, Space, Tag } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import {HiOutlineExternalLink} from 'react-icons/hi';
import Link from 'next/link';
import { useSession } from 'next-auth/react';




// create a truncate function to truncate the description
const truncate = (str, n = 145) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};


// create a function that creates random colors for the tags
const getRandomColor = () => {
    const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', 'blue', 'magenta', 'red', 'green', 'orange', 'purple', 'cyan', 'gold', 'lime', 'pink', 'brown', 'grey', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// create a function to format the date to a readable format ex: Wednesay, October 10, 2020
const formatDate = (date = new Date()) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Date(date).toLocaleDateString([], options)
}

function TaskCard({task}) {
    const {data: session} = useSession();

    const items = [
    {
        key: '1',
        label : 'Edit'
    },
    {
        key: '2',
        label : 'Delete'
    },
    {
        key: '3',
        label : <Link href={`/dashboard/details/${task.jobId}`}>View</Link>
    },
    {
        key: '4',
        label : 'Archive'
    }
]


  return (
    <div className={styles.taskcard_container}>
        <div className={styles.taskcard_header_container}>
            <div className={styles.taskcard_header}>
                <div className={styles.taskcard_tags}>
                    {/* {task.tags.map((tag) => (
                        <Tag
                            color={getRandomColor()}
                            key={tag}
                        >
                            {tag}
                        </Tag>
                    ))} */}
                    {task.tags.split(',')[0] && <Tag color={getRandomColor()}>{task.tags.split(',')[0]}</Tag>}
                    {task.tags.split(',')[1] && <Tag color={getRandomColor()}>{task.tags.split(',')[1]}</Tag>}
                    
                </div>
                <div className={styles.taskcard_menu}>
                    <div>
                        <Dropdown 
                            menu={{items}}
                            trigger={['click']}
                        > 
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <BsThreeDotsVertical className={styles.taskcard_menu_dot} />
                                </Space>
                            </a>

                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className={styles.taskcard_date_location}>
                <div className={styles.taskcard_date}>{formatDate(task?.date) }</div>
                <div className={styles.taskcard_location}>
                    <GrLocation className={styles.taskcard_location_icon} />
                    {task.location}
                </div>
            </div>
        </div>
       
        <div className={styles.taskcard_body}>
           <div className={styles.taskcard_body_top}>
                <div className={styles.taskcard_title}>
                    {task.title}
                </div>

                <div className={styles.taskcard_price}>
                    {/* if is awhole number add .00 otherwise leave as*/}
                    {task.price % 1 === 0 ? `$${task.price}.00` : `$${task.price}`}
                    
                </div>
           </div>
            <div className={styles.taskcard_description}>
                {truncate(task.description)}
            </div>            
           
        </div>

        <div className={styles.taskcard_author}>
            {task.author}
            
            <Link title="Open Details" href={`/dashboard/details/${task.jobId}`} passHref>
                <HiOutlineExternalLink className={styles.taskcard_link_icon} />
            </Link>
        </div>

        {/* if task.status is === "active" show two buttons, accept or decline */}
        {/* if task.status is === "accepted" show one button, complete */}
        {/* if task.status is === "completed" show one button, review */}

        {task.jobstatus === "active" && task.author !== session?.user?.name &&  (
            <div className={styles.taskcard_buttons}>
                <button className={styles.taskcard_btn_accept}>Accept</button>
                <button className={styles.taskcard_btn_decline}>Decline</button>
            </div>
        )}

        {task.jobstatus === "in progress" && task.author !== session?.user?.name && (
            <div className={styles.taskcard_buttons}>
                <button className={styles.taskcard_btn_complete}>Complete</button>
            </div>
        )}

        {task.jobstatus === "completed" && task.author !== session?.user?.name && (
            <div className={styles.taskcard_buttons}>
                <button className={styles.taskcard_btn_review}>Review</button>
            </div>
        )}

    </div>
  )
}

export default TaskCard