"use client";
import { Moon , Sun } from "lucide-react";
import { useApp } from "../context/AppContext";
import React from "react";

const Header = () => {
    const { theme , setTheme } = useApp();
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
    console.log(theme);
  }


  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#224249] px-4 sm:px-6 md:px-10 py-3">
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="flex items-center gap-2 sm:gap-4 text-gray-900 dark:text-white">
          <h2 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
            University
          </h2>
        </div>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-9">
          <a
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Academics
          </a>
          <a
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Admissions
          </a>
          <a
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Campus Life
          </a>
          <a
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Research
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-gray-400 dark:text-[#90c1cb] flex border-none bg-gray-100 dark:bg-[#224249] items-center justify-center pl-4 rounded-l-lg border-r-0"></div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-[#224249] focus:border-none h-full placeholder:text-gray-400 dark:placeholder:text-[#90c1cb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search"
              defaultValue=""
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#102023] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Apply Now</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-[#224249] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-[#315f68] transition-colors">
            <span className="material-symbols-outlined" onClick={toggleTheme}>
              {theme === "light" ? <Moon /> : <Sun />}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
