import Link from 'next/link'
import React from 'react';
import styles from '../styles/Header.module.css'
import { signIn } from 'next-auth/react';


export default function Header() {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">QuickBuck</Link>
        <nav className={styles.nav}>
            <ul className={styles.nav_ul}>
                <li>
                    <Link className={styles.nav_li} href="/services">Services</Link>
                </li>
                <li>
                    <Link className={styles.nav_li} href="/locations">Locations</Link>
                </li>
                <li>
                    <button 
                        className={styles.nav_li_btn}
                        onClick={() => {
                            signIn();
                        }}
                    >Sign up / Log in</button>
                </li>
            </ul>

            <button className={styles.nav_btn}>
                Become a Freelancer
            </button>
        </nav>
       
    </div>
  )
}
