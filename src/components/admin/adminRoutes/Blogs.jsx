import React from 'react'
import { AddBlog } from './blogsComponent/AddBlogs'
import ShowBlogs from './blogsComponent/ShowBlog'

const Blog = () => {
  return (
    
    <div className='flex flex-col'>

        <h1 className='text-center text-3xl m-10 font-semibold'>BLOGS</h1>

        <div className='text-center' >
          <AddBlog />
        </div>
      <div className='flex flex-col gap-10 justify-center md:flex-row m-3 md:m-10'>
        <div className='bg-gray-300  rounded-lg  md:w-1/2 flex flex-col '>
          <h2 className='text-center text-xl font-semibold m-4 '>Blogs List</h2>
          <ShowBlogs />
        </div>
      </div>
    </div>
  )
}

export default Blog