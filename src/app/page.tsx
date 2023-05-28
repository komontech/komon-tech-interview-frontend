"use client";
import ConnectionsList from "../components/ConnectionsList";
import AddConnection from "@/components/AddConnection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>Social media connections</h1>
        <AddConnection />
        <ConnectionsList />
      </div>
    </main>
  );
};

export default Home;
