import "server-only";

import { hisFetch } from "./client";

import type { HisLocation, HisLocationsResponse } from "./types";

type GetHisLocationsParams = {
  q?: string;
  page?: number;
};

export async function getHisLocations({
  q,
  page = 1,
}: GetHisLocationsParams = {}) {
  const params = new URLSearchParams();

  if (q) {
    params.set("q", q);
  }

  params.set("page", String(page));

  return hisFetch<HisLocationsResponse>(
    `/api/general/locations?${params.toString()}`,
  );
}

type GetAllHisLocationsParams = {
  q?: string;
};

export async function getAllHisLocations({
  q,
}: GetAllHisLocationsParams = {}): Promise<HisLocation[]> {
  const locations: HisLocation[] = [];

  let page = 1;

  /*
   * Safety limit.
   * Jangan sampai API aneh mengembalikan last_page=false selamanya
   * lalu website kita berubah menjadi mesin DDoS sendiri.
   */
  const MAX_PAGES = 50;

  while (page <= MAX_PAGES) {
    const result = await getHisLocations({
      q,
      page,
    });

    locations.push(...result.locations);

    if (result.last_page) {
      break;
    }

    page += 1;
  }

  const uniqueLocations = new Map<string, HisLocation>();

  locations.forEach((location) => {
    uniqueLocations.set(location.id, location);
  });

  return Array.from(uniqueLocations.values());
}

export async function getHisClinicLocations(): Promise<HisLocation[]> {
  /*
   * Coba search "Klinik" terlebih dahulu.
   */
  let locations = await getAllHisLocations({
    q: "Klinik",
  });

  /*
   * Fallback jika search HIS tidak memberikan hasil.
   */
  if (locations.length === 0) {
    locations = await getAllHisLocations();
  }

  return locations
    .filter((location) => {
      const name = `${location.label} ${location.name}`.toLowerCase();

      return name.includes("klinik");
    })
    .sort((a, b) => a.label.localeCompare(b.label, "id"));
}
