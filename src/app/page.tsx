import ConnectionsList from "../components/ConnectionsList";
import AddConnection from "@/components/AddConnection";

export async function getData() {
  const response: Response | void = await fetch(
    "http://localhost:3001/connections"
  ).catch((error) => console.error(error));

  const connections = response ? await response.json() : [];

  return connections;
}

const Home = async () => {
  const connections = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>Social media connections</h1>
        <AddConnection />
        <ConnectionsList connections={connections} />
      </div>
    </main>
  );
};

export default Home;
