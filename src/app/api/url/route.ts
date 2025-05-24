import { NextResponse } from "next/server";
import { pinata } from "@/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = await pinata.upload.public.createSignedURL({
      expires: 30,
    });
    return NextResponse.json({ url: url }, { status: 200 }); // Returns the signed upload URL
  } catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }
}
