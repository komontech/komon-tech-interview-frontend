import Image from "next/image";
import { getData } from "../page";
import { Connection, ConnectionDetailsProps } from "@/types/intex";

const ConnectionDetails = async (props: ConnectionDetailsProps) => {
  const connections = await getData();
  console.log(connections);
  const {
    params: { connectionId },
  } = props;

  const { connectionName, id, images, followerCount, platform, postCount } =
    connections?.find((item: Connection) => item?.id === connectionId) || {};
  return (
    <div>
      <h2>Details of connection: {connectionName}</h2>
      <p>{platform}</p>
      <div className="flex gap-2 flex-wrap py-3 px-2">
        {images?.map((img: { url: string }) => {
          return (
            <Image
              key={id + img.url}
              src={img.url}
              alt={connectionName + ": cat picture"}
              width={320}
              height={240}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionDetails;
