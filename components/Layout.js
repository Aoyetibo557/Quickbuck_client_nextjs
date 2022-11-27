import React from 'react'
import Footer from './Footer'
import Header from './header'

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
