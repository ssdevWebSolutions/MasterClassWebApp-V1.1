import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    console.log(result);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(result.rows);
  } finally {
    client.release();
  }
}
