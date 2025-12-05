import { NextResponse } from "next/server";
import { ExcuteQuery as query } from "../../../lib/db";

type Body = {
  studentID?: number | string;
  sectionID?: number | string;
  courseID?: number | string;
};

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    const studentID = body.studentID ? Number(body.studentID) : null;
    const sectionID = body.sectionID ? Number(body.sectionID) : null;
    const courseID = body.courseID ? Number(body.courseID) : null;

    if (!studentID) {
      return NextResponse.json({ error: "Missing studentID" }, { status: 400 });
    }

    let targetSectionId = sectionID;

    // If caller provided a courseID instead of a sectionID, pick a section (first open) for that course
    if (!targetSectionId && courseID) {
      const rows = (await query(
        `SELECT Section_ID FROM SECTION WHERE Course_ID = ? LIMIT 1`,
        [courseID]
      )) as { Section_ID: number | string | null }[];
      if (!rows || rows.length === 0) {
        return NextResponse.json(
          { error: "No section found for provided courseID" },
          { status: 404 }
        );
      }
      const rawSectionId = rows[0].Section_ID;
      targetSectionId =
        rawSectionId !== null && rawSectionId !== undefined
          ? Number(rawSectionId)
          : null;
      if (
        typeof targetSectionId === "number" &&
        Number.isNaN(targetSectionId)
      ) {
        return NextResponse.json(
          { error: "Invalid section ID returned from database" },
          { status: 500 }
        );
      }
    }

    if (!targetSectionId) {
      return NextResponse.json(
        { error: "Missing sectionID or courseID" },
        { status: 400 }
      );
    }

    // Check for existing enrollment
    const exists = (await query(
      `SELECT 1 FROM ENROLLMENT WHERE Student_ID = ? AND Section_ID = ? LIMIT 1`,
      [studentID, targetSectionId]
    )) as unknown[];
    if (exists && exists.length > 0) {
      return NextResponse.json(
        { error: "Student already enrolled in this section" },
        { status: 409 }
      );
    }
    // Verify section exists and capacity
    type SectionRow = {
      Capacity: number | string | null;
      Course_ID: number | string | null;
    };
    const sectionRows = (await query(
      `SELECT Capacity, Course_ID FROM SECTION WHERE Section_ID = ? LIMIT 1`,
      [targetSectionId]
    )) as SectionRow[];
    if (!sectionRows || sectionRows.length === 0) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }
    const section = sectionRows[0];

    // If caller provided courseID as well, ensure the section belongs to that course
    if (courseID && Number(section.Course_ID) !== Number(courseID)) {
      return NextResponse.json(
        { error: "Section does not belong to provided courseID" },
        { status: 400 }
      );
    }

    // Check capacity vs current enrollments
    type CountRow = { cnt: number | string | null };
    const enrolledRows = (await query(
      `SELECT COUNT(*) AS cnt FROM ENROLLMENT WHERE Section_ID = ?`,
      [targetSectionId]
    )) as CountRow[];
    const enrolledCount = Number(enrolledRows?.[0]?.cnt ?? 0);
    const capacity = Number(section.Capacity ?? 0);

    if (capacity <= enrolledCount) {
      return NextResponse.json({ error: "Section is full" }, { status: 409 });
    }

    // Insert enrollment with Course_ID and Section_ID
    const insertSql = `
      INSERT INTO ENROLLMENT (Student_ID, Course_ID, Section_ID)
      VALUES (?, ?, ?)
    `;

    type InsertResult = { insertId?: number | string };
    const result = (await query(insertSql, [
      studentID,
      section.Course_ID,
      targetSectionId,
    ])) as InsertResult;

    return NextResponse.json({
      message: "Enrolled successfully",
      enrollmentId: result.insertId ?? null,
    });
  } catch (err: unknown) {
    console.error("Enroll error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Enroll endpoint" });
}
