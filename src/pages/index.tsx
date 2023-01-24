import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function MyApp() {
  return (
    <div>
      <Head>
        <title>Komon Tech Interview Frontend</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Komon Tech Interview Frontend
        </h1>
      </main>

      <footer></footer>
    </div>
  );
}
