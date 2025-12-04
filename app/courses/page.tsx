"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import AddCourseButton from "../../components/AddCourseButton";
import Filters from "../../components/Filters";
import RegHeader from "../../components/RegHeader";

type Course = {
  id: number;
  code: string;
  title: string;
  course_description: string;
  status: string;
  time: string;
  doctor: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  // initialize loading to true so we don't call setLoading synchronously inside the effect
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses", { signal });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        if (signal.aborted) return;
        setCourses(Array.isArray(data) ? (data as Course[]) : []);
      } catch (err: unknown) {
        if (signal.aborted) return;
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        if (signal.aborted) return;
        setLoading(false);
      }
    }

    fetchCourses();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <RegHeader />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* =========== Sidebar filters =========== */}
          <div className="w-full lg:w-72">
            <Filters />
          </div>

          <div className="max-w-7xl mx-auto w-full">
            <header className="mb-6 flex sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Course Catalog
              </h1>
              <div className="flex items-center gap-3 shrink-0">
                <AddCourseButton />
              </div>
            </header>

            {/* =========== Courses grid ============= */}
            <section className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-full py-12 text-center text-slate-400">
                  Loading courses...
                </div>
              ) : error ? (
                <div className="col-span-full py-12 text-center text-rose-400">
                  Error: {error}
                </div>
              ) : courses.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-400">
                  No courses found.
                </div>
              ) : (
                courses.map((c) => <CourseCard key={c.id} course={c} />)
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
