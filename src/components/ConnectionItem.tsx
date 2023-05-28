import { Connection } from "@/types/intex";
import Link from "next/link";

const ConnectionItem = ({
  connectionName,
  id,
  followerCount,
  platform,
  postCount,
  images,
}: Connection) => {
  return (
    <div key={id} className="border border-gray-300 rounded-lg p-4">
      <h2>{connectionName}</h2>
      <h4>{platform}</h4>
      <p>Followers: {followerCount}</p>
      <p>Posts: {postCount}</p>
      <Link href={`/${id}`}>Details</Link>
    </div>
  );
};

export default ConnectionItem;
