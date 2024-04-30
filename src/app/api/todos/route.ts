export async function GET() {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${getRandomInt(1, 200)}`
  );
  const { id } = await res.json();
  return Response.json({
    id,
  });
}
