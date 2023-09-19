import fetch from "isomorphic-unfetch";

/**
 * Represents a client for making HTTP requests and fetching data.
 *
 * @interface RequestClient
 */
export interface RequestClient {
  /**
   * Fetches data from the specified endpoint using an HTTP POST request with FormData.
   *
   * @template T - The type of data expected in the response.
   * @param {string} endpoint - The endpoint URL to send the request to.
   * @param {FormData} data - The FormData containing data to send in the request.
   * @returns {Promise<{ status: number; data: T }>} A Promise that resolves with the response status and data.
   */
  fetch<T>(
    endpoint: string,
    data: FormData
  ): Promise<{ status: number; data: T }>;
}

export const instance = (baseUrl: string, token: string): RequestClient => ({
  fetch: async <T>(
    endpoint: string,
    data: FormData
  ): Promise<{ status: number; data: T }> => {
    const url = `${baseUrl}${endpoint}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const config = {
      method: "POST",
      body: data,
      headers,
    };

    const res = await fetch(url, config);

    return {
      status: res.status,
      data: res as T,
    };
  },
});
