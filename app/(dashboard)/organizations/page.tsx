"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { CiStar } from "react-icons/ci";




const Organizations = () => {
  return (
    <div className='p-10'>
      <div className='border border-[#a8854a] flex flex-col w-72 px-5 pt-4 pb-3 gap-9 rounded-md'>
        <div className='section1'>
          <div className='flex justify-between items-start'>

          <div className='w-12 h-12 rounded-md border border-[#cb9334] mb-3'>
            <Image src={"/image.png"} width={100} height={100} alt='someimage' className='rounded-md'/>
          </div>
          <div className='rounded-md bg-[#FEE8C2] border-zinc-800 p-1 hover:bg-[#dec9a5] transition-colors duration-300'>
            <CiStar size={28}/>
          </div>
          </ div>
          <h1 className='font-extrabold text-2xl mb-1 underline'>
            AFLplusplus
          </h1>
          <p className='text-md font-medium mb-5'>
            State of the art fuzzing for better security
          </p>
          <div className='text-sm font-semibold flex flex-wrap gap-2 mb-2'>
            Languages: 
            <span className='border border-[#cb9334] bg-[#dcb572] px-2 text-xs rounded-md flex items-center justify-center'>
              C++
            </span>
            <span className='border border-[#cb9334] bg-[#dcb572] px-2 text-xs rounded-md flex items-center justify-center'>
              Java
            </span>
            <span className='border border-[#cb9334] bg-[#dcb572] px-2 text-xs rounded-md flex items-center justify-center'>
              JavaScript
            </span>
            <span className='border border-[#cb9334] bg-[#dcb572] px-2 text-xs rounded-md flex items-center justify-center'>
              Java
            </span>
          
          </div>
          <p className='text-sm font-semibold'>
            Topics: Bug finding, Fuzzing, Software Testing
          </p>
        </div>
        <div className='sectionforlinks flex justify-end'>
          <div className='flex gap-2'>
          
        <Link href={"https://www.github.com"} className='rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300'>
          <FaGithub size={25}/>
        </Link>
        <Link href={"https://www.github.com"} className='rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300'>
          <IoIosLink size={25}/>
        </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations