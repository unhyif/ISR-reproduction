export default async function Home() {
  const res = await fetch(process.env.API_BASE_URL + "/todos", {
    next: {
      revalidate: 2,
    },
  });
  const { id } = await res.json();
  return <span>{id}</span>;
}
