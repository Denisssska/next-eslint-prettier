import Image from 'next/image';
import { getServerSession } from 'next-auth';

const Profile = async () => {
  const session = await getServerSession();

  return (
    <div>
      <h1> Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image height={100} width={100} alt="profile image" src={session?.user?.image} />
      )}
    </div>
  );
};

export default Profile;
