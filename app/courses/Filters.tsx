"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
export default function Filters() {
  const [q, setQ] = useState("");

  const departmentsList = [
    { Id: 1, Name: "Computer Science" },
    { Id: 2, Name: "History" },
    { Id: 3, Name: "Mathematics" },
    { Id: 4, Name: "FCDS" },
  ];

  // initialize departments map with explicit booleans to avoid uncontrolled -> controlled
  const initialDepartments: Record<string, boolean> = departmentsList.reduce(
    (acc, d) => {
      const key = d.Name.toLowerCase().split(" ")[0];
      acc[key] = false;
      return acc;
    },
    {} as Record<string, boolean>
  );

  const [departments, setDepartments] =
    useState<Record<string, boolean>>(initialDepartments);

  // states for collapsible sections
  const [openDepartment, setOpenDepartment] = useState(false);
  const [openSemester, setOpenSemester] = useState(false);
  const [openLevel, setOpenLevel] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  // department selection
  const toggleDept = (key: string) =>
    setDepartments((s) => ({ ...s, [key]: !s[key] }));

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-20">
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 text-slate-100">Filters</h3>
            {
              //TODO adding filtering functionality like filtering or collapsing the filter boxs
            }
          <div className="mb-4">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by course name or code"
              className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300 placeholder-slate-500"
            />
          </div>

          <div className="mb-4">
            <div className="rounded-md overflow-hidden border border-slate-700">
              <button onClick={() => setOpenDepartment((s) => !s)} className="w-full flex items-center justify-between px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-300">
                <span>Department </span>
                <span className="text-slate-400">
                  {openDepartment ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <div className="px-4 py-3 bg-slate-900 space-y-3">
                {departmentsList.map((c) => {
                  const key = c.Name.toLowerCase().split(
                    " "
                  )[0] as keyof typeof departments;
                  return (
                    <label
                      key={c.Id}
                      className="flex items-center gap-3 text-slate-100"
                    >
                      <input
                        type="checkbox"
                        checked={departments[key]}
                        onChange={() => toggleDept(key)}
                        className="w-4 h-4 bg-gray-700 border-2 border-slate-300 rounded-sm accent-red-500"
                      />
                      <span className="select-none">{c.Name}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setOpenSemester((s) => !s)}
              className="w-full flex items-center justify-between px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-300"
            >
              <span>Semester</span>
              <span className="text-slate-400">{openSemester ? <ChevronUp /> : <ChevronDown />}</span>
            </button>

            <button
              type="button"
              onClick={() => setOpenLevel((s) => !s)}
              className="w-full flex items-center justify-between px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-300"
            >
              <span>Course Level</span>
              <span className="text-slate-400">{openLevel ? <ChevronUp /> : <ChevronDown />}</span>
            </button>

            <button
              type="button"
              onClick={() => setOpenTime((s) => !s)}
              className="w-full flex items-center justify-between px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-300"
            >
              <span>Day/Time</span>
              <span className="text-slate-400">{openTime ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
