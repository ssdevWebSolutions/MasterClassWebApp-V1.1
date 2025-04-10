import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/lib/token'; 


export async function POST(req) {
  const client = await pool.connect();

  try {
    const { emailOrmobile, password } = await req.json();

    const users = await client.query(
      'SELECT name, mailid, mobile_number, password FROM users WHERE mobile_number = $1 OR mailid = $1',
      [emailOrmobile]
    );

    if (users.rowCount === 0) {
      return NextResponse.json(
        { message: 'User not found! Please register to continue.' },
        { status: 404 }
      );
    }

    const user = users.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = generateToken(user);
      return NextResponse.json(
        {
          message: 'Login Successful',
          user: users.rows[0], 
          token: token,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Incorrect Password or Email/Mobile.' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
