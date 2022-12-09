import React from 'react';
import TaskCard from '../../taskcard/TaskCard';
import styles from "./styles.module.css";



function Inprogress({inprogresstasks}) {
  return (
    <div className={styles.column_container}>
      <div>
        <h3 className = {styles.column_title} >In Progress <span className={styles.column_span}>({inprogresstasks?.length}) </span></h3>
      </div>
      {inprogresstasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Inprogress