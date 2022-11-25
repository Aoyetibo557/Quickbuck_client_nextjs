import Head from 'next/head'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard';
import styles from "../styles/Home.module.css";
import temp from "../images/test.jpg";
import Testimonials from '../components/Testimonials';
import Image from 'next/image';
import Image1 from "../images/relax1.jpg";
import Image2 from "../images/relax2.jpg";

import StepIcon1 from "../images/stepicon1.svg"
import StepIcon2 from "../images/stepicon2.svg"
import StepIcon3 from "../images/stepicon3.svg"
import StepIcon4 from "../images/stepicon4.svg"
import Steps from '../components/Steps';

const profiles = [
  {name: "John Doe", rating: 100, description: "I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development. I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development.", tasknumber: 10, skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]},
  {name: "Jane Doe", rating: 60, description: "I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development. I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development.", tasknumber: 10, skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]},
  {name: "John Doe", rating: 70, description: "I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development. I am a professional web developer with 5 years of experience. I have worked on many projects and have a lot of experience in web development.", tasknumber: 10, skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]},
]

const testimonials = [
  {name: "Casey W", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 5, servicetype: "Web Development"},
  {name: "White T", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4.5, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
    {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},
  {name: "Ezra J", testimony: "Loved this platform. I was able to get my project done in no time. I will definitely use this platform again.", rating: 4, servicetype: "Web Development"},

]


// create an array object calles steps, with the keys: icon, title, description
const steps = [
  {icon: [StepIcon1], title: "Create an Account", description: "Create an account with us and get started with your project."},
  {icon: [StepIcon2], title: "Select a Freelancer", description: "Choose your freelancer by reviews, skills and price."},
  {icon: [StepIcon4], title: "Post your Task", description: "Give as much details as possible to get the best results."},
  {icon: [StepIcon3], title: "Get it Done", description: "Chat, pay, tip and review your freelancer through one platform."},
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QuickBuck</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
         <Banner />
        <section className={styles.section_container}>
          <div className={styles.container_topdiv}>
            <div className={styles.topdiv_div}>
              <h4 className={styles.topdiv_h4}>Our Freelancers are expereinced. They are ready to make your everyday life easier.</h4>
              <p className={styles.topdiv_p}>
                Get back time for what you love without breaking the bank.
              </p>
            </div>

            <div className={styles.topdiv_image_container}>
              <Image 
                src={Image1}
                alt="Picture of the author"
               className={styles.topdiv_image}
              />
              <Image 
                src={Image2}
                alt="Picture of the author"
               className={styles.topdiv_image}
              />
             
            </div>
          </div>

          <div className={styles.steps_container}>
            <div>
              <h2 className={styles.steps_h2}>How it works</h2>
              <p className={styles.steps_p}>{`It's easy to get started. Just follow these simple steps.`}</p>
            </div>
            <Steps 
              steps={steps}
            />
          </div>

          <div className={styles.testimonials}>
            <div>
              <Testimonials 
                testimonials={testimonials}
              />
            </div>
          </div>
{/* 
          <div className={styles.profile_container}>
            <div className={styles.profile_div}>
              {profiles.map((profile, index) => (
                <ProfileCard 
                  key={index}
                  name={profile.name}
                  rating={profile.rating}
                  image={temp}
                  description={profile.description}
                  tasknumber={profile.tasknumber}
                  skills={profile.skills}
                />
              ))} 
            </div>
          </div> */}
       
        </section>
      </main>

    </div>
  )
}
