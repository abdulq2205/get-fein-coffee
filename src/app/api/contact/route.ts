import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    // Simulate database insertion or email processing
    console.log("Received contact form submission:", formData.get('email'));
    
    // In a real application, we would send an email via Resend/SendGrid here
    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
