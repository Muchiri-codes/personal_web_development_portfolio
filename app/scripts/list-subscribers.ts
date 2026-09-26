import db from "@/lib/db"

const rows = db.prepare('SELECT * FROM subscribers ORDER BY id DESC').all()
console.table(rows)