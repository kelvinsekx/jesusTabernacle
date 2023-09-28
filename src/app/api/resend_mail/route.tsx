import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {name, email, subject, phone_number, message} = await request.json()
 
  try {
    const data = await resend.emails.send({
      from: email,
      to: 'kelvinsekx@gmail.com',
      subject,
      react: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}