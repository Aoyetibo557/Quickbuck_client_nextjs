import React from 'react'
import Header from './header'

export default function Layout({children}) {
  return (
    <div>
        <Header />
        <div className='content'>
            {children}
        </div>
    </div>
  )
}
