"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";


interface Organization {
    "Image URL": string;
    Name: string;
    Description: string;
    Technologies?: string;
    Topics: string;
    "GitHub URL"?: string;
    URL: string;
    years: string;
}

const OrganizationCard: React.FC<{ item: Organization }> = ({ item }) => {
    const technologies = item.Technologies?.split(',').map(item => item.trim()).filter(item => item !== '');
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);


    useEffect(() => {
      const bookmarks = localStorage.getItem("bookmarks");
       if (bookmarks) {
          const parsedBookmarks = JSON.parse(bookmarks);
          setIsBookmarked(parsedBookmarks.some((bookmark: Organization) => bookmark.Name === item.Name));
        }
       }, [item.Name]);


    const handleBookmarks = () => {
      const bookmarks = localStorage.getItem("bookmarks");
      let parsedBookmarks: Organization[] = [];
  
      if (bookmarks) {
        parsedBookmarks = JSON.parse(bookmarks);
      }
  
      if (isBookmarked) {
        // Remove from bookmarks
        const filteredBookmarks = parsedBookmarks.filter(
          (bookmark) => bookmark.Name !== item.Name
        )
        localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks));
        setIsBookmarked(false);
      } else {
        // Add to bookmarks
        parsedBookmarks.push(item);
        localStorage.setItem("bookmarks", JSON.stringify(parsedBookmarks));
        setIsBookmarked(true);
      }
    };

  return (
    <div className='border border-[#dbbb84] flex flex-col w-80 px-5 mx-1 justify-between pt-4 pb-3 gap-9 rounded-md'>
      <div className='section1'>
        <div className='flex justify-between items-start'>
          <div className='w-14 h-12 rounded-md mb-3'>
            <Image
              src={item["Image URL"]}
              width={150}
              height={150}
              alt='organization logo'
              className='rounded-md'
               layout="responsive"
               objectFit="contain"
            />
          </div>
          <div onClick={handleBookmarks} className='rounded-md cursor-pointer bg-[#FEE8C2] border-zinc-800 p-1 duration-300'>
            {isBookmarked ? <TiStarFullOutline size={28} className="hover:scale-125 transition-all" /> : <CiStar size={28} className="hover:scale-125 transition-all" />}
            
          </div>
        </div>
        <Link
          href={`/organizations/${encodeURIComponent(item["Name"])}`}
          className='font-extrabold text-2xl mb-1 underline hover:no-underline transition-all'
          target='_blank'
        >
          {item["Name"]}
        </Link>
        <p className='text-md font-medium mb-5'>{item["Description"]}</p>
        <p>Years: {item["years"]}</p>
        <div className='text-sm font-semibold flex flex-wrap gap-2 mb-2'>
          <span>Technologies:</span>
          <div className='flex flex-wrap gap-2'>
            {technologies?.map((value, index) => (
              <span
                key={index}
                className='border border-[#cb9334] bg-[#dcb572] px-2 text-xs rounded-md flex items-center justify-center'
              >
                {value}
              </span>
            ))}
          </div>
        </div>
        <p className='text-sm font-semibold'>Topics: {item["Topics"]}</p>
      </div>
      <div className='sectionforlinks flex justify-end'>
        <div className='flex gap-2'>
        {item["GitHub URL"] === "Not Found" ? null : <Link
            href={item["GitHub URL"] || "#"}
            target='_blank'
            className='rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300'
          >
             <FaGithub size={25} />
          </Link>}
          <Link
            href={item["URL"]}
            target='_blank'
            className='rounded-md bg-[#FEE8C2] border-zinc-800 p-2 hover:bg-[#dec9a5] transition-colors duration-300'
          >
            <IoIosLink size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;