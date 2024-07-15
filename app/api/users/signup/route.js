import { Users } from "@/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, position, password } = await request.json();

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const admin = await Users.create({
      name,
      email,
      position,
      password: passwordHash,
    });
    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
