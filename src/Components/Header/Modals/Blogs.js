import React from 'react'
import './Styles/Blogs.css'

export default function Blogs({blogsRef}) {
  return (
    <div className="blogs-wrapper" ref={blogsRef} id='blogs'>
      <div className="blog">
        <p className="blog-title">Product Management Certifications</p>
        <p className="blog-author">By Jayprakash D B</p>
      </div>
      <div className="blog">
        <p className="blog-title">What is a Product really?</p>
        <p className="blog-author">By Satisha Ventakaramaiah</p>
      </div>
      <div className="blog">
        <p className="blog-title">User Experience in a Nutshell</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
      <div className="blog">
        <p className="blog-title">5 Biggest Myths About User Experience</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
      <div className="blog">
        <p className="blog-title">Finding an opportunity to build useful Products</p>
        <p className="blog-author">By Satisha Ventakaramaiah</p>
      </div>
      <div className="blog">
        <p className="blog-title">Design Decisions</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
      <div className="blog">
        <p className="blog-title">Design Decisions</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
      <div className="blog">
        <p className="blog-title">Design Decisions</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
      <div className="blog">
        <p className="blog-title">Design Decisions</p>
        <p className="blog-author">By Pravat Ranjan</p>
      </div>
    </div>
  )
}
