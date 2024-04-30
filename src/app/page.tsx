import { getRandomInt } from "@/utils";

export default async function Home() {
  const res1 = await fetch(process.env.API_BASE_URL + "/todo", {
    next: {
      revalidate: 2,
    },
  });
  const { id: id1 } = await res1.json();

  const res2 = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${getRandomInt(1, 200)}`,
    {
      next: {
        revalidate: 2,
      },
    }
  );
  const { id: id2 } = await res2.json();

  return (
    <main>
      <h1>Fetch Route Handler</h1>
      <span>{id1}</span>

      <h1>Fetch External URL</h1>
      <span>{id2}</span>
    </main>
  );
}
