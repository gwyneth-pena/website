import { sendMail } from "@/service/mail.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await sendMail(await request.json()).then((response: any) => {
      console.log(response);
    });
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
