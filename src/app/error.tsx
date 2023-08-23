'use client';
import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">click to home page</Link>
      </p>
    </div>
  );
}
