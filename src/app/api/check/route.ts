import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    runtime: process.versions?.node ? 'Node.js' : 'Edge',
    nodeVersion: process.versions?.node || 'N/A',
  });
}
