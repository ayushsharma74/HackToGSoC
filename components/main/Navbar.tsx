'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { jura } from '@/fonts/font';
import { usePathname } from 'next/navigation';
import { IoRocketOutline } from 'react-icons/io5';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="px-4 py-2 bg-[#FEE8C2] flex justify-between items-center relative">
            <div className={`${jura.className} flex items-center gap-6 justify-center`}>
                <Link href={'/'} className={`${jura.className} hover:underline  text-black text-2xl`}>
                    <span className='font-bold flex gap-2 items-center'>HackToGSoC <IoRocketOutline size={22} /> </span>
                </Link>
            </div>


            {/* Desktop Navigation Links */}
            <div className={` ${jura.className}  hidden md:flex gap-3 `}>
                <Link
                    href={"/starred"}
                    className={`text-black hover:underline font-semibold ${pathname === '/starred' ? 'underline' : ''} `}
                >
                    Starred
                </Link>
                <Link
                    href={"/organizations"}
                    className={`text-black hover:underline font-semibold ${pathname === '/organizations' ? 'underline' : ''} `}
                >
                    Organizations
                </Link>
                <Link
                    href={"/roadmap"}
                    className={`text-black hover:underline font-semibold ${pathname === '/roadmap' ? 'underline' : ''} `}
                >
                    Roadmap
                </Link>
            </div>


              {/* Mobile Navigation Links */}
              <div
                className={`${
                isMenuOpen ? "absolute top-full left-0 w-full bg-[#FEE8C2] flex flex-col p-4 border-b border-[#dbbb84] z-50" : "hidden"
                }   md:hidden `}

            >
                <Link
                  href={"/starred"}
                  className={`text-black hover:underline font-semibold py-2 ${pathname === '/starred' ? 'underline' : ''} `}
                    onClick={toggleMenu}
                >
                   Starred
                </Link>
                <Link
                  href={"/organizations"}
                  className={`text-black hover:underline font-semibold py-2 ${pathname === '/organizations' ? 'underline' : ''} `}
                    onClick={toggleMenu}
                >
                   Organizations
                </Link>
                <Link
                  href={"/roadmap"}
                  className={`text-black hover:underline font-semibold py-2 ${pathname === '/roadmap' ? 'underline' : ''} `}
                    onClick={toggleMenu}
                >
                   Roadmap
                </Link>
            </div>

             <div className="flex gap-2 items-center ">
                <Link
                    href={"https://github.com/ayushsharma74/HackToGSoC"}
                    target="_blank"
                    className="rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300 flex gap-2 font-bold"
                >
                    <h1 className='hidden md:block lg:block'> Star this Project </h1>
                    <FaGithub size={23} color="black" />
                </Link>
                {/* Mobile Menu Button */}
                  <button onClick={toggleMenu} className="text-black focus:outline-none md:hidden">
                      {isMenuOpen ? <IoClose size={30} /> : <HiMenuAlt3 size={30} />}
                    </button>
            </div>
        </nav>
    );
};

export default Navbar;