import { AuthOptions, getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';

import User from '@/models/User';

export async function getSession() {
  return await getServerSession(authOptions as AuthOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await User.findOne({
      email: session?.user?.email,
    });
    if (!currentUser) {
      return null;
    }
    console.log(currentUser);

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
