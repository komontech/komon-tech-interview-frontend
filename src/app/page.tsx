import ConnectionsList from "../components/ConnectionsList";
import AddConnection from "@/components/AddConnection";

export async function getData() {
  const response: Response | void = await fetch(
    "http://localhost:3001/connections",
    {
      //cache: false,
    }
  ).catch((error) => console.error(error));

  const connections = response ? await response.json() : [];

  return connections;
}

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
