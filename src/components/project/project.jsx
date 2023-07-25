import React, { useEffect, useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

import ProjectCard from './projectCard';
import axios from 'axios';


const Project = () => {

    const [projectsData, setprojectsData] = useState([]);

    let getProjectsData = async () => {
        let data = ((await axios.get("/getprojects")).data)
        setprojectsData(data)
    }

    // getProjectsData()

    useEffect(() => {
        getProjectsData()
    }, []);



    return (
        <div className='pt-12 pb-16 bg-blue-100 '>

            <h1 className="flex justify-center text-4xl dancingFont ">PROJECTS </h1>
            <div className='flex justify-center items-center '>
                <div className='flex flex-col gap-8 m-10 md:flex-row '>
                        
                            <ProjectCard data={projectsData[0]}/> 
                            <ProjectCard data={projectsData[1]}/> 
                            <ProjectCard data={projectsData[2]}/> 
                        
                </div>
            </div>
        </div>
    )
}

export default Project