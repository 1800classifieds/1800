import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"
import { hashPassword } from "@/lib/auth/password"
import { createSession } from "@/lib/auth/session"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Hash password
    const passwordHash = await hashPassword(password)

    // Insert user
    const result = await query("INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)", [
      email,
      passwordHash,
      name || null,
    ])

    // Get the inserted user ID
    const userId = (result as any).insertId

    // Create session
    await createSession({
      id: userId.toString(),
      email,
      name: name || undefined,
    })

    return NextResponse.json({
      success: true,
      user: {
        id: userId,
        email,
        name,
      },
    })
  } catch (error: any) {
    console.error("Signup error:", error)

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 })
    }

    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}
