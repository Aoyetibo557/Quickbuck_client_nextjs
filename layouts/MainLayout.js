import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header'


export default function Layout({children}) {
  return (
    <div>
      <Header />
      <div className='content'>
          {children}
      </div>
      <Footer />
    </div>
  )
}
