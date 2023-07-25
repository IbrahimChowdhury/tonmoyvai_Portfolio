import React from 'react'
import Header from '../../components/header/Header'
import HeadBanner from '../../components/header/HeadBanner'
import Snowfall from 'react-snowfall'
import snowImg from "../../assets/snowflake.png"
import Motivation from '../../components/motivation/motivation'

import Blog from '../../components/blogs/blog'
import Footer from '../../components/footer/Footer'
import ProjectComponent from '../../components/project/Project'
export default function RootLayout() {
  return (
    <div>
      <header>
         
          <HeadBanner/>
        <Snowfall  snowflakeCount={30} color='#918C8C'/>
      </header>
      <div>
        <Motivation/>
      </div>
      <div>
      <ProjectComponent/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
