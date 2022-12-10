import React from 'react';
import { BsInboxes } from 'react-icons/bs';

function NotFound() {
  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            color: '#ccc',
        }}
    >
        <BsInboxes size={90} />
        <p 
            style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginTop: '1rem',
            }}
        >No Data Found!</p>

    </div>
  )
}

export default NotFound