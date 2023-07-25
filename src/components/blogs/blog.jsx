import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import ProjectCard from './blogCard';
import axios from 'axios';


// let data = [
//     {
//         id: 1,
//         image: "https://i.ibb.co/PNqR6mQ/Screenshot-2023-07-18-170101.png",
//         name: "Air Bnb Hotel Management Applicaiton",
//         desc: "This is a hotel management application. And this application can handle all the hotel that we add in the application",
//         link: "https://airbnb-hotel-management-app.netlify.app",
//         skills: ["react", "node Js", "express js", "mongoDB",],
//         gitHubLink: "https://github.com/IbrahimChowdhury/airbnb-full-project-and-documentation",

//     },
//     {
//         id: 2,
//         image: "https://i.ibb.co/h8wKKvm/Screenshot-2023-07-18-164256.png",
//         name: "All Country Info",
//         desc: "This is simple application that shows all the countries in the world and give some small information",
//         link: "https://allcountrynme.netlify.app/",
//         skills: ["react", "api"],
//         gitHubLink: "https://allcountrynme.netlify.app/"
//     },
//     {
//         id: 3,
//         image: "https://i.ibb.co/L8GYFHc/Screenshot-2023-07-18-164322.png",
//         name: "User Management",
//         desc: "This is applicaiton by which we can manage user from the application. And this is nothing but a small project",
//         link: "https://sparkly-chebakia-0b3323.netlify.app/",
//         skills: ["react", "api"],
//         gitHubLink: "https://github.com/IbrahimChowdhury/User_manageMent_data"
//     },
//     {
//         id: 4,
//         image: "https://i.ibb.co/qMNBBKf/Screenshot-2023-07-18-174625.png",
//         name: "ToDo Application",
//         desc: "This is a todo application. And we can add todos in the applicaiton and the todos never erase until we erase it.",
//         link: "https://ibrahimchowdhury.github.io/todo-application-2/?fbclid=IwAR2ityB-3_ti9eLJp0a78wt5CpYa39ZJR69aiscpl4JxD-LDkZwVu1y8vi0",
//         skills: ["html", "css", "javascript"],
//         gitHubLink: "https://github.com/IbrahimChowdhury/Todo-list-application"
//     },
//     {
//         id: 5,
//         image: "https://i.ibb.co/bzFQMN0/Screenshot-2023-07-18-164150.png",
//         name: "To do Application",
//         desc: "This is todo application. And we can add our own todos and the todos ",
//         link: "https://todoapp1123.netlify.app/",
//         skills: ["Html, CSS", "Javascript"],
//         gitHubLink: "https://github.com/IbrahimChowdhury/todo-application-2"
//     },
// ];

const Blog = () => {


const [BlogsData, setBlogsData] = useState([]);

    let getBlogsData=async()=>{
      let data =  ((await axios.get("/getBlogs")).data)
      setBlogsData(data)
    }
  
    

    useEffect( () => {
      getBlogsData()
    }, []);

console.log("blogs data")
console.log(BlogsData)

    return (

        <div  className='pt-12 pb-16 bg-blue-200'>

<h1  className="flex justify-center text-4xl dancingFont ">Blogs </h1>
<div className='flex justify-center items-center '>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >



        {/* // Using array */}
                { BlogsData.length>0 && BlogsData.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <ProjectCard data={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
</div>
        </div>
    )
}

export default Blog