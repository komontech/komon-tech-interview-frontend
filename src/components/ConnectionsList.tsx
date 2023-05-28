import Link from "next/link";
import { Connection } from "@/types/intex";
import ConnectionItem from "./ConnectionItem";

const ConnectionsList = ({ connections }: { connections: Connection[] }) => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {connections?.map((connection: Connection) => {
        return <ConnectionItem key={connection.id} {...connection} />;
      })}
    </div>
  );
};

export default ConnectionsList;
