import { getData } from "@/services";
import ConnectionsList from "../components/ConnectionsList";
import AddConnection from "@/components/AddConnection";

const Home = async () => {
  const connections = await getData();

  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="w-full px-20 ">
        <h1 className="h1">Social media connections dashboard</h1>
        <div className="flex justify-end">
          <AddConnection />
        </div>

        <ConnectionsList connections={connections} />
      </div>
    </main>
  );
};

export default Home;
