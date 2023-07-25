import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography, 
   Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
 
export function LongDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [title, settitle] = useState('');
  const [imageLinks, setimageLinks] = useState([]);
  const [imageLink, setimageLink] = useState('');
  const [desc, setdesc] = useState("");
  const [projectLiveLink, setprojectLiveLink] = useState("");
  const [githubLink, setgithubLink] = useState("");
  const [dateAndTime, setdateAndTime] = useState(new Date().toLocaleString());
  const [addedSkills, setaddedSkills] = useState([]);
  const [addedskill, setaddedskill] = useState("");


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


  let AddSkills=(e)=>{
    e.preventDefault()
    setaddedSkills((prev)=>[...prev,addedskill])
    setaddedskill("")
  }

  let deleteSkill=(link)=>{
      setaddedSkills((prev)=>prev.filter((skill,inx)=>inx!==link))
  }

  // console.log(imageLinks)
  let project={
      title,
      imageLinks,
      desc,
      projectLiveLink,
      githubLink
  }

 

let sendProject=async(e)=>{
  e.preventDefault()
  await axios.post("/project",{
      title,
      imageLinks,
      desc,
      projectLiveLink,
      githubLink,
      dateAndTime
  })

  settitle("")
  setimageLinks([]),
  setdesc("")
  setgithubLink("")
  setprojectLiveLink("")

}
  return (
    <>
      <Button onClick={handleOpen}>Long Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long modal</DialogHeader>
        <DialogBody divider className="h-[40rem] flex flex-col gap-3 overflow-scroll">
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
            <div className="flex gap-2 flex-col  md:flex-row">
            <Input  value={addedskill} label="Add the skill" placeholder="" size="md"  onChange={(e)=>setaddedskill(e.target.value)} />
            <Button onClick={AddSkills}>add</Button>
            </div>
            <div className="">
                {
                    addedSkills.length>0 && <div className="h-16  flex flex-wrap ">
                        {addedSkills.map((skill, indx)=>(
                            <span className="bg-gray-600 rounded-lg text-white p-1 mx-2 mb-2 mt-2" key={indx} > {skill} <button className="bg-gray-800 px-1 rounded-md hover:bg-white hover:text-black"  onClick={()=>deleteSkill(indx)}>X</button></span>
                        ))}
                    </div> 
                }
            </div>
            <Textarea  value={desc} required label="Description"  size="md"  onChange={(e)=>setdesc(e.target.value)}  />
            <Input value={projectLiveLink} label="Project Link" size="md"  onChange={(e)=>setprojectLiveLink(e.target.value)}  />
            <Input value={githubLink}  label="Github Link" size="lg"  onChange={(e)=>setgithubLink(e.target.value)} />

        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button type="submit" variant="gradient"  fullWidth>
              Send
            </Button>
           
        </DialogFooter>
      </Dialog>
    </>
  );
}