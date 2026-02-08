export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_API_URL = process.env.NEXT_BASE_API_URL;
export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store",
  });
  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (error) {
      console.error(error);
    }
    throw new Error(errorMessage);
  }
  return res.json();
}
