import "server-only";

import type { HisTokenResponse } from "./types";

type HisTokenCache = {
  token: string;
  expiresAt: number;
};

let tokenCache: HisTokenCache | null = null;

let tokenRequest: Promise<string> | null = null;

function getHisEnvironment() {
  const baseUrl = process.env.HIS_BASE_URL;
  const userId = process.env.HIS_USER_ID;
  const constId = process.env.HIS_CONST_ID;
  const secretKey = process.env.HIS_SECRET_KEY;

  if (!baseUrl) {
    throw new Error("HIS_BASE_URL belum dikonfigurasi.");
  }

  if (!userId) {
    throw new Error("HIS_USER_ID belum dikonfigurasi.");
  }

  if (!constId) {
    throw new Error("HIS_CONST_ID belum dikonfigurasi.");
  }

  if (!secretKey) {
    throw new Error("HIS_SECRET_KEY belum dikonfigurasi.");
  }

  return {
    baseUrl: baseUrl.replace(/\/+$/, ""),
    userId,
    constId,
    secretKey,
  };
}

async function requestNewToken(): Promise<string> {
  const { baseUrl, userId, constId, secretKey } = getHisEnvironment();

  const formData = new FormData();

  formData.append("client_id", constId);
  formData.append("client_secret", secretKey);
  formData.append("grant_type", "password");
  formData.append("user_key", userId);

  const response = await fetch(`${baseUrl}/api/general/oauth/token`, {
    method: "POST",

    body: formData,

    cache: "no-store",
  });

  if (!response.ok) {
    const responseBody = await response.text();

    console.error("HIS authentication error:", {
      status: response.status,
      body: responseBody,
    });

    throw new Error(
      `Gagal melakukan authentication ke HIS (${response.status}).`,
    );
  }

  const result = (await response.json()) as HisTokenResponse;

  if (!result.access_token) {
    console.error("Invalid HIS token response:", result);

    throw new Error("access_token tidak ditemukan pada response HIS.");
  }

  /*
   * Response HIS Anda:
   *
   * expires_in: 28800
   *
   * = 8 jam.
   *
   * Kita beri safety margin 5 menit supaya token
   * tidak digunakan sampai benar-benar detik terakhir.
   */
  const safetyMarginSeconds = 5 * 60;

  const usableLifetimeSeconds = Math.max(
    result.expires_in - safetyMarginSeconds,
    60,
  );

  tokenCache = {
    token: result.access_token,

    expiresAt: Date.now() + usableLifetimeSeconds * 1000,
  };

  return result.access_token;
}

export async function getHisToken(forceRefresh = false): Promise<string> {
  const now = Date.now();

  if (!forceRefresh && tokenCache && tokenCache.expiresAt > now) {
    return tokenCache.token;
  }

  /*
   * Hindari beberapa request bersamaan melakukan login
   * ke HIS ketika server baru cold start.
   */
  if (!forceRefresh && tokenRequest) {
    return tokenRequest;
  }

  tokenRequest = requestNewToken();

  try {
    return await tokenRequest;
  } finally {
    tokenRequest = null;
  }
}

export function clearHisToken() {
  tokenCache = null;
}
