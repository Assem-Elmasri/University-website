"use client";
import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function AddCourseButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
  courseName: '',
  hourCredits: '',
  description: '',
  courseLevel: '',
  depId: ''
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log("Add course:", form);
    setOpen(false);
    setForm({
      courseName: '',
      hourCredits: '',
      description: '',
      courseLevel: '',
      depId: ''
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-500 text-slate-900 rounded font-semibold hover:bg-cyan-600 flex items-center cursor-pointer
                   px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg transition-colors ml-0.5"
      >
        <PlusCircle className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Add Course
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
  <div
    className="absolute inset-0 bg-black/50"
    onClick={() => setOpen(false)}
  />
  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-md bg-slate-800 p-6 rounded shadow max-h-[90vh] overflow-y-auto"
  >
    <h3 className="text-lg font-semibold mb-4">New Course</h3>

    <label className="block mb-3 text-sm">
      <span className="text-slate-300">Course Name *</span>
      <input
        name="courseName"
        value={form.courseName}
        onChange={handleChange}
        className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
        maxLength={50}
        required
      />
    </label>


    <label className="block mb-3 text-sm">
      <span className="text-slate-300">Credit Hours *</span>
      <input
        name="hourCredits"
        type="number"
        value={form.hourCredits}
        onChange={handleChange}
        className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
        min="0"
        required
      />
    </label>

    <label className="block mb-3 text-sm">
      <span className="text-slate-300">Description</span>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
        maxLength={50}
        rows={2}
      />
    </label>

    <label className="block mb-3 text-sm">
      <span className="text-slate-300">Course Level *</span>
      <select
        name="courseLevel"
        value={form.courseLevel}
        onChange={handleChange}
        className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
        required
      >
        <option value="">Select level</option>
        <option value="Undergraduate">Undergraduate</option>
        <option value="Graduate">Graduate</option>
        <option value="Postgraduate">Postgraduate</option>
      </select>
    </label>

    <label className="block mb-4 text-sm">
      <span className="text-slate-300">Department ID *</span>
      <input
        name="depId"
        type="number"
        value={form.depId}
        onChange={handleChange}
        className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
        min="1"
        required
      />
    </label>

    <div className="flex justify-end gap-2">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="px-3 py-2 rounded bg-slate-700"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-3 py-2 rounded bg-cyan-500 text-slate-900"
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
