import React from 'react'
import StepCard from './StepCard';
import styles from "../styles/Home.module.css";
import temp from "../images/test.jpg";
import { steps } from "../utils/steps";

export const getStaticProps = async () => {
  return {
      props: {
          steps: steps
      }
  }
}



export default function Steps({steps}) {
  return (
    <div className={styles.steps}>
       
        {steps.map((step, index) => (
            <StepCard
                key={index}
                icon={step.icon[0]}
                title={step.title}
                description={step.description}
            />
        ))}
    </div>
  )
}
