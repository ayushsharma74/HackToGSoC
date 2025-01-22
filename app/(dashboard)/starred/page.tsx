'use client'
import React, { useState , useEffect} from 'react'
import OrganizationCard from '@/components/main/OrganizationCard';

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


  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      try {
        setBookmarkedOrgs(JSON.parse(storedBookmarks));
      } catch (error) {
        console.error("Error parsing bookmarks from localStorage:", error);
        setBookmarkedOrgs([]);
      }
    }
  
  }, [bookmarkedOrgs])
  
  return (
    <main className={`max-w-[95%] mx-auto ${bookmarkedOrgs.length === 0 ? 'h-screen' : ''}`} >
      <div className='border-b border-[#dbbb84]'>

      <h1 className='text-7xl font-extrabold mt-4'>Starred</h1>
      <p className='text-xl font-mono mb-2'>Contribute karne ka irada hai? ya sirf save hi karna hai </p>
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