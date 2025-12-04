// app/api/testdb/route.ts
import { NextResponse } from "next/server";
import { ExcuteQuery } from "../../../lib/db";

export async function GET() {
  try {
    const sql = `
       SELECT 
     s.Student_ID,
     CONCAT(s.F_Name,' ', s.L_Name)AS STUDENT_NAME,
     m.Major_Name,
     d.Dept_Name,
     S.CGPA
FROM STUDENT s
     JOIN UNDERGRADUATE u ON s.Student_ID = u.Student_ID
     JOIN MAJOR m ON u.Major_ID = m.Major_ID
     JOIN DEPARTMENT d ON m.Dept_ID = d.Dept_ID
    `;
    const rows = await ExcuteQuery(sql);
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    console.error("DB test error:", err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
