import React from 'react'
import TaskCard from '../../taskcard/TaskCard';
import styles from "./styles.module.css"
// create task array with the fields, id, title, description, date, location, price, author, tags[]
const tasks = [
    {
        id: 1,
        title: 'Snow Removal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: '10/10/2020',
        location: '98 Canal Street, Staten Island, New York 10304',
        price: '$100',
        author: 'Sammy Doe',
        tags: ['tag1', 'tag2']
    },
    {
        id: 2,
        title: 'Furniture Assembly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: '08/03/2023',
        location: '101st Ave, Jamaica, NY 11419',
        price: '$100',
        author : 'Fred James',
        tags: ['tag1', 'tag2']
    },
    {
        id: 3,
        title: 'Christmas Decorations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: '10/10/2020',
        location: '2309 3rd Ave, New York, NY 10035',
        price: '$100',
        author : 'John Doe',
        tags: ['tag1', 'tag2']
    },
    {
        id: 4,
        title: 'Yard Work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: '10/10/2020',
        location: '2309 3rd Ave, New York, NY 10035',
        price: '$190',
        author : 'John Doe',
        tags: ['tag1', 'tag2']
    }
]

function NewRequest({ newrequeststasks}) {
  return (
    <div className={styles.column_container}>
        <div>
            <h3 className = {styles.column_title} >New Requests <span className={styles.column_span}>({newrequeststasks?.length})</span> </h3>
        </div>
        {newrequeststasks?.map((task) => (
            <TaskCard task={task} key={task.id} />
        ))}
    </div>
  )
}

export default NewRequest