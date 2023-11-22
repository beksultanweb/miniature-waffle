interface Props {
  endpoint: string;
  query?: Record<string, string>;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.PUBLIC_STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const res = await fetch(url.toString());
  
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
  
    const data = await res.json();

    return data.data as T;
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  return null as T;
}
