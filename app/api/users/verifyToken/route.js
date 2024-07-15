import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    let token =await request.headers.get("authorization");

    if (!token) {
      return NextResponse.json("Access denied",{status:404})
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const userVerified={...verified,haveLogin:true}
    
    return NextResponse.json(userVerified,{status:200});
  } catch (error) {
    console.log(error);
  }
}
