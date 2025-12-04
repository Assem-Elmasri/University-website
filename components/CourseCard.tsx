"use client";

import React from "react";
import { User, Clock } from "lucide-react";

export default function CourseCard({
  course,
}: {
  course: {
    id: number;
    code?: string;
    title?: string;
    course_description?: string;
    status?: string;
    time?: string;
    doctor?: string;
  };
}) {
  const displayTitle = course.title ?? course.code ?? `Course ${course.id}`;
  const idLabel = `#${course.id}`;
  function handleEnroll(id: number) {
    //TODO add enroll logic
    alert(`Enrolled in course with ID: ${id}`);
  }

  function handleJoinWaitlist(id: number) {
    //TODO add join-waitlist logic
    alert(`Joined waitlist for course ID: ${id}`);
  }

  return (
    <div className="bg-slate-800 rounded-lg p-5 shadow flex flex-col justify-between">
      {/* Header: id label + status badge */}
      <div className="flex items-start justify-between">
        <span className="text-xs text-cyan-400 font-medium tracking-wide">
          {course.id}
        </span>
        {course.status === "Open" ? (
          <span className="text-xs bg-green-700/80 text-white px-3 py-0.5 rounded-full">
            {course.status}
          </span>
        ) : course.status === "Closed" ? (
          <span className="text-xs bg-red-800/80 text-white px-3 py-0.5 rounded-full">
            Full
          </span>
        ) : (
          <span className="text-xs bg-amber-700/80 text-white px-3 py-0.5 rounded-full">
            {course.status}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white leading-snug">
        {displayTitle}
      </h2>

      <hr className="my-4 border-slate-600" />

      {/* Description (if available) */}
      {course.course_description && (
        <p className="text-sm text-slate-400 mb-3">
          {course.course_description}
        </p>
      )}

      {/* Doctor */}
      <p className="flex items-center text-sm text-slate-300 mb-2">
        <User className="w-4 h-4 mr-2" /> {course.doctor}
      </p>

      {/* Time */}
      <p className="flex items-center text-sm text-slate-300">
        <Clock className="w-4 h-4 mr-2" /> {course.time}
      </p>

      {course.status === "Open" ? (
        <button
          onClick={() => handleEnroll(course.id)}
          className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 cursor-pointer"
        >
          Enroll
        </button>
      ) : course.status === "Waitlist" ? (
        <button
          onClick={() => handleJoinWaitlist(course.id)}
          className="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 cursor-pointer"
        >
          Join Waitlist
        </button>
      ) : (
        <button
          disabled
          className="mt-4 w-full bg-slate-700 text-slate-400 py-2 rounded cursor-not-allowed opacity-60"
        >
          {course.status === "Closed" ? "Full" : course.status}
        </button>
      )}
    </div>
  );
}
