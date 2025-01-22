import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import path from "path";
import { parse } from "csv-parse/sync";


export async function GET(req: NextRequest ){
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title")
    const filePath = path.join(process.cwd(), 'public', 'gsoc-orgs-with-years.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data: any[] = parse(fileContent, { columns: true });
    let Description: string | null = null;


    

    if(!title){
        return NextResponse.json({error: "Title parameter is required"},{status:400});
    }
    
    for (const item of data) {
        if (item.Name === title) {
             Description = item.Description;
             break;
        }
    }
    
    if(Description){
        console.log(Description);
         return NextResponse.json({ Description });
    }else{
        return NextResponse.json({ Description: "No Description found for the given title."}, {status:404});
    }
}