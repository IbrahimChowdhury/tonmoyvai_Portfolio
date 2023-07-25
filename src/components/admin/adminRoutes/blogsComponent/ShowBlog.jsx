import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai"
import { EditBlog } from './EditBlog';
const ShowBlogs = () => {
    const [projectsData, setprojectsData] = useState([]);

    let getProjectsData=async()=>{
      let data=  ((await axios.get("/getBlogs")).data)
      setprojectsData(data)
    }
  
    getProjectsData()

    useEffect( () => {
      getProjectsData()
    }, []);


    let deleteProject=async(id)=>{
       try {
       await  axios.delete(`/deleteBlog/${id}`)
       getProjectsData()
       } catch (error) {
        console.log(error)
       }
        
    }


    let editProject=()=>{

    }
  
    // console.log(projectsData.length)
  return (
    <div>
            <div>
                {
                    projectsData.length>0 && projectsData.map(project=>(
                        <div key={project._id} className=' flex flex-col rounded-xl md:flex-row md:h-36 p-3  m-4 gap-5 justify-between bg-blue-gray-300'>
                            <img width={200} height={200} src={project.imageLinks[0]} alt=""  />
                            <div className='flex flex-col justify-between  gap-2 '>
                            {/* <span>{project._id}</span> */}
                            <h1 className='text-xl '>{project.title}</h1>
                            <p className='line-clamp-2 pr-4 '>{project.desc}</p>
                            <span className='text-sm'> created at : {project.dateAndTime}</span>
                            </div>
                            <div className='flex  md:flex-col justify-between'>
                                <p className=' bg-blue-gray-50 p-1  ease-in-out duration-200  rounded-md hover:bg-gray-700 hover:text-gray-200 hover:cursor-pointer' onClick={()=>deleteProject(project._id)} ><AiFillDelete className='text-xl' /></p>
                                <div><EditBlog data={project} refreshData={getProjectsData}/></div>
                                
                                
                            </div>
                            {/* {console.log( typeof( project.imageLinks[0]))} */}
                        </div>
                    ))
                }
            </div>

    </div>
  )
}

export default ShowBlogs