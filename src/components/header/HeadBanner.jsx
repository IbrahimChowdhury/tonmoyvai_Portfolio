import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import imageUrl from "../../assets/ibra5.png"
 import {AiFillFacebook, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"
import axios from 'axios'
const HeadBanner = () => {

    const [myInfo, setmyInfo] = useState([]);
    let getMyInfo = async () => {
           let myInfoData= (await axios.get("/getMyInfo")).data
           setmyInfo(myInfoData)
  
    }
  
  
  
  
    useEffect(() => {
      getMyInfo()
    }, []);



    return (
        
        <div>

            {
                myInfo.length>0 && myInfo.map(inf=>(
                    
                    <div key={inf._id} className='pt-10  flex flex-col md:flex-row justify-between items-center gap-2  monFont md:gap-32  bg-blue-100 pb-6 pl-4 pr-4 md:pr-0 md:pl-0 '>
                <Slide direction='left'>
                <div className='flex flex-col gap-6 md:ml-20 p-4'>
                    <div className='flex flex-col gap-2 '>
                    <h1 className='text-3xl font-bold'>{inf.name}</h1>
                    <h2 className='text-gray-600 font-bold'>{inf.jobTitle}</h2>
                    </div>
                    <p className='text-justify  text-gray-900'>{inf.desc}</p>
                    <div className='flex flex-col gap-7'>
                        <div className='flex gap-3'>
                            <a target='_blank' href="https://github.com/IbrahimChowdhury" > <AiFillGithub className='text-3xl ease-in-out duration-300  hover:-translate-y-1' /> </a>
                            <a target='_blank' href="https://www.facebook.com/ibrahim.khalil36" > <AiFillFacebook className='text-3xl ease-in-out duration-300  hover:-translate-y-1' /> </a>
                            <a target='_blank' href="https://www.instagram.com/ibrahim_chowdhury26/?igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR0d-P1zVxSpXQbUZIhIcWNBZmxFXW1pc9gzfKdZsXLvfji4dvrBqoVzPho" > < AiOutlineInstagram className='text-3xl ease-in-out duration-300  hover:-translate-y-1' /> </a>
    
                        </div>
    
                        <div>
                           <button className=' px-4 py-2 rounded-lg  bg-blue-gray-700 text-white font-medium ease-in-out duration-500 hover:translate-x-2'>
                             <a href="https://drive.google.com/file/d/1evrcqixEYLdklD7KdEpPt8zNejWzYHpw/view?usp=drive_link" target="_blank" rel="noopener noreferrer">See My CV</a>
                            </button>
                        </div>
                    </div>
                </div>
            </Slide>
    
    
            <Slide direction='right'>
                <div className=' ml-20  md:mr-24  w-[200px] md:w-[500px] '>
                    <img src={imageUrl} alt='image' className=''    />
                </div>
            </Slide>
            </div>
              ))
                 }
        </div>
           
    )
}

export default HeadBanner