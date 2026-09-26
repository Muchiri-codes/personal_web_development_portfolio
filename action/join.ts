'use server'

import { joinSchema } from '@/lib/validations/join'
import db from '@/lib/db'

export async function joinWaitlist(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
  }

  const validated = joinSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.flatten().fieldErrors,
    }
  }

  const { name, email } = validated.data

  try {
    // Optional: prevent duplicate emails
    const exists = db
      .prepare('SELECT id FROM subscribers WHERE email = ?')
      .get(email)

    if (exists) {
      return { success: false, error: 'This email is already registered.' }
    }

    db.prepare(
      `INSERT INTO subscribers (name, email) VALUES (?, ?)`
    ).run(name, email)
  } catch (dbError) {
    console.error('Database error:', dbError)
    return { success: false, error: 'Something went wrong. Try again.' }
  }

  return { success: true }
}