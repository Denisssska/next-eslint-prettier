import { NextResponse } from 'next/server';

import { IdParams } from '#/types';
import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (request: Request, { params }: IdParams) => {
  const { id } = params;
  try {
    await connect();
    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};

export const DELETE = async (request: Request, { params }: IdParams) => {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};
