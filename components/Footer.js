import Link from 'next/link';
import React from 'react';
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className={styles.footer_container}>
        <div className={styles.footer_div}>
            <h2 className={styles.footer_h2}>Company</h2>
            <ul className={styles.footer_ul}>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">About Us</Link>
                </li> 
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Press</Link>
                </li>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Careers</Link>
                </li>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Blog</Link>
                </li>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Terms &</Link>
                </li>
            </ul>
        </div>

        <div className={styles.footer_div}>
            <h2 className={styles.footer_h2}>Discover</h2>
            <ul className={styles.footer_ul}>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Become a Freelancer</Link>
                </li> 
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">All Services</Link>
                </li>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Elite Freelancer</Link>
                </li>
                <li className={styles.footer_li}>
                    <Link className={styles.footer_link} href="/">Help</Link>
                </li>
            </ul>
        </div>

        <div className={styles.footer_div}>
            <h2 className={styles.footer_h2}>Contact Us</h2>
            <div className={styles.contact_icons}>
                <span className={styles.icon}>
                    <FaFacebook /> 
                </span>
                <span className={styles.icon}>
                    <FaInstagram />
                </span>
                <span className={styles.icon}>
                    <FaGithub />
                </span>
            </div>

            <div>
                <p className={styles.footer_p}>
                    <a href="mailto:customerservice@quickbuck.com" className={styles.footer_span}>customerservice@quicbuck.com</a>
                </p>
                <p className={styles.footer_p}>
                    <a href="tel:18003324532" className={styles.footer_span}>1800-332-4532</a>
                </p>
                <p className={styles.footer_p}>
                    <span className={styles.footer_span}>420 Relaxation Point, Highpoint WY, 30402</span>
                </p>

                <p className={styles.footer_p}>
                   <span className={styles.footer_span}>
                     &copy; 2021 QuickBuck Inc. All rights reserved.
                   </span>
                </p>
               
            </div>
        </div>
    </div>
  )
}


