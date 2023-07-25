import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { useLocation, useParams } from 'react-router-dom'

const RecentProjectCard = ({data}) => {

  

  return (
    <div>
        <div>
            <div>
                <img src={data?.imageLinks[0]} alt=""  />
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>{data?.title}</h1>
                <p className='text-gray-600'>{data?.desc}</p>
                <div>
                <a className="bg-gradient-to-r font-bold text-black from-indigo-500 to-cyan-700 px-4 py-1  rounded-lg" href={data?.projectLiveLink}>View Project</a>
          <a href={data?.githubLink}>
            <AiFillGithub className="text-3xl"/> 
            </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjectCard