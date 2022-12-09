// create a dragable completed column list
import React from 'react';
import TaskCard from '../../taskcard/TaskCard';
import styles from "./styles.module.css";


function Completed({completedtasks}) {
  return (
    <div className={styles.column_container}>
      <div>
        <h3 className = {styles.column_title} >Completed <span className={styles.column_span}>({ completedtasks?.length}) </span> </h3>
      </div>
      <div className={styles.column_div}>
        {completedtasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Completed