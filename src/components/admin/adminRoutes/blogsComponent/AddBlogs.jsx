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
 
export function AddBlog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
        const [title, settitle] = useState('');
    const [imageLinks, setimageLinks] = useState([]);
    const [imageLink, setimageLink] = useState('');
    const [desc, setdesc] = useState("");
    const [projectLiveLink, setprojectLiveLink] = useState("");
    const [githubLink, setgithubLink] = useState("");
  const [dateAndTime, setdateAndTime] = useState(new Date().toLocaleString());
    let addImageLink=(e)=>{
        e.preventDefault()
        let varifyLink=imageLink.slice(0,8)
        if(varifyLink=== "https://")
        {
            setimageLinks((prev)=>[...prev,imageLink])
            setimageLink("")
        }
        else{
            alert("please insert correct link")
        }
    }


    let linkdeleted=(link)=>{

       setimageLinks((prev)=>prev.filter((img,inx)=>inx!==link))
    }

    // console.log(imageLinks)
    let project={
        title,
        imageLinks,
        desc,
        projectLiveLink,
        githubLink
    }

   

let sendBlog=async(e)=>{
    e.preventDefault()
    await axios.post("/createBlog",{
        title,
        imageLinks,
        desc,
        dateAndTime
    })

    settitle("")
    setimageLinks([]),
    setdesc("")
    // setgithubLink("")
    // setprojectLiveLink("")

}

  return (
    <>
      <Button onClick={handleOpen}>Add Blog</Button>
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
              Add Blog
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input required value={title}  label="Title" size="lg" onChange={(e)=>settitle(e.target.value)}  />
            <div className="flex gap-2 flex-col md:flex-row">
            <Input  value={imageLink} label="ImageLink(http://)" placeholder="" size="lg"  onChange={(e)=>setimageLink(e.target.value)} />
            <Button onClick={addImageLink}>add</Button>
            </div>
            <div className="">
                {
                    imageLinks.length>0 && <div className="h-16 overflow-scroll flex flex-wrap ">
                        {imageLinks.map((link, indx)=>(
                            <span className="bg-gray-600 rounded-lg text-white p-1 mx-2 mb-2 mt-2" key={indx} > {link} <button className="bg-gray-800 px-1 rounded-md hover:bg-white hover:text-black"  onClick={()=>linkdeleted(indx)}>X</button></span>
                        ))}
                    </div> 
                }
            </div>
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