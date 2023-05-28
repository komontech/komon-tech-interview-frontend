import Image from "next/image";
import { Connection, ConnectionDetailsProps } from "@/types";
import Link from "next/link";
import { getConnectionById, getData } from "@/services";
import ImagesWrapper from "@/components/ImagesWrapper";

const ConnectionDetails = async (props: ConnectionDetailsProps) => {
  const {
    params: { connectionId },
  } = props;
  const { userName, id, images, followerCount, platform, postCount } =
    await getConnectionById(connectionId);

  return (
    <div>
      <div className="p-5 outline w-auto inline-block">
        <Link className="" href={`/`}>
          {"<- Back"}
        </Link>
      </div>
      <section className="my-3 flex flex-col gap-2">
        <h2>Details of connection: {userName}</h2>
        <p>{platform}</p>
        <ImagesWrapper images={images} />
      </section>
    </div>
  );
};

export default ConnectionDetails;
