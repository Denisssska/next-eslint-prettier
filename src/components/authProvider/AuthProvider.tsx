'use client';

import { SessionProvider } from 'next-auth/react';

import { ClientOnlyProps } from '#/types';

const AuthProvider: React.FC<ClientOnlyProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
