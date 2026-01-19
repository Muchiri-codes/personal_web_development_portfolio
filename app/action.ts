"use server";

import { Inquiry } from './models/contactSchema'; 
import { connectDB } from "../lib/db";
import { revalidatePath } from 'next/cache';

export async function submitToMongo (prevState: any, formData: FormData) {
  try {
    await connectDB();
    
    // Extract data safely
    const rawFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    // 3. Use the imported 'Inquiry' model
    await Inquiry.create(rawFormData);
    
    revalidatePath('/');
    return { success: true };
  } catch (e) {
    console.error("Submission Error:", e);
    return { success: false };
  }
}