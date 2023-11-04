export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("fetch detail user error");

  return res.json();
}
