"use client";

import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { FaLink, FaCode } from "react-icons/fa";
import PacmanLoader from "react-spinners/PacmanLoader";

const Org = ({ params }: any) => {
  const [description, setDescription] = useState("");
  const [projectsByYear, setProjectsByYear] = useState<{ [year: string]: any[] }>({});
  const [loading, setLoading] = useState(true);
  const slug: any = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/one-org-data?title=${slug.org}`);
        setDescription(res.data.Description);

        const projects = res.data.projects[0];
        const projectsByYear = Object.entries(projects).reduce(
          (acc: any, [year, projects]) => {
            acc[year] = projects;
            return acc;
          },
          {}
        );

        setProjectsByYear(projectsByYear);
        console.log(projectsByYear);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug.org]);

  const sortedYearEntries = Object.entries(projectsByYear)
    .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA));

  return (
    <main className="max-w-[90%] mx-auto h-fit pb-6">
      <div className="text-black mt-5 border-b border-[#dbbb84]">
        <h1 className="text-6xl font-semibold">
          {decodeURIComponent(slug.org)}
        </h1>
        {loading ? (
            <p className="text-base mt-2 mb-5">Loading...</p>
        ) : (
            <p className="text-base mt-2 mb-5">{description}</p>
        )}
      </div>
        <h1 className="text-5xl font-semibold mt-3 mb-6 ">Projects.</h1>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-start">
          <PacmanLoader size={20} loading={loading} color="black" />
        </div>
      ) : (
           sortedYearEntries.map(([year, projects], index) => (
          <div key={index} className="year-section">
            <h2 className="text-3xl font-semibold my-3">{year}</h2>
            <div className="flex gap-5 flex-wrap">
              {projects.map((project: any, projectIndex) => (
                <div
                  key={projectIndex}
                  className="flex flex-col justify-between gap-4 project-card w-64 border px-6 pt-4 pb-3 border-[#dbbb84] p-4 rounded-md"
                >
                  <div>
                    <h1 className="font-bold text-xl">{project.title}</h1>
                    <p className="text-end text-sm">~ {project.student_name}</p>
                    <p className="mt-3">{project.short_description}</p>
                  </div>
                  <div className="flex gap-3 w-full justify-end">
                    {project.project_url && (
                      <Link
                        href={project?.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-125"
                      >
                        <FaLink size={20} />
                      </Link>
                    )}
                    {project.code_url && (
                      <Link
                        href={project?.code_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-125"
                      >
                        <FaCode size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </main>
  );
};

export default Org;