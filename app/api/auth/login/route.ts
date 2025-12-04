import { ExcuteQuery } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { studentID, password } = await request.json();
    const filterdPassword = password.toString().trim().split("-")[1];
    const name = password.toString().trim().split("-")[0]; 
  const sql = `
    SELECT *
    FROM STUDENT
    WHERE Student_ID = ? AND Student_ID = ? AND F_name = ?;
  `;
  console.log(studentID, filterdPassword , name);
  const rows = await ExcuteQuery(sql, [studentID, filterdPassword , name]);
    if (rows) {
      return NextResponse.json({ ok: true, rows });
    } else {
      return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
    }
}