import React from 'react';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import styles from "../styles/Testimonialcard.module.css";


function TestimonialCard({name, image, rating, testimony, servicetype}) {
  return (
    <div className={styles.testimonial_card}>
        <div className={styles.testimonial_card_left}>
            <Image
                className={styles.testimonial_card_img}
                src={image}
                alt = "Profile Picture"
            />
        </div>

        <div>
            <div className = {styles.testimonial_card_info}>
                <span className={styles.testimonial_card_name}>{name}. </span>
                 <span className={styles.testimonial_card_rating}>
                    <Rating size='small' name="half-rating" defaultValue={rating} precision={0.5} readOnly />
                 </span>
            </div>

            <p className={styles.testimonial_card_testimony}>{`"${testimony}"`}</p>
            <p className={styles.testimonial_card_servicetype}>{servicetype}</p>
        </div>
    </div>
  )
}

export default TestimonialCard