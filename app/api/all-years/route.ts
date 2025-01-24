// app/api/all-years/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'public', 'gsoc_orgs_json');
        const filenames = fs.readdirSync(jsonDirectory);

        const years = filenames
            .filter(filename => filename.endsWith('.json') && /^\d{4}\.json$/.test(filename))
            .map(filename => parseInt(filename.slice(0, 4)))
            .sort((a, b) => a - b); // Sort the years in ascending order

        return NextResponse.json({ years });
    } catch (error: any) {
        console.error("Failed to read years:", error);
        return NextResponse.json({ error: "Failed to load available years." }, { status: 500 });
    }
}