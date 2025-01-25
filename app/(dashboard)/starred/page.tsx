'use client'
import React, { useState , useEffect, useCallback} from 'react'
import OrganizationCard from '@/components/main/OrganizationCard';
import { RoughNotation } from 'react-rough-notation';

interface Organization {
    "Image URL": string;
    Name: string;
    Description: string;
    Technologies?: string;
    Topics: string;
    "GitHub URL": string;
    URL: string;
    years: string;
  }


const Starred = () => {
  const [bookmarkedOrgs, setBookmarkedOrgs] = useState<Organization[]>([]);


  const handleBookmarks = useCallback(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      try {
        setBookmarkedOrgs(JSON.parse(storedBookmarks));
      } catch (error) {
        console.error("Error parsing bookmarks from localStorage:", error);
        setBookmarkedOrgs([]);
      }
    }
  }, [])
  useEffect(() => {
    handleBookmarks();
  
  }, [])
  
  return (
    <main className={`max-w-[95%] mx-auto ${bookmarkedOrgs.length === 0 ? 'h-screen' : ''}`} >
      <div className=''>

      <h1 className='text-4xl md:text-7xl font-extrabold mt-4'>Starred</h1>
      <p className='md:text-lg font-mono mb-2'> <RoughNotation type="underline" show={true}>Contribute</RoughNotation> karne ka irada hai? ya sirf save hi karna hai </p>
      </div>
      <div>
        <div className='py-10 flex flex-wrap gap-7 h-fit justify-center'>
        {bookmarkedOrgs &&
            bookmarkedOrgs.map((item, idx) => (
              <OrganizationCard key={idx} item={item} />
            ))}
          {bookmarkedOrgs.length === 0 && (
            <p className="text-lg text-gray-600">
              No organizations starred yet.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default Starred