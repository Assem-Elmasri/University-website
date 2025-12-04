import { NextResponse } from "next/server";
import { ExcuteQuery as query } from "../../../lib/db";

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
    LIMIT 12
  `;
  const rows = await query(sql);
  return NextResponse.json(rows);
}
