import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";
 
export function EditMyInfo({data}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [name, setname] = useState(data.name);
  const [desc, setdesc] = useState(data.desc);
  const [jobTitle, setjobTitle] = useState(data.jobTitle);
  const [myImageLink, setmyImageLink] = useState(data.myImageLink);
       
  const [dateAndTime, setdateAndTime] = useState(new Date().toLocaleString());
    // let addImageLink=(e)=>{
    //     e.preventDefault()
    //     let varifyLink=imageLink.slice(0,8)
    //     if(varifyLink=== "https://")
    //     {
    //         setimageLinks((prev)=>[...prev,imageLink])
    //         setmyImageLink("")
    //     }
    //     else{
    //         alert("please insert correct link")
    //     }
    // }


    // console.log(imageLinks)
   

   

let sendBlog=async(e)=>{
    try {
       
            await axios.put(`/editMyInfo/${data._id}`,{
                name,
                jobTitle,
                desc,
                myImageLink,
                dateAndTime
            })

            setname("")
            setmyImageLink("")
            setdesc("")
            setjobTitle("")
        
        
    } catch (error) {
        console.log(error)
    }
   

   

    // setgithubLink("")
    // setprojectLiveLink("")

}

  return (
    <>
      <Button onClick={handleOpen}>Edit My Info</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-white w- md: shadow-none overflow-ellipsis "
      >
        <form onSubmit={sendBlog} className="mx-auto w-full rounded-lg max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4   grid h-12 place-items-center"
          >
            <Typography variant="h4" color="white">
              Edit My Info
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input required value={name}  label="Name" size="lg" onChange={(e)=>setname(e.target.value)}  />
            <Input required value={jobTitle}  label="Job Title" size="lg" onChange={(e)=>setjobTitle(e.target.value)}  />
            <Input value={myImageLink}  label="MyImageLink(http://)" placeholder="" size="lg"  onChange={(e)=>setmyImageLink(e.target.value)} />
                       
            <Textarea  value={desc} required label="Description"  size="lg"  onChange={(e)=>setdesc(e.target.value)}  />
            {/* <Input value={projectLiveLink} label="Project Link" size="lg"  onChange={(e)=>setprojectLiveLink(e.target.value)}  /> */}
            {/* <Input value={githubLink}  label="Github Link" size="lg"  onChange={(e)=>setgithubLink(e.target.value)} /> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient"  fullWidth>
              Send
            </Button>
           
          </CardFooter>
        </form>
      </Dialog>
    </>
  );
}