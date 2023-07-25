import React from 'react'
import { BsQuote } from "react-icons/bs"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"
import { Slide } from 'react-awesome-reveal'
function Motivation() {
    return (

        <div className='flex justify-center  bg-blue-50 ' >
            <div className='w-96 text-center mt-20 mb-20 flex flex-col gap-8'>

                <h1 className='text-4xl Satisfy'>MOTIVATION</h1>
                <div className='p-3'>
                    <span><BiSolidQuoteAltLeft className='text-3xl' /></span>
                    <p className='dancingFont text-2xl md:text-3xl '> Learn, Learn and Learn. There is no endpoint of learning. Gather knowledge and spread the knowledge with your work</p>
                    <span className='flex justify-end'><BiSolidQuoteAltRight className='text-3xl' /></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Motivation