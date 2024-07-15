import { Users } from "@/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { name, email, position, password } = await request.json();
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json("User dose not exist", { status: 404 });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json("password is incorrect", { status: 404 });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
