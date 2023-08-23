import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Image fill src={'/404.jpg'} alt={'image'} />
      <Link href="/">Return Home</Link>;
    </>
  );
};

export default NotFound;
