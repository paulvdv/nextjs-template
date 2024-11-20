async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");

  if (contentType) {
    if (contentType.includes("application/json")) {
      return response.json();
    }
    if (contentType.includes("text/")) {
      return response.text() as unknown as T;
    }
    if (contentType.includes("form-data")) {
      return response.formData() as unknown as T;
    }
    if (contentType.includes("blob")) {
      return response.blob() as unknown as T;
    }
    if (contentType.includes("arraybuffer")) {
      return response.arrayBuffer() as unknown as T;
    }
  }
  throw new Error(`Unsupported content type: ${contentType}`);
}

export default async function fetcher<T>(
  url: string,
  method = "GET",
): Promise<T> {
  try {
    const response = await fetch(url, { method });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return parseResponse<T>(response);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
