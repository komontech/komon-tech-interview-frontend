import { Connection } from "@/types";

export const getData = async () => {
  const response: Response | void = await fetch(
    "http://localhost:3001/connections",
    {
      //cache: false,
    }
  ).catch((error) => console.error(error));

  const connections = response ? await response.json() : [];

  return connections;
};

export const addConnection = async (item: Connection) => {
  await fetch("http://localhost:3001/connections", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  }).catch((error) => console.error(error));
};

export const updateConnection = async (item: Connection) => {
  const response = await fetch(`http://localhost:3001/connections/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ...item,
    }),
  }).catch((error) => console.error(error));

  const data = await response?.json();
  console.log(data);
};
