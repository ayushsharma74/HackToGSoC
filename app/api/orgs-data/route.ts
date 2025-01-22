import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const technologyFilter = searchParams.get("technology");
    const yearFilter = searchParams.get("year");
    const filePath = path.join(process.cwd(), 'public', 'gsoc-orgs-with-years.csv');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let data: any[] = parse(fileContent, { columns: true });

    // Filter by year
    if (yearFilter && yearFilter !== "all") {
        data = data.filter((item: any) => {
          if (!item.years) {
              return false;
          }
          const years = item.years.split(",").map((year:string) => year.trim());
          return years.includes(yearFilter);
        });
    }
   
   // Filter by technology
    if (technologyFilter && technologyFilter !== "all") {
        data = data.filter((item: any) => {
          if (!item.Technologies) {
                return false;
          }
          const technologies = item.Technologies.split(",").map((tech: string) => tech.trim().toLowerCase());
          return technologies.includes(technologyFilter.toLowerCase());
        });
    }
    
    return NextResponse.json(data);
}