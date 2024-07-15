import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const {pictures,formdata}=await request.formData();
        console.log("pictures",pictures);
        console.log("data",formdata)
        return NextResponse.json({status:201})
    } catch (error) {
        console.log(error)
    }
}