import { Works } from "@/models/Works";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    try {
        const {workID}=params;
        const work=await Works.findById(workID);
        return NextResponse.json(work,{status:200})
    } catch (error) {
        console.log(error);
    }
}