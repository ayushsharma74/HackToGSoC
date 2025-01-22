"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import OrganizationCard from "@/components/main/OrganizationCard";
import { RoughNotation } from "react-rough-notation";
import { Technologies } from "@/utils/technologies";

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

const Organizations = () => {
  const [data, setData] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [technologyFilter, setTechnologyFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  

  useEffect(() => {
    console.log("Effect Rendered");
    fetchData();
  }, [technologyFilter, yearFilter]);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`/api/orgs-data?technology=${technologyFilter}&year=${yearFilter}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  

  const years = ["All", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <PacmanLoader size={20} loading={loading} color="black" />
    </div>
  ) : (
    <main className="max-w-[95%] mx-auto  ">
      <div>
        <h1 className="text-7xl font-extrabold text-left mt-4 ">
          Organizations
        </h1>
        <p className=" mt-3 text-lg font-mono">
          Find the best{" "}
          <RoughNotation type="underline" show={true} animationDelay={800}>
            organizations
          </RoughNotation>{" "}
          to work on.
        </p>
      </div>
      <div className="mt-5 w-full flex justify-start gap-3 ">
        <select
          onChange={(e) => setTechnologyFilter(e.target.value)}
          name="Technologies"
          id=""
          className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]"
          value={technologyFilter}
        >
          <option value="all">Select Technology</option>
          {Technologies.map((item, idx) => (
            <option key={idx} value={item}>{item}</option>
          ))}
        </select>
          <select
            onChange={(e) => setYearFilter(e.target.value)}
            name="years"
            id=""
            className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]"
            value={yearFilter}
          >
             <option value="all">Select Year</option>
            {years.map((year,idx) => (
               <option key={idx} value={year}>{year}</option>
            ))}
          </select>
      </div>
      <div className=" py-10 flex flex-wrap gap-7 h-fit justify-center">
        {data &&
          data?.map((item, idx) => <OrganizationCard key={idx} item={item} />)}
      </div>
    </main>
  );
};

export default Organizations;