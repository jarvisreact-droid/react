// src/http.ts
export async function httpFetch(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response.json();
}
