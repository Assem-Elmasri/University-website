"use client";

import { useApp } from "@/context/AppContext";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

type Enrollment = {
  Enrollment_ID: number;
  COURSE_NAME: string;
  HourCredits: number;
  DESCRIPTION: string;
  Course_Level: string;
  DepID: number;
  Course_ID: number;
  Section_ID: number;
};

export default function MyEnrollment() {
  const [enrollment, setEnrollment] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fix: Destructure as an object, not an array
  const { theme, setTheme } = useApp();

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/enrollment", { cache: "no-store" , credentials: 'include' , next: { revalidate: 0 }});
        const data = await res.json();
        setEnrollment(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);


  console.log("Enrollment Data:", enrollment);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-800 dark:text-gray-200 font-display">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 px-6 py-4">
        <div className="flex items-center gap-3 text-gray-900 dark:text-white">
          <h2 className="text-xl font-bold tracking-tight">University Portal</h2>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-200">
                {theme === "light" ? <Moon /> : <Sun />}
            </span>
          </button>

         

        </div>
      </header>

      {/* CONTENT */}
      <main className="p-6 max-w-5xl mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white">
          My Enrollment
        </h1>

        {/* TABLE */}
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-background-dark shadow-md">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-white/5">
              <tr>
                <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Course
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-400 hidden md:table-cell">
                  Level
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-400 text-center">
                  Credits
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-400 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-white/10">
              {loading ? (
                <tr>
                  <td className="px-4 py-4 text-center text-gray-500" colSpan={5}>
                    Loading...
                  </td>
                </tr>
              ) : enrollment.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-center text-gray-500" colSpan={5}>
                    No enrollments found
                  </td>
                </tr>
              ) : (
                enrollment && Array.isArray(enrollment) &&
                enrollment?.map((e) => (
                  <tr key={e.Enrollment_ID}>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {e.COURSE_NAME}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {e.DESCRIPTION}
                      </p>
                    </td>

                    <td className="px-4 py-4 hidden md:table-cell text-gray-600 dark:text-gray-300">
                      {e.Course_Level}
                    </td>

                    <td className="px-4 py-4 text-center font-mono text-gray-900 dark:text-white">
                      {e.HourCredits}
                    </td>

                    <td className="px-4 py-4 text-right">
                      <div className="flex justify-end gap-2">

                        <button onClick={
                            async ()=>{
                                try {
                                    const res = await fetch('/api/enrollment', {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ Enrollment_ID: e.Enrollment_ID }),
                                    });

                                    if (!res.ok) {
                                        throw new Error('Failed to delete enrollment');
                                    }

                                    const data = await res.json();
                                    console.log(data);
                                    window.location.reload();
                                } catch (error) {
                                    console.error('Failed to delete enrollment:', error);
                                }
                            }
                        } className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}