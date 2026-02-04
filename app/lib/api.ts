const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: { "content-type": "application/json" },
    body: {},
  });
  return res.json();
}
