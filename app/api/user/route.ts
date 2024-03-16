import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma=new PrismaClient();

export async function GET() {
    return NextResponse.json({
          email:"rhaul@gmail.com",
          password:"his ieh"
    })
}
export async function POST(req: NextRequest) {
    const body = await req.json();

   const newuser= await prisma.user.create({
        data:{
            Username:body.username,
            password:body.password
        }
    })
    console.log(newuser);

    return NextResponse.json({ username: body.username, password: body.password })
}