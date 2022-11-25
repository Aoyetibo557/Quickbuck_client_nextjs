import React from 'react'
import Image from 'next/image';
import styles from "../styles/Profilecard.module.css";
import { BsCheck2Circle, BsStar } from "react-icons/bs";


function ProfileCard({name, rating, image, description, tasknumber, skills}) {
  return (
    <div className={styles.profilecard}>
        <div className={styles.profile_card}>
            <div className={styles.profile_card_top}>
               <div >
                    <Image
                        className={styles.profile_card_img} 
                        src={image} width={10} height={20} 
                        alt = "Profile Picture" 
                    />
               </div>

                 <div className={styles.profile_card_content}>
                    <h2 className={styles.profile_card_name}>{name}</h2>
                    <span className={styles.profile_card_rating}> <BsStar /> {rating}% positive reviews</span>
                    <span className={styles.profile_card_tasknumber}> <BsCheck2Circle /> {tasknumber} completed tasks</span>
                </div>
            </div>
           
            <div className={styles.profile_card_skills}>
                <p className={styles.profile_card_skills_title}>Featured Skills</p>
                <ul className={styles.profile_card_skills_list}>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.profile_card_description}>
                <p className={styles.profile_card_description_title}>About Me</p>
                <p className={styles.profile_card_description_text}>{description}</p>
            </div>
        </div>
    </  div>
  )
}

export default ProfileCard