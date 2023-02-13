export async function fetchData(): Promise<{ id: string; data: string }[]> {
  const res = await fetch(
    `https://6379a8d47419b414df91a861.mockapi.io/generate/`
  );

  if (!res.ok) throw new Error(res.statusText);
  const text = await res.text();
  return text ? JSON.parse(text) : {};
}
