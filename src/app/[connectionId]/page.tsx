import Image from "next/image";
import { getData } from "../page";
import { Connection, ConnectionDetailsProps } from "@/types/intex";
import Link from "next/link";

const ConnectionDetails = async (props: ConnectionDetailsProps) => {
  const connections = await getData();

  const {
    params: { connectionId },
  } = props;

  const { connectionName, id, images, followerCount, platform, postCount } =
    connections?.find((item: Connection) => item?.id === connectionId) || {};
  return (
    <div>
      <div className="p-5 outline w-auto inline-block">
        <Link className="" href={`/`}>
          {"<- Back"}
        </Link>
      </div>
      <section className="my-3 flex flex-col gap-2">
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
      </section>
    </div>
  );
};

export default ConnectionDetails;
