import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
   
  export default function BlogCard({data}) {
    return (
      <Card className="Satisfy  ml-7   bg-gray-800 text-white flex gap-1 w-60 border-2 border-indigo-600 p-2 rounded-2xl ">
        <div color="blue-gray" className="relative workSans ">
          <img src={data.image}  alt="img-blur-shadow" className="h-32 rounded-t-lg" layout />
        </div>
        <div>
          <div  color="blue-gray" className="mb-2 line-clamp-1 font-semibold">
            {data.title}
          </div>
          <div className="line-clamp-3 openSans text-sm">
           {data.desc}
          </div>
        </div>

        <div className="pt-2 flex justify-between">
          <a className="bg-gradient-to-r font-bold  from-teal-100 to-teal-200 text-black  hover:cursor-pointer ease-in-out duration-300 hover:translate-x-1 hover:shadow-md hover:shadow-black px-4 py-1  rounded-lg" href={data.link}>View Blog</a>
          {/* <a href={data.githubLink}>
            <AiFillGithub className="text-3xl"/> 
            </a> */}
        </div>
      </Card>
    );
  }