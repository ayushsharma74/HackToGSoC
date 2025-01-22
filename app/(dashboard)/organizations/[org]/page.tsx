"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, use, useState } from "react";
import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Org = ({ params }: Promise<void>) => {
  const slug = use(params);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    console.log(slug.org);
    getData();
  }, [slug]);

  const getData = () => {
    axios
      .get("/api/one-org-data?title=" + slug.org)
      .then((res) => setDescription(res.data.Description))
      .catch((err) => console.log(err));
  };
  return (
    <main className="max-w-[90%] mx-auto h-screen">
      <div className="text-black mt-5 border-b border-[#dbbb84]">
        <h1 className="text-6xl font-semibold">
          {decodeURIComponent(slug.org)}
        </h1>
        <p className="text-base mt-2 mb-5">{description}</p>
      </div>
      <h1 className="text-5xl font-semibold mt-3 mb-6 ">Projects.</h1>
        <h1 className="text-3xl mb-3">2016</h1>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 project-card w-64 border px-5 pt-4 pb-3 border-[#dbbb84] p-4 rounded-md">
          <div>
            <h1 className="font-bold text-xl">
              Support OpenMetrics _created timestamp in Prometheus
            </h1>
            <p className="text-end text-sm">~ Arthur Sens</p>
            <p className="mt-3">
              The proposal consists in treating the time series creation time as
              another metadata. We propose a few incremental improvements that
              can be released...
            </p>
          </div>
          <div className="flex gap-3 w-full justify-end">
            <Link href={"#"} className="transition-all hover:scale-125">
              <FaLink size={20} />
            </Link>
            <Link href={"#"} className="transition-all hover:scale-125">
              <FaCode size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 project-card w-64 border px-5 pt-4 pb-3 border-[#dbbb84] p-4 rounded-md">
          <div>
            <h1 className="font-bold text-xl">
            Add Support for SQL Database Storage in CurveBS

            </h1>
            <p className="text-end text-sm">~ Bokai Jia
            </p>
            <p className="mt-3">
            CurveBS currently use etcd as metadata storage but etcd has limited scalability, and the amount of metadata that can be stored is limited.So i plan...

            </p>
          </div>
          <div className="flex gap-3 w-full justify-end">
            <Link href={"#"} className="transition-all hover:scale-125">
              <FaLink size={20} />
            </Link>
            <Link href={"#"} className="transition-all hover:scale-125">
              <FaCode size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Org;
