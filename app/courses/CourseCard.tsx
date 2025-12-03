"use client";

import React from "react";
import { User, Clock } from "lucide-react";

export default function CourseCard({
  course,
}: {
  course: {
    id: number;
    code: string;
    title: string;
    status: string;
    time: string;
    doctor: string;
  };
}) {
  function handleEnroll(id: number) {
    //TODO add enroll logic
    alert(`Enrolled in course with ID: ${id}`);
  }

  function handleJoinWaitlist(id: number) {
    //TODO add join-waitlist logic
    alert(`Joined waitlist for course ID: ${id}`);
  }

  return (
    <div className="bg-slate-800 rounded-lg p-5 shadow flex flex-col justify-between ">
      <div className="text-sm text-cyan-300 flex justify-between">
        <span className="font-semibold">{course.code}</span>

        {course.status === "Open" ? (
          <span className="bg-[#086319bb] text-amber-50 w-15 px-0.5 text-center rounded-full">
            {course.status}
          </span>
        ) : course.status === "Closed" ? (
          <span className="bg-[#511919] text-amber-50 w-15 px-0.5 text-center rounded-full">
            Full
          </span>
        ) : (
          <span className="bg-[#5f3b06be] text-amber-50 w-15 px-0.5 text-center rounded-full">
            {course.status}
          </span>
        )}
      </div>
      <h2 className="mt-2 mb-3 text-xl font-semibold">{course.title}</h2>
      <hr className="mt-4 mb-4 border-slate-600" />
      <p className="mt-2 mb-2 text-sm text-slate-300">
        <User className="inline mr-1" /> {course.doctor}
      </p>
      <p className="mt-2 mb-2 text-sm text-slate-300">
        <Clock className="inline mr-1" /> {course.time}
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
