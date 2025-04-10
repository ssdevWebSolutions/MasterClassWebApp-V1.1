import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const client = await pool.connect();

  try {
    const { name, mail, mobile, password } = await req.json();
    console.log(name, mail, mobile, password ,"route data vachindhi");

    // Check if user already exists
    const existingUser = await client.query(
      'SELECT * FROM users WHERE mobile_number = $1',
      [mobile]
    );

    if (existingUser.rowCount > 0) {
      return NextResponse.json(
        { message: 'User already exists! Please log in instead.', status: 409 },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user
    const newUser = await client.query(
      'INSERT INTO users (name, mailid, mobile_number, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, mail, mobile, hashedPassword]
    );

    const user = newUser.rows[0];

    return NextResponse.json(
      { 
        message: 'Registered successfully!', 
        status: 201, 
        user: user 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { message: 'Server error', status: 500 },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
