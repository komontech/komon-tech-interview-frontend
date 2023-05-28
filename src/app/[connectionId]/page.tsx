import Image from "next/image";
import MOCK from "../../data/connections.json";

interface ConnectionDetailsProps {
  params: {
    connectionId: string;
  };
}

const ConnectionDetails = (props: ConnectionDetailsProps) => {
  const {
    params: { connectionId },
  } = props;
  const { connectionName, id, images, followerCount, platform, postCount } =
    MOCK.connections?.find((item) => item?.id === connectionId) || {};
  return (
    <div>
      <h2>Details of connection: {connectionName}</h2>
      <p>{platform}</p>
      <div className="flex gap-2 flex-wrap py-3 px-2">
        {images?.map((img) => {
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
