"use client";
import { Moon, Sun, Bell, UserCircle } from "lucide-react";
import { useApp } from "../context/AppContext";
import React from "react";

const Header = () => {
  const { theme, setTheme } = useApp();
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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#224249] px-2 sm:px-6 md:px-20 py-3 mb-3.5 ">
        <div className="flex items-center gap-2 sm:gap-4 text-gray-900 dark:text-white">
          <h2 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
            University
          </h2>
        </div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-9">
            <a
              className="text-sm font-medium leading-normal hover:text-primary transition-colors hover:font-bold"
              href="#"
            >
              Dashoard
            </a>
            <a
              className="text-sm font-medium leading-normal hover:text-primary transition-colors hover:font-bold"
              href="#"
            >
              My Courses
            </a>
            <a
              className="text-sm font-medium leading-normal hover:text-primary transition-colors hover:font-bold"
              href="#"
            >
              Grades
            </a>
            <a
              className="text-sm font-medium leading-normal hover:text-primary transition-colors mr-20 hover:font-bold"
              href="#"
            >
              Calendar
            </a>
          </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex gap-2">
          <button className="hidden sm:flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10  bg-gray-100 dark:bg-[#224249] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-[#315f68] transition-colors">
            <span className="truncate"><Bell /></span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-[#224249] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-[#315f68] transition-colors">
            <span className="material-symbols-outlined" onClick={toggleTheme}>
              {theme === "light" ? <Moon /> : <Sun />}
            </span>
          </button>
          <button className="hidden max-w-[480px] sm:flex  cursor-pointer items-center justify-center rounded-full   bg-gray-100 dark:bg-[#224249] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 hover:bg-gray-200 dark:hover:bg-[#315f68] transition-colors">
            <span className="truncate"><UserCircle className="w-10"/></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
