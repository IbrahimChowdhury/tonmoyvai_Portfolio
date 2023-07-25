import React, { useEffect, useState } from 'react'
import { AddProject } from './projectsComponent/AddProject'
import axios from 'axios';
import ShowProjects from './projectsComponent/ShowProjects';
import { LongDialog } from './projectsComponent/LongDiaLogue';

const Projects = () => {


  return (

    <div className='flex flex-col '>

        <h1 className='text-center text-3xl m-10 font-semibold'>PROJECTS</h1>

        <div className='text-center ' >
          <AddProject /> <LongDialog/>
        </div>
      <div className='flex flex-col gap-10 justify-center md:flex-row m-3 md:m-10'>
        <div className='bg-gray-300  rounded-lg  md:w-1/2 flex flex-col '>
          <h2 className='text-center text-xl font-semibold m-4 '>Projects List</h2>
          <ShowProjects />
        </div>




      </div>
    </div>
  )
}

export default Projects