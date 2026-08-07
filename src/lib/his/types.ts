export type HisTokenResponse = {
  message: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  created_at: number;

  user?: {
    name: string;
    description: string;
  };
};

export type HisLocation = {
  id: string;
  bpjs_code: string | null;
  label: string;
  name: string;
  parent: string | null;
  parent_level: string | null;
  queue_code: string | null;
};

export type HisLocationsResponse = {
  locations: HisLocation[];
  last_page: boolean;
};

export type HisDoctorSchedule = {
  id: string;
  full_name: string;
  photo_url?: string | null;
  schedules: string;
};

export type HisDoctorSchedulesResponse = {
  message: string;
  data: HisDoctorSchedule[];
};
