import React from 'react'

export default function AboutUs({aboutUs}) {
  return (
    <div ref={aboutUs} id='aboutUs' style={{height: '100%'}}>
      <h1 className='main-h1'>About Us</h1>
    </div>
  )
}
