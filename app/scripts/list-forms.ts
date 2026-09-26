import db from "@/lib/db"

const rows = db.prepare('SELECT * FROM contact_submissions ORDER BY id DESC').all()
console.table(rows)