import Link from 'next/link'
import React from 'react';
import styles from '../styles/Tag.module.css'

function Tag({title, link}) {
  return (
    <div>
        <Link className={styles.tag} href={link}>
            {title}
        </Link>
    </div>
  )

}

export default Tag