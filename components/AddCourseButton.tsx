"use client";
import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function AddCourseButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ code: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO add Submit logic
    // 7ot el logic hena 3ashan t3ml add course //23taked momken nkhaleha enroll course bdal add corse
    console.log("Add course:", form);
    setOpen(false);
    setForm({ code: "" });
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
            className="relative z-10 w-full max-w-md bg-slate-800 p-6 rounded shadow"
          >
            <h3 className="text-lg font-semibold mb-4">New Course</h3>

            {
              //TODO add auto compltion or suggestion for course code
            }
            <label className="block mb-2 text-sm">
              <span className="text-slate-300">Code</span>
              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                className="mt-1 block w-full rounded px-3 py-2 bg-slate-700 text-white"
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
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
