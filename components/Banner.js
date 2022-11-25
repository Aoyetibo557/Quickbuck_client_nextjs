import React from 'react';
import styles from "../styles/Banner.module.css";
import Image from 'next/image'
import bg from "../images/test.jpg";
import Tag from './tag';


const tags = [
  {title: "Help Moving", link: "/"},
  {title: "House Repairs", link: "/"},
  {title: "Yard Work", link: "/"},
  {title: "Furniture Assembly", link: "/"},
]

function Banner() {
  return (
    <div>
        <section className={styles.banner}>
          <div className={styles.banner_img_container}>
            <Image 
              className={styles.banner_img}
              src={bg}
              alt = "Picture of man helping someone"
            />
            <Image 
              className={styles.banner_img}
              src={bg}
              alt = "Picture of man helping someone"
            />

            <Image 
              className={styles.banner_img}
              src={bg}
              alt = "Picture of man helping someone"
            />
            <Image 
              className={styles.banner_img}
              src={bg}
              alt = "Picture of man helping someone"
            />
          </div>

          <div className={styles.banner_content}>
            <h2 className={styles.banner_title}>{`Do you have a task you just don't have the time or skill to get done?`}</h2>
            <span className={styles.line}></span>
            <p className={styles.banner_text}>{`Don't Worry, We can help you get it done!`}</p>

            <div className={styles.banner_input_container}>
              <div className={styles.input_div}>
                <input type="text" name="banner_searchbar" placeholder='I need help with...' className={styles.banner_input} />
                <button type='button' className={styles.input_btn}>
                    Get help today
                </button>
              </div>

              <div className={styles.tag_container}>
                {tags.map((tag, index) => (
                  <Tag key={index} title={tag.title} link={tag.link} />
                ))}
              </div>
            </div>
          </div>
       </section>
    </div>
  )
}

export default Banner