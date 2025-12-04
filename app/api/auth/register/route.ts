
import { ExcuteQuery as query } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const queryStr = `
    INSERT INTO student ( F_name,L_name,Gender,DOB,Address,PHONE_NUMBER,Email,Hours_Registerd,CGPA,Leader_ID)
    VALUES ( ?, ?, ?, ?, ?, ?, ?, 0, 0.0, NULL);
    `;
    const {firstName,lastName,gender,dob,address,phoneNumber,email} = await request.json();
    const result = await query(queryStr, [firstName,lastName,gender,dob,address,phoneNumber,email]);
    return NextResponse.json({ message: "User registered", result });
}