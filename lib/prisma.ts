import { PrismaClient } from '@/prisma/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// 1. Setup your connection pool
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
})

// 2. Create the adapter
const adapter = new PrismaPg(pool)

// 3. Pass the adapter as the required 'options' argument
export const db =
  globalForPrisma.prisma || 
  new PrismaClient({ adapter }) // <--- This 'options' object is now mandatory

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db