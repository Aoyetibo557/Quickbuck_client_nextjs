import React from 'react';
import Image from 'next/image';
import styles from "../styles/Stepcard.module.css";

function StepCard({icon, title, description}) {
  return (
    <div className={styles.stepcard_container}>
        <div className={styles.stepcard_icondiv}>
            <Image 
                src={icon} 
                alt="icon"
                width={90}
                height={90} 
                className={styles.stepcard_icon} />
        </div>
        <div className={styles.stepcard_textdiv}>
            <h4 className={styles.stepcard_h4}>{title}</h4>
            <p className={styles.stepcard_p}>{description}</p>
        </div>
    </div>
  )
}

export default StepCard