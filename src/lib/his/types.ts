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

export type HisAppointmentDoctor = {
  id: string;
  full_name: string;
  check_in_before_minutes?: number;
  hfis_code?: string | null;
};

export type HisAppointmentLocation = {
  id: string;
  bpjs_code: string | null;
  label: string;
  name: string;
  parent_level?: string | null;
  queue_code?: string | null;
};

export type HisAppointment = {
  id: string;

  created_at: string;

  display_name: string;
  display_phone: string;

  document_code: string;

  estimated_visit_at: string;

  status_id: "pending" | "proceed" | "cancelled";

  service_type?: string;
  service_type_label?: string;

  doctor: HisAppointmentDoctor;

  location: HisAppointmentLocation;
};

export type HisCreateAppointmentResponse = {
  message: string;

  appointment: HisAppointment;
};
