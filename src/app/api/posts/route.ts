import { NextResponse } from 'next/server';

import { IPost } from '#/types';
import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  const page = url.searchParams.get('page');
  const regex = new RegExp(query!, 'i');

  // console.log('page', url);
  const ITEM_PER_PAGE = 2;
  const username = url.searchParams.get('username');
  let posts: IPost[];
  try {
    await connect();
    let count;
    if (username) {
      posts = await Post.find({ username });
    } else {
      count = await Post.find({ title: { $regex: regex } }).count();
      posts = await Post.find({ title: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (Number(page) - 1));
    }

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of posts DB', { status: 500 });
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
    return new NextResponse('Database of create post Error', { status: 500 });
  }
};
