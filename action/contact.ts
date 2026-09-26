// actions/contact.ts
'use server'

import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations/contact'
import db from '@/lib/db'

export async function handleFormSubmission(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const validated = contactSchema.safeParse(rawData)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const { name, email, subject, message } = validated.data

  // Save to DB
  try {
    db.prepare(
      `INSERT INTO contact_submissions (name, email, subject, message)
       VALUES (?, ?, ?, ?)`
    ).run(name, email, subject, message)
  } catch (dbError) {
    console.error('Database error:', dbError)
    return { success: false, error: 'Failed to save message' }
  }

  // Send notification ONLY to yourself
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — skipping email')
    return { success: true }
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['muchirijohn0018@gmail.com'], 
      replyTo: email, 
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
  } catch (emailError) {
    console.error('Email error:', emailError)
  }

  return { success: true }
}