import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import path from "path";
import { parse } from "csv-parse/sync";


export async function GET(req: NextRequest ){
    const {title}: {title: string} = await req.json()
    const filePath = path.join(process.cwd(), 'public', 'gsoc-orgs-with-years.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data: [] = parse(fileContent, { columns: true });
    const Description = data.filter(item => item[title] )
    NextResponse.json(data.Description)
}