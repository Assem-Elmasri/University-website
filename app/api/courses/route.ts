import { NextResponse } from "next/server";
import { ExcuteQuery as query } from "../../../lib/db";
import { ResultSetHeader } from "mysql2/promise";

export async function GET() {
  const sql = `
    SELECT
      c.COURSE_ID AS id,
      c.COURSE_NAME AS code,
      c.DESCRIPTION AS course_description,
      s.Section_ID,
      s.Year,
      s.Semester,
      s.Room,
      s.Schedule AS time,
      'Open' AS status,
      CONCAT(i.F_name, ' ', i.L_name) AS doctor
    FROM COURSE c
    JOIN SECTION s ON c.COURSE_ID = s.Course_ID
    JOIN INSTRUCTOR i ON s.Instructor_ID = i.Instructor_ID
  `;
  const rows = await query(sql);
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const {
    courseName,
    hourCredits,
    description,
    courseLevel,
    depId,
    year,
    semester,
    room,
    schedule,
    capacity,
    instructorId,
  } = await request.json();

  if (!courseName || !hourCredits || !courseLevel || !depId) {
    return NextResponse.json({ error: "Missing required course fields" }, { status: 400 });
  }


  
  const hour = Number(hourCredits);
  const dep = Number(depId);
  const yearNum = Number(year);
  const capacityNum = Number(capacity);

  const sql1 = `
    INSERT INTO COURSE (COURSE_NAME, HourCredits, DESCRIPTION, Course_Level, DepID)
    VALUES (?, ?, ?, ?, ?);
  `;

  const result = await query<ResultSetHeader>(sql1, [
    courseName,
    hour,
    description,
    courseLevel,
    dep,
  ]);

  const insertedCourseId = result.insertId;

  const sql2 = `
    INSERT INTO SECTION (Course_ID, Year, Semester, Room, Schedule, Capacity, Instructor_ID)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  await query(sql2, [
    insertedCourseId,
    yearNum,
    semester,
    room,
    schedule,
    capacityNum,
    instructorId , 
  ]);

  return NextResponse.json({ message: "Course added successfully" });
}
