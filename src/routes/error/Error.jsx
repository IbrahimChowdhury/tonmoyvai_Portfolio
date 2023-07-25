import React from 'react'

function Error() {
  return (
    <div className='flex justify-center items-center h-screen ' >
        <div className='flex flex-col gap-5'>
          <p>
           <span className='text-4xl'>404!</span> Route not Found 
          </p>

          <p className='text-xl'>Please select correct route</p>

          <p>Go to <a href="/" className='underline hover:text-blue-700'>Home</a></p>
        </div>
    </div>
  )
}

export default Error