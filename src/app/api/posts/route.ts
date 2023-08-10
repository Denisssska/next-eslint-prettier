import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  try {
    await connect();
    // const posts = await Post.find({ username });
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
