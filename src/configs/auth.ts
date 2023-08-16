import bcrypt from 'bcrypt';

import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/User';
import connect from '@/utils/db';

import type { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials?.email,
          });
          console.log(user);
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials?.password!, user.password);

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
};
