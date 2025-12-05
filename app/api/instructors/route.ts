import { NextResponse } from "next/server";
import { ExcuteQuery as query } from "../../../lib/db";
export async function GET() {
  const sql = `
    select Instructor_ID as id,
		concat(F_name," ",L_name) as name,
        Email as email
 from instructor
  `;
  const rows = await query(sql);
  return NextResponse.json(rows);
}