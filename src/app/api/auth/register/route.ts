import bcrypt from 'bcrypt';

import { NextResponse } from 'next/server';

import User from '@/models/User';
import connect from '@/utils/db';

export const POST = async (request: Request) => {
  const { name, email, image, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    image,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
