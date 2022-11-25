import Link from 'next/link'
import React from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">QuickBuck</Link>
        <nav className={styles.nav}>
            <ul className={styles.nav_ul}>
                <li>
                    <Link className={styles.nav_li} href="/about">Services</Link>
                </li>
                <li>
                    <Link className={styles.nav_li} href="/contact">Locations</Link>
                </li>
                <li>
                    <Link className={styles.nav_li} href="/authpage/login">Sign up / Log in</Link>
                </li>
            </ul>

            <button className={styles.nav_btn}>
                Become a Freelancer
            </button>
        </nav>
       
    </div>
  )
}
