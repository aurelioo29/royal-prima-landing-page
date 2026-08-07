import "server-only";

import { clearHisToken, getHisToken } from "./auth";

type HisFetchOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit;
};

function getBaseUrl() {
  const baseUrl = process.env.HIS_BASE_URL;

  if (!baseUrl) {
    throw new Error("HIS_BASE_URL belum dikonfigurasi.");
  }

  return baseUrl.replace(/\/+$/, "");
}

export async function hisFetch<T>(
  path: string,
  options: HisFetchOptions = {},
): Promise<T> {
  const baseUrl = getBaseUrl();

  async function request(forceRefresh = false) {
    const token = await getHisToken(forceRefresh);

    const headers = new Headers(options.headers);

    headers.set("Accept", "application/json");

    headers.set("Authorization", `Bearer ${token}`);

    return fetch(`${baseUrl}${path}`, {
      ...options,

      headers,

      cache: options.cache ?? "no-store",
    });
  }

  let response = await request();

  /*
   * Dokumentasi menyebut 401 untuk credential issue
   * dan 403 untuk unauthorized/session token.
   *
   * Kalau terjadi, refresh token kemudian retry sekali.
   */
  if (response.status === 401 || response.status === 403) {
    clearHisToken();

    response = await request(true);
  }

  if (!response.ok) {
    const responseBody = await response.text();

    console.error("HIS API error:", {
      path,
      status: response.status,
      body: responseBody,
    });

    throw new Error(`HIS API request gagal (${response.status}).`);
  }

  return response.json() as Promise<T>;
}
