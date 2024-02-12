import { sendMail } from "@/service/mail.service"
import { NextRequest, NextResponse } from "next/server"

 
export async function POST(request: NextRequest) {
    try {
        sendMail(await request.json());
        return NextResponse.json({ message: "Success!", status: 200 })
      } catch (err) {
        return NextResponse.json({ message: "Failed!", status: 500 })
      }
}