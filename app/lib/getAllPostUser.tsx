export default async function getAllPostUser(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    { cache: "force-cache" }
  );

  if (!res.ok) return undefined;

  return res.json();
}
