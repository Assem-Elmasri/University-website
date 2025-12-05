"use client";

import React, { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";

export default function AddCourseButton() {
  const [open, setOpen] = useState(false);

  const [instructors, setInstructors] = useState<any[]>([]);

  const [form, setForm] = useState({
    courseName: "",
    hourCredits: "",
    description: "",
    courseLevel: "",
    depId: "",
    year: "",
    semester: "",
    room: "",
    schedule: "",
    capacity: "",
    instructorId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Fetch instructors on modal open
  useEffect(() => {
    if (!open) return;

    const fetchInstructors = async () => {
      try {
        const res = await fetch("/api/instructors", { cache: "no-store" });
        const data = await res.json();
        setInstructors(data || []);
      } catch (err) {
        console.error("Failed to fetch instructors:", err);
      }
    };

    fetchInstructors();
  }, [open]);


  console.log(instructors);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      console.error("Failed to add course");
      return;
    }

    console.log("Added course:", form);

    setOpen(false);
    setForm({
      courseName: "",
      hourCredits: "",
      description: "",
      courseLevel: "",
      depId: "",
      year: "",
      semester: "",
      room: "",
      schedule: "",
      capacity: "",
      instructorId: "",
    });
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-500 text-slate-900 rounded font-semibold hover:bg-cyan-600 flex items-center cursor-pointer
                   px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg transition-colors ml-0.5"
      >
        <PlusCircle className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Add Course
      </button>

      {/* Modal */}
      {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setOpen(false)}
    />

    <form
      onSubmit={handleSubmit}
      className="relative z-10 w-full max-w-2xl bg-slate-800 p-8 rounded-xl shadow-xl max-h-[90vh] overflow-y-auto"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Add New Course</h3>

      {/* GRID 2 COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Course Name */}
        <label className="block text-sm">
          <span className="text-slate-300">Course Name *</span>
          <input
            name="courseName"
            value={form.courseName}
            placeholder="Ex: Introduction to Programming"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Credits */}
        <label className="block text-sm">
          <span className="text-slate-300">Credit Hours *</span>
          <input
            name="hourCredits"
            type="number"
            value={form.hourCredits}
            placeholder="Between 1 - 6"
            onChange={handleChange}
            min="1"
            max="6"
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Course Level */}
        <label className="block text-sm">
          <span className="text-slate-300">Course Level *</span>
          <select
            name="courseLevel"
            value={form.courseLevel}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
            required
          >
            <option value="">Select level</option>
            <option value="1">100 Level</option>
            <option value="2">200 Level</option>
            <option value="3">300 Level</option>
            <option value="4">400 Level</option>
          </select>
        </label>

        {/* Department ID */}
        <label className="block text-sm">
          <span className="text-slate-300">Department *</span>
          <input
            name="depId"
            type="number"
            value={form.depId}
            placeholder="Ex: 5"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Year */}
        <label className="block text-sm">
          <span className="text-slate-300">Academic Year *</span>
          <input
            name="year"
            type="number"
            value={form.year}
            placeholder="Ex: 2025"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Semester */}
        <label className="block text-sm">
          <span className="text-slate-300">Semester *</span>
          <select
            name="semester"
            value={form.semester}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
            required
          >
            <option value="">Choose semester</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </label>

        {/* Room */}
        <label className="block text-sm">
          <span className="text-slate-300">Room *</span>
          <input
            name="room"
            value={form.room}
            placeholder="Ex: Room 204"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Capacity */}
        <label className="block text-sm">
          <span className="text-slate-300">Capacity *</span>
          <input
            name="capacity"
            type="number"
            value={form.capacity}
            placeholder="Ex: 40"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Schedule */}
        <label className="block text-sm md:col-span-2">
          <span className="text-slate-300">Schedule *</span>
          <input
            name="schedule"
            value={form.schedule}
            placeholder="Ex: Sun & Tue - 10:00 AM"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            required
          />
        </label>

        {/* Instructor Select */}
        <label className="block text-sm md:col-span-2">
          <span className="text-slate-300">Instructor *</span>
          <select
            name="instructorId"
            value={form.instructorId}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
            required
          >
            <option value="">Select Instructor</option>
            {instructors.map((inst) => (
              <option key={inst.id} value={inst.id}>
                {inst.name}
              </option>
            ))}
          </select>
        </label>

        {/* Description (full row) */}
        <label className="block text-sm md:col-span-2">
          <span className="text-slate-300">Description</span>
          <textarea
            name="description"
            value={form.description}
            placeholder="Short course description"
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white placeholder-slate-400"
            rows={3}
          />
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded bg-slate-700 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-cyan-500 text-slate-900 font-semibold"
        >
          Add Course
        </button>
      </div>
    </form>
  </div>
)}

    </>
  );
}
