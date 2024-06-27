import { consumerElecOfferings } from "@/constant";
import { dbConnect } from "@/db"
import { Works } from "@/models/Works"
import { NextResponse } from "next/server"

dbConnect();

export function GET()
{
    const works=[
        'work-1','work-2'
    ]

    return NextResponse.json({works})
}

export async function POST(request){
    try {
        const {heading,bannerPath,industry,services}=await request.json();
        console.log(heading)
        const newWork=new Works({
            heading,bannerPath,industry,services
        })
        console.log(heading);
        await newWork.save();
        return NextResponse.json(newWork,{status:201})
    } catch (error) {
        console.log(error);
    }
}