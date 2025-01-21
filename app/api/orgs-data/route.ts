import { NextResponse } from "next/server";
import fs from "fs"
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'gsoc-orgs-with-years.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = parse(fileContent, { columns: true });
    console.log(data);
    return NextResponse.json(data);
}