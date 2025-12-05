// app/api/enrollment/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ExcuteQuery as query } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const studentId = req.cookies.get("token")?.value;
    const sql = `
      SELECT 
        e.Enrollment_ID,
        c.COURSE_NAME,
        c.HourCredits,
        c.DESCRIPTION,
        c.Course_Level,
        c.DepID,
        c.Course_ID,
        s.Section_ID
      FROM ENROLLMENT e
      JOIN COURSE c ON e.Course_ID = c.Course_ID
      JOIN SECTION s ON e.Section_ID = s.Section_ID
      WHERE e.Student_ID = ?;
    `;
    const rows = await query(sql, [studentId]);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch enrollment data." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { Enrollment_ID } = body;
    const sql = `DELETE FROM ENROLLMENT WHERE Enrollment_ID = ?`;
    await query(sql, [Enrollment_ID]);
    return NextResponse.json({ message: "Enrollment deleted successfully." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete enrollment." }, { status: 500 });
  }
}
