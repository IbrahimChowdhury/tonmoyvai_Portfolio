import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
   
  export default function ProjectCard({data}) {
    return (
      <Card className="josefin justify-between bg-white text-black flex gap-1 w-60 shadow-md shadow-gray-500 p-2 rounded-2xl ">
        <div color="blue-gray" className=" workSans">
          <img src={data?.imageLinks[0]}  alt="img-blur-shadow " className="h-44' object-cover rounded-t-lg " layout="fill" />
        </div>
        <div>
          <div  color="blue-gray" className="mb-2 text-xl line-clamp-1 font-semibold">
            {data?.title}
          </div>
          <div className="line-clamp-3 openSans text-sm">
           {data?.desc}
          </div>
        </div>
        <div className="pt-2 flex justify-between">
          {/* <a className=" font-bold text-white  px-4 py-1 bg-blue-gray-700  rounded-lg" href={data?.projectLiveLink}>View Project</a> */}
          <a className="text-2xl mt-1" href={data?.projectLiveLink}><FiExternalLink/></a>
          <a href={data?.githubLink}>
            <AiFillGithub className="text-3xl"/> 
            </a>
        </div>
      </Card>
    );
  }