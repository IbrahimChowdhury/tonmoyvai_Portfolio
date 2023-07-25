import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RecentProjectCard from './RecentProjectCard';

const ProjectsRoute = () => {

    const [projectsData, setprojectsData] = useState([]);

    let getProjectsData=async()=>{
      let data=  ((await axios.get("/getprojects")).data)
      setprojectsData(data)
    }
  
    // getProjectsData()

    useEffect( () => {
      getProjectsData()
    }, []);



  return (
    <div>
        <h1 className='text-2xl text-center font-semibold m-3'>All Projects</h1>

        <div className='flex flex-col justify-center items-center'>
            <h1>Recent Project</h1>   
            <div>
                <RecentProjectCard data={projectsData[0]}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectsRoute