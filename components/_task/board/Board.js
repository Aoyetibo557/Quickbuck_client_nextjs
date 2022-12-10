import React,{ useEffect, useState} from 'react'
import NewRequest from './columns/NewRequest'
import Inprogress from './columns/Inprogress'
import Completed from './columns/Completed'
import styles from './Board.module.css'
import { getUserJobs } from '../../../utils/userauth'
import { useSession } from 'next-auth/react'
import NotFound from '../../_notfound/NotFound'

function Board() {
  // the tasks will be passed in as props, and the task will be passed to each colum based on thier status
  const [tasks, setTasks] = useState([]);
  const {data: session} = useSession();

  useEffect(() => {
   getUserJobs(session?.user?.username).then((data) => {
      setTasks(data)
    })
    .then(() => {
      // console.log(tasks)
    })
    .catch((err) => {
      console.log(err)
    })
   
  }, [])


  // create a filter function to filter the tasks based on their status: "active or new request", "in progress", "completed"
  const filterTasks = (status) => {
    return tasks?.filter((task) => task.jobstatus === status)
  }


  return tasks.length > 0 ? (
    <div className={styles.board_container}>
      <NewRequest newrequeststasks={filterTasks("active")} />
      <Inprogress inprogresstasks={filterTasks("in progress")} />
      <Completed completedtasks={filterTasks("completed")} />
    </div>
  ) : (
    <div>
      <NotFound />
    </div>
  )
}

export default Board