// components/Organizations.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import OrganizationCard from "@/components/main/OrganizationCard";
import { RoughNotation } from "react-rough-notation";
import { Technologies } from "@/utils/technologies";
import Pagination from "@/components/main/Pagination";


interface Organization {
  "Image URL": string;
  Name: string;
  Description: string;
  Technologies?: string;
  Topics: string;
  "GitHub URL": string;
  URL: string;
  years: string
}

const Organizations = () => {
    const [data, setData] = useState<Organization[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [technologyFilter, setTechnologyFilter] = useState<string>("all");
    const [yearFilter, setYearFilter] = useState<string>("all");
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const fetchData = async () => {
      setLoading(true);
      try{
         const res = await axios.get(
             `/api/orgs-data?technology=${technologyFilter}&year=${yearFilter}`
          );
           setData(res.data);
  
      } catch(err){
            console.log(err);
      } finally {
       setLoading(false);
      };
    }
    
    useEffect(() => {
    console.log("Effect Rendered");
    
    fetchData();
  }, [technologyFilter, yearFilter, currentPage]);



  const handlePageChange = (page: number) => {
     setCurrentPage(page);
  };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrgs = data.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(data.length / itemsPerPage);
    

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <PacmanLoader
        size={20}
        loading={loading}
        color="black"
      />
    </div>
  ) : (
    <main className="max-w-[95%] mx-auto py-10 ">
      <div>
        <h1 className="text-7xl font-extrabold text-left mt-4 ">
          Organizations
        </h1>
        <p className=" mt-3 text-lg font-mono">
          Find the best{" "}
          <RoughNotation type="underline" show={true}>
            organizations
          </RoughNotation>{" "}
          to work on.
        </p>
      </div>
      <div className="mt-5 w-full flex justify-start gap-3 ">
        <select onChange={(e) => setTechnologyFilter(e.target.value)} name="Technologies" id="" className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]" value={technologyFilter}>
          <option value="all">Select Technology</option>
          {Technologies.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={(e) => setYearFilter(e.target.value)} name="years" id="" className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]" value={yearFilter}>
          <option value="all">Select Year</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className=" py-10 flex flex-wrap gap-7 h-fit justify-center">
        {currentOrgs &&
          currentOrgs?.map((item, idx) => (
            <OrganizationCard key={idx} item={item} />
          ))}
      </div>
        <div className="font-bold">

        <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
            </div>
    </main>
  );
};

export default Organizations;