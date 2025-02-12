"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import OrganizationCard from "@/components/main/OrganizationCard";
import { RoughNotation } from "react-rough-notation";
import { Technologies } from "@/utils/technologies";
import Pagination from "@/components/main/Pagination";
import debounce from "lodash/debounce";

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

const STORAGE_KEY = "org-filters";
const EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

const Organizations = () => {
  const [data, setData] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [technologyFilter, setTechnologyFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [filtersLoaded, setFiltersLoaded] = useState(false); // Ensure filters are loaded before fetching

  // Function to save filters to localStorage
  const saveFiltersToStorage = () => {
    const filters = {
      technologyFilter,
      yearFilter,
      searchTerm,
      timestamp: new Date().getTime(), // Store current time
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
  };

  // Function to load filters from localStorage
  const loadFiltersFromStorage = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const { technologyFilter, yearFilter, searchTerm, timestamp } = JSON.parse(storedData);

      if (new Date().getTime() - timestamp < EXPIRATION_TIME) {
        setTechnologyFilter(technologyFilter);
        setYearFilter(yearFilter);
        setSearchTerm(searchTerm);
        setDebouncedSearchTerm(searchTerm);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setFiltersLoaded(true); // Ensure filters are marked as loaded
  };

  useEffect(() => {
    loadFiltersFromStorage();
  }, []);

  // Fetch data only when filters are loaded
  useEffect(() => {
    if (filtersLoaded) {
      fetchData();
    }
  }, [technologyFilter, yearFilter, filtersLoaded]);

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/orgs-data?technology=${technologyFilter}&year=${yearFilter}`);
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Debounced Fetch
  const debouncedFetchData = useCallback(
    debounce(async () => {
      if (!filtersLoaded) return;
      setLoading(true);
      try {
        const res = await axios.get(`/api/orgs-data?technology=${technologyFilter}&year=${yearFilter}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 300),
    [technologyFilter, yearFilter, filtersLoaded]
  );

  // Handle search input
  const handleSearch = () => {
    if (searchInputRef.current) {
      setSearchTerm(searchInputRef.current.value);
      setDebouncedSearchTerm(searchInputRef.current.value);
    }
    setCurrentPage(1);
    saveFiltersToStorage();
  };

  useEffect(() => {
    debouncedFetchData();
  }, [debouncedSearchTerm, debouncedFetchData]);

  // Update localStorage when filters change
  useEffect(() => {
    if (filtersLoaded) {
      saveFiltersToStorage();
    }
  }, [technologyFilter, yearFilter, searchTerm]);

  // Handle Page Change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtered Data
  const filteredData = data.filter((item) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return item.Name.toLowerCase().includes(searchLower) || item.Description.toLowerCase().includes(searchLower);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrgs = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const showNoOrgsFound = filteredData.length === 0;
  const showPagination = !showNoOrgsFound && totalPages > 1;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <PacmanLoader size={20} loading={loading} color="black" />
    </div>
  ) : (
    <main className="max-w-[95%] mx-auto pb-10 pt-4 ">
      <div>
        <h1 className="text-4xl md:text-7xl font-extrabold text-left">Organizations</h1>
        <p className="mt-3 mb-3 text-base md:text-lg font-mono">
          Find the best{" "}
          <RoughNotation type="underline" show={true}>
            organizations
          </RoughNotation>{" "}
          to work on.
        </p>
      </div>
      <div className="mt-5 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex flex-row gap-3 font-bold">
          <input
            type="text"
            placeholder="Search organizations..."
            className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2] text-black w-full md:w-auto placeholder:text-[#535353]"
            ref={searchInputRef}
            defaultValue={searchTerm}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} className="bg-[#dbbb84] hover:bg-[#c89d54] transition-colors duration-300 text-sm text-black rounded-md px-5">
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <select onChange={(e) => setTechnologyFilter(e.target.value)} className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2] w-full md:w-auto" value={technologyFilter}>
            <option value="all">Select Technology</option>
            {Technologies.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select onChange={(e) => setYearFilter(e.target.value)} className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2] w-full md:w-auto" value={yearFilter}>
            <option value="all">Select Year</option>
            {[...Array(9)].map((_, idx) => (
              <option key={2016 + idx} value={2016 + idx}>
                {2016 + idx}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="py-10 flex flex-wrap gap-7 justify-center">{showNoOrgsFound ? <h1 className="font-bold">No Organizations Found</h1> : currentOrgs.map((item, idx) => <OrganizationCard key={idx} item={item} />)}</div>
      {showPagination && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </main>
  );
};

export default Organizations;
