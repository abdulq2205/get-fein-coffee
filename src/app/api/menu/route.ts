import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'menu.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read menu data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update menu data' }, { status: 500 });
  }
}
