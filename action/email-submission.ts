"use server";

import { db } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleFormSubmission(formData: FormData){
const name = formData.get("name") as string;
const email = formData.get("email") as string;
const subject = formData.get("subject") as string;
const message = formData.get("message") as string;

try{
  const newRecord = await db.clientRequest.create({
    data:{name, email, subject, message }
  });
  await resend.emails.send({
    from:"onboarding@resend.dev",
    to:"muchirijohn0018@gmail.com",
    subject:"testing!",
    text:`Hello ${name}, Thank you for reaching out to me, I will check the specs for the info on ${subject} and will reply to you soon. your project specifications are${message.substring(0,50)}...`,
  });
  return {success:true};
} catch(error){
  console.error("submission error:", error);
  return {success:false}
}
}