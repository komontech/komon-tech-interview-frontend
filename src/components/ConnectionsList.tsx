import Link from "next/link";
import MOCK from "../data/connections.json";

const ConnectionsList = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {MOCK?.connections?.map(
        ({ connectionName, id, followerCount, platform, postCount }) => {
          return (
            <div key={id} className="border border-gray-300 rounded-lg p-4">
              <h2>{connectionName}</h2>
              <h4>{platform}</h4>
              <p>Followers: {followerCount}</p>
              <p>Posts: {postCount}</p>
              <Link href={`/${id}`}>Details</Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ConnectionsList;
