import React from 'react'
import dayjs from 'dayjs';
import styles from "./Dashheader.module.css";
import { useSession } from 'next-auth/react';

function DashHeader() {
    const { data: session, status } = useSession();
  return (
    <div className={styles.dashheader_container}>
        <div>
            <p className={styles.dashheader_date}>
                {dayjs().format('dddd, MMMM DD, YYYY')}
            </p>

            <p className={styles.dashheader_greeting}>
                {dayjs().format('A') === 'AM' ? 'Good Morning' : 'Good evening'}, {session?.user?.name}
            </p>
        </div>
    </div>
  )
}

export default DashHeader