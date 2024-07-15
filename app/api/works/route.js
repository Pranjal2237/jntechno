import { consumerElecOfferings } from "@/constant";
import { dbConnect } from "@/db"
import { Works } from "@/models/Works"
import { NextResponse } from "next/server"

dbConnect();

export async function GET(request)
{
    try {
        const query=request.nextUrl.searchParams;
        const page=query.get('page');
        const numberOfPage=6;
        const total=await Works.find().countDocuments();
        const works=await Works.find().limit(numberOfPage).skip(numberOfPage*(page-1));
        const newWorks={total,works}
        console.log(newWorks);
        return NextResponse.json(newWorks,{status:200})
    } catch (error) {
        
    }
}

export async function POST(request){
    try {
        const {heading,bannerPath,industry,services,overview,challenges,benifits}=await request.json();
        const newWork=new Works({
            heading,bannerPath,industry,services,overview,challenges,benifits
        })
        await newWork.save();
        return NextResponse.json(newWork,{status:201})
    } catch (error) {
        console.log(error);
    }
}