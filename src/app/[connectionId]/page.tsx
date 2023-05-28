import Image from "next/image";
import { Connection, ConnectionDetailsProps } from "@/types";
import Link from "next/link";
import { getConnectionById, getData } from "@/services";
import ImagesWrapper from "@/components/ImagesWrapper";
import { BsArrowLeft } from "react-icons/bs";

const ConnectionDetails = async (props: ConnectionDetailsProps) => {
  const {
    params: { connectionId },
  } = props;
  const { userName, id, images, followerCount, platform, postCount } =
    await getConnectionById(connectionId);

  return (
    <div>
      <div className=" px-5 py-2 outline w-auto inline-block w-32">
        <Link className="flex items-center gap-2 justify-center" href={`/`}>
          <BsArrowLeft className="inline-block" /> Back
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
