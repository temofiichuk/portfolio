import EmailTemplate from "@/components/ContactForm/EmailTamplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const { name, email, message } = await req.json();
	try {
		const { data: emailResponse, error } = await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: "testforworkit@gmail.com",
			subject: "Contact",
			react: EmailTemplate({ name, email, message }),
			text: "Portfolio",
		});

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}
		return NextResponse.json(emailResponse);
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
