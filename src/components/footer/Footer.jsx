import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF, FaGithub} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"
const Footer = () => {
    return (
        <div className='bg-gray-900 pt-14 pb-14 '>

            <div className='flex md:justify-around  gap-10 ml-10 md:flex-row flex-col'>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl mb-2 text-indigo-500'>Links</h1>
                    <div className='flex flex-col gap-2 text-sm  dancingFont text-gray-300'>
                        <a href="/">It's Ibrahim</a>
                        <a href="#projects">Projects</a>
                        <a  href="#education">Education</a>
                    </div>
                </div>


                <div className='  flex flex-col gap-2 '>
                    <h1 className='text-xl mb-2 text-indigo-500' >My Contacts</h1>
                    <div className='flex flex-col gap-2 dancingFont text-gray-300'>
                        <p> 01734935995</p>
                        <p> ibrahimchowdhury1000@gmail.com</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl mb-2 text-indigo-500'>
                        Follow Me on
                    </h1>
                    <div  className='flex  gap-4 dancingFont text-gray-300'>
                        <a target='_blank' className='bg-gray-400 text-black text-lg p-2 rounded-full'  href="https://www.facebook.com/ibrahim.khalil36"><FaFacebookF/></a>
                        <a target='_blank' className='bg-gray-400 text-black p-2 text-lg rounded-full' href="https://github.com/IbrahimChowdhury"><FaGithub/></a>
                        <a target='_blank' className='bg-gray-400 text-black p-2 text-xl rounded-full' href="https://github.com/IbrahimChowdhury"><AiFillInstagram/></a>
                    </div>
                </div>

            </div>

            <p className='text-center text-xs md:text-sm font-mono mb-14 mt-10'>© Copyright 2023 Ibrahim Chowdhury</p>

        </div>
    )
}

export default Footer