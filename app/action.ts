"use server";
import { Contact } from '../components/Contact'
import { connectDB } from "../lib/db";
import {revalidatePath} from 'next/cache';


export async function submitToMongo (formData:formData){
  try {
    await connectDB();
    const rawFormData = {
      name:formData.get('name'),
      email:formData.get('email'),
      subject:formData.get('subject'),
      message:formData.get('message')
    };

    await Contact.create(rawFormData);
    revalidatePath('/');
    return{success:true};
  } catch (e) {
    console.error(e);
    return{success:false}
  }
}