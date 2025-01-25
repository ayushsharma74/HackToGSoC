'use client'
import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { jura } from '@/fonts/font';
import { usePathname } from 'next/navigation';
import { IoRocketOutline } from "react-icons/io5";



const Navbar = () => {

  const pathname = usePathname()

  console.log(pathname);

  return (
    <nav className="px-4 py-2 bg-[#FEE8C2] flex justify-between items-center border-b border-[#dbbb84]">
      <div className={`${jura.className} flex items-center gap-6 justify-center`}>

    <Link href={'/'} className={`${jura.className} hover:underline  text-black text-2xl`}>
      <span className='font-bold flex gap-2 items-center'>HackToGSoC <IoRocketOutline size={22}/> </span>
    </Link>
    </div>
    <div className={` ${jura.className} flex gap-3  `}>

    <Link href={"/starred"} className={`text-black hover:underline font-semibold ${pathname === '/starred' ? 'underline' : ''} `}>
      Starred
    </Link>
    <Link href={"/organizations"} className={`text-black hover:underline font-semibold ${pathname === '/organizations' ? 'underline' : ''} `}>
      Organizations
    </Link>
    <Link href={"/issues"} className={`text-black hover:underline font-semibold ${pathname === '/issues' ? 'underline' : ''} `}>
      Issues
    </Link>
      </div>
    <div className="flex gap-2 items-center ">
    <Link href={"https://github.com/ayushsharma74/codezilla"} target="_blank" className="rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300 flex gap-2 font-bold">
    <h1 className='hidden md:block lg:block'> Star this Project </h1>
     <FaGithub size={23} color="black"/>
    </Link>
    </div>
  </nav>
  )
}

export default Navbar