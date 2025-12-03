"use client";

import React from "react";

export default function CourseCard({
  course,
}: {
  course: { id: number; code: string; title: string; status: string };
}) {
  function handleEnroll(id: number) {
    //TODO add enroll logic
    alert(`Enrolled in course with ID: ${id}`);
  }

  return (
    <article className="bg-slate-800 rounded-lg p-5 shadow">
      <div className="text-sm text-cyan-300 font-semibold">
        {course.code}{" "}
        <span className="ml-2 text-xs bg-slate-700 px-2 rounded">
          {course.status}
        </span>
      </div>
      <h2 className="mt-2 text-xl font-semibold">{course.title}</h2>
      <button
        onClick={() => handleEnroll(course.id)}
        className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 cursor-pointer"
      >
        Enroll
      </button>
    </article>
  );
}
