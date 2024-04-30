import { getRandomInt } from "@/utils";

export async function GET() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${getRandomInt(1, 200)}`
  );
  const { id } = await res.json();
  return Response.json({
    id,
  });
}
