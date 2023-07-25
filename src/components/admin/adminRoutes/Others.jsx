import React, { useEffect, useState } from 'react'
import { AddMyInfo } from './othersComponent/AddMyInfo'
import axios from 'axios'
import { EditMyInfo } from './othersComponent/EditMyInfo';

function Others() {

  const [myInfo, setmyInfo] = useState([]);
  let getMyInfo = async () => {
         let myInfoData= (await axios.get("/getMyInfo")).data
         setmyInfo(myInfoData)

  }
getMyInfo()



  useEffect(() => {
    getMyInfo()
  }, []);
  console.log(myInfo)

  return (
    <div className='text-black flex justify-center mt-10 md:mt-5'>
      
      <div className='bg-blue-gray-200 md:w-1/2 flex flex-col justify-center items-center p-3 m-3 md:p-10 md:m-10 rounded-xl'>
        <h1 className='text-3xl font-semibold bg-blue-gray-500 text-white md:p-3 rounded-lg p-2 mb-5'>My Information </h1>
        {
          myInfo.length>0 && myInfo.map(inf=>(

        <div key={inf._id} className='md:p-3 w-full  flex flex-col  gap-7'>
              <h1 className='text-3xl'>{inf.name}</h1>
              <h2 className='text-lg'> {inf.jobTitle}</h2>
              <p className='text-sm'>  {inf.desc}</p>
              <p className=''>{inf.myImageLink}</p>
                <div className='flex gap-3 items-center italic'>
                  <h1>Last edited: </h1>
                  <h2 className='text-sm'>{inf.dateAndTime}</h2>
                </div>
              <div>
                <EditMyInfo data={inf}/>
              </div>
        </div>
          ))
        }



      </div>


    </div>
  )
}

export default Others