import React from 'react';
import { Tag } from 'antd';
import styles from './OverviewCard.module.css';

const OverviewCard = ({icon, title, percentage,info, tag, amt, tagColor}) => (
  <>
    <div className={styles.card_wrapper}>
        <div className={styles.card}>
            <div className={styles.card_top}>
                <div className={styles.card_icon}>{icon}</div>
                <div className={styles.card_percentage}>
                    <Tag color={tagColor}>{percentage}</Tag>
                </div>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_content_amt}>
                    {/* if the info prop is empty show the amt else show the info */}
                    {info ? info : <span>${amt}</span>}
                </div>
                <div className={styles.card_title}>
                    <span>
                        {title}
                    </span>
                    <Tag color="lime">{tag}</Tag>
                </div>
            </div>
        </div>
    </div>
 
  </>
);
export default OverviewCard;