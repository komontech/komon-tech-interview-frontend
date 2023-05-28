import { getData } from "@/services";
import ConnectionsList from "../components/ConnectionsList";
import AddConnection from "@/components/AddConnection";

const Home = async () => {
  const connections = await getData();

  return (
    <div className="w-full px-20 ">
      <div className="flex justify-end">
        <AddConnection />
      </div>

      <ConnectionsList connections={connections} />
    </div>
  );
};

export default Home;
