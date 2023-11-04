export default async function getDetailUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) return undefined;

  return res.json();
}
