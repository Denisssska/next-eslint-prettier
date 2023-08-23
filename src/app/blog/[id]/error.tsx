'use client';
import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
