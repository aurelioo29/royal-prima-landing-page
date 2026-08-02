import type { DoctorClinicKey, DoctorItem } from "../types/doctors.types";

export const doctorsPageConfig = {
  heroImage: "/images/doctors/doctors-hero.webp",

  posterImage: "/images/doctors/doctors-poster.webp",

  placeholderImage: "/images/doctors/doctor-placeholder.webp",
} as const;

/**
 * Daftar poli yang tersedia pada filter Doctors Page.
 *
 * Urutan di sini juga menentukan urutan pilihan
 * pada dropdown filter poli.
 */
export const DOCTOR_CLINIC_KEYS = [
  "pediatrics",
  "pediatricHematologyOncology",
  "internalMedicine",
  "endocrineMetabolicDiabetes",
  "kidneyHypertension",
  "gastroenterohepatology",
  "rheumatology",
  "medicalHematologyOncology",
  "obstetricsGynecology",
  "gynecologicOncology",
] as const satisfies readonly DoctorClinicKey[];

/**
 * ============================================================
 * SAMPLE DATA DOKTER
 * ============================================================
 *
 * Data di bawah masih digunakan untuk development UI.
 * Ganti nama, foto, pendidikan, pengalaman, penghargaan,
 * dan jadwal dengan data resmi RSU Royal Prima.
 */
export const DOCTORS = [
  {
    id: "doctor-01",

    slug: "dr-nadya-pratama-spa",

    name: "dr. Nadya Pratama, Sp.A",

    specialty: "Dokter Spesialis Anak",

    clinicKey: "pediatrics",

    clinicLabel: "Klinik Anak",

    description:
      "Melayani konsultasi kesehatan anak, pemantauan tumbuh kembang, imunisasi, serta penanganan berbagai keluhan kesehatan anak dengan pendekatan yang komunikatif dan ramah keluarga.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dr. Nadya Pratama, Sp.A",

    appointmentHref: "/appointments?doctor=dr-nadya-pratama-spa",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Fakultas Kedokteran Universitas Sumatera Utara",

        subtitle: "Pendidikan Dokter",
      },

      {
        title: "Program Pendidikan Dokter Spesialis Ilmu Kesehatan Anak",

        subtitle: "Pendidikan Spesialis",
      },
    ],

    experiences: [
      "Berpengalaman dalam pelayanan kesehatan anak dan pemantauan tumbuh kembang.",
      "Melayani konsultasi serta pemantauan berbagai kondisi kesehatan pasien anak.",
      "Aktif memberikan edukasi kesehatan kepada orang tua dan keluarga pasien.",
    ],

    awards: [
      "Kontributor kegiatan edukasi kesehatan anak dan keluarga.",
      "Berpartisipasi dalam pengembangan mutu pelayanan kesehatan anak.",
    ],

    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    id: "doctor-02",

    slug: "dr-rizky-maulana-spa",

    name: "dr. Rizky Maulana, Sp.A",

    specialty: "Dokter Spesialis Anak",

    clinicKey: "pediatrics",

    clinicLabel: "Klinik Anak",

    description:
      "Memberikan pelayanan kesehatan anak mulai dari pemeriksaan rutin, pemantauan pertumbuhan dan perkembangan, hingga konsultasi berbagai kondisi medis pada anak.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dr. Rizky Maulana, Sp.A",

    appointmentHref: "/appointments?doctor=dr-rizky-maulana-spa",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Fakultas Kedokteran",

        subtitle: "Pendidikan Dokter",
      },

      {
        title: "Program Pendidikan Dokter Spesialis Ilmu Kesehatan Anak",

        subtitle: "Pendidikan Spesialis",
      },
    ],

    experiences: [
      "Pelayanan pasien anak rawat jalan.",
      "Pemantauan pertumbuhan dan perkembangan anak.",
      "Konsultasi kesehatan serta edukasi keluarga pasien.",
    ],

    awards: ["Apresiasi pelayanan kesehatan pasien anak."],
  },

  {
    id: "doctor-03",

    slug: "dr-reza-mahendra-spak",

    name: "dr. Reza Mahendra, Sp.A(K)",

    specialty: "Konsultan Hematologi Onkologi Anak",

    clinicKey: "pediatricHematologyOncology",

    clinicLabel: "Klinik Hematologi Onkologi Anak",

    description:
      "Berfokus pada evaluasi, diagnosis, terapi, dan pemantauan pasien anak dengan gangguan darah serta berbagai kondisi hematologi dan onkologi.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Hematologi Onkologi Anak",

    appointmentHref: "/appointments?doctor=dr-reza-mahendra-spak",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter",

        subtitle: "Pendidikan Kedokteran",
      },

      {
        title: "Program Pendidikan Dokter Spesialis Anak",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Subspesialis Hematologi Onkologi Anak",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan hematologi dan onkologi pada pasien anak.",
      "Pemantauan pasien anak yang menjalani terapi hematologi dan onkologi.",
      "Kolaborasi multidisiplin pada pelayanan pediatri.",
    ],

    awards: [
      "Kontribusi dalam pengembangan pelayanan hematologi dan onkologi anak.",
    ],
  },

  {
    id: "doctor-04",

    slug: "dr-vina-sembiring-sppd",

    name: "dr. Vina Sembiring, Sp.PD",

    specialty: "Dokter Spesialis Penyakit Dalam",

    clinicKey: "internalMedicine",

    clinicLabel: "Klinik Penyakit Dalam",

    description:
      "Memberikan pelayanan konsultasi, pemeriksaan, diagnosis, dan tata laksana berbagai penyakit pada pasien dewasa secara komprehensif.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Penyakit Dalam",

    appointmentHref: "/appointments?doctor=dr-vina-sembiring-sppd",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter",

        subtitle: "Pendidikan Kedokteran",
      },

      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },
    ],

    experiences: [
      "Pelayanan penyakit dalam rawat jalan.",
      "Diagnosis dan penanganan berbagai penyakit pada pasien dewasa.",
      "Pemantauan pasien dengan penyakit kronis.",
    ],

    awards: ["Apresiasi pelayanan pasien rawat jalan."],
  },

  {
    id: "doctor-05",

    slug: "dr-cindy-natalia-sppd-kemd",

    name: "dr. Cindy Natalia, Sp.PD-KEMD",

    specialty: "Konsultan Endokrin, Metabolik, dan Diabetes",

    clinicKey: "endocrineMetabolicDiabetes",

    clinicLabel: "Klinik Endokrin, Metabolik, dan Diabetes",

    description:
      "Melayani pasien dengan gangguan hormonal, metabolik, diabetes, serta berbagai kondisi endokrin dengan evaluasi dan penanganan yang komprehensif.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Endokrin Metabolik dan Diabetes",

    appointmentHref: "/appointments?doctor=dr-cindy-natalia-sppd-kemd",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Endokrin, Metabolik, dan Diabetes",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan pasien diabetes mellitus.",
      "Evaluasi dan pemantauan gangguan hormonal.",
      "Pendampingan pasien dengan gangguan metabolik.",
    ],

    awards: ["Kontributor kegiatan edukasi kesehatan diabetes."],
  },

  {
    id: "doctor-06",

    slug: "dr-arif-setiawan-sppd-kgh",

    name: "dr. Arif Setiawan, Sp.PD-KGH",

    specialty: "Konsultan Ginjal dan Hipertensi",

    clinicKey: "kidneyHypertension",

    clinicLabel: "Klinik Ginjal dan Hipertensi",

    description:
      "Berfokus pada pelayanan pasien dengan gangguan ginjal, tekanan darah tinggi, serta berbagai kondisi yang berkaitan dengan fungsi ginjal.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Ginjal dan Hipertensi",

    appointmentHref: "/appointments?doctor=dr-arif-setiawan-sppd-kgh",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Ginjal dan Hipertensi",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan pasien dengan penyakit ginjal.",
      "Penanganan dan pemantauan pasien hipertensi.",
      "Evaluasi fungsi ginjal serta kondisi terkait.",
    ],

    awards: ["Kontributor edukasi kesehatan ginjal dan hipertensi."],
  },

  {
    id: "doctor-07",

    slug: "dr-lestari-putri-sppd-kgeh",

    name: "dr. Lestari Putri, Sp.PD-KGEH",

    specialty: "Konsultan Gastroenterohepatologi",

    clinicKey: "gastroenterohepatology",

    clinicLabel: "Klinik Gastroenterohepatologi",

    description:
      "Melayani pasien dengan gangguan saluran pencernaan, hati, pankreas, serta berbagai kondisi gastroenterologi dan hepatologi lainnya.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Gastroenterohepatologi",

    appointmentHref: "/appointments?doctor=dr-lestari-putri-sppd-kgeh",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Gastroenterohepatologi",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan gangguan saluran pencernaan.",
      "Evaluasi gangguan fungsi hati.",
      "Pelayanan gastroenterologi rawat jalan.",
    ],

    awards: ["Kontributor edukasi kesehatan pencernaan."],
  },

  {
    id: "doctor-08",

    slug: "dr-jessica-halim-sppd-kr",

    name: "dr. Jessica Halim, Sp.PD-KR",

    specialty: "Konsultan Reumatologi",

    clinicKey: "rheumatology",

    clinicLabel: "Klinik Reumatologi",

    description:
      "Berfokus pada pelayanan pasien dengan gangguan sendi, penyakit autoimun, dan berbagai kondisi reumatologi lainnya.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Reumatologi",

    appointmentHref: "/appointments?doctor=dr-jessica-halim-sppd-kr",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Reumatologi",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan pasien dengan penyakit reumatik.",
      "Penanganan gangguan sendi.",
      "Pemantauan pasien dengan penyakit autoimun.",
    ],

    awards: ["Kontributor kegiatan edukasi penyakit autoimun."],
  },

  {
    id: "doctor-09",

    slug: "dr-kevin-aditya-sppd-khom",

    name: "dr. Kevin Aditya, Sp.PD-KHOM",

    specialty: "Konsultan Hematologi Onkologi Medik",

    clinicKey: "medicalHematologyOncology",

    clinicLabel: "Klinik Hematologi Onkologi Medik",

    description:
      "Berfokus pada diagnosis, evaluasi, dan tata laksana pasien dengan gangguan darah serta berbagai kondisi onkologi pada pasien dewasa.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Hematologi Onkologi Medik",

    appointmentHref: "/appointments?doctor=dr-kevin-aditya-sppd-khom",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Penyakit Dalam",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Hematologi Onkologi Medik",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan hematologi pada pasien dewasa.",
      "Pelayanan dan pemantauan pasien onkologi.",
      "Kolaborasi multidisiplin dalam pelayanan pasien.",
    ],

    awards: ["Kontribusi terhadap pengembangan pelayanan onkologi medik."],
  },

  {
    id: "doctor-10",

    slug: "dr-maria-yosephine-spog",

    name: "dr. Maria Yosephine, Sp.OG",

    specialty: "Dokter Spesialis Kebidanan dan Kandungan",

    clinicKey: "obstetricsGynecology",

    clinicLabel: "Klinik Kebidanan dan Kandungan",

    description:
      "Memberikan pelayanan kesehatan wanita, pemeriksaan kehamilan, kesehatan reproduksi, serta berbagai kondisi obstetri dan ginekologi.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Kebidanan dan Kandungan",

    appointmentHref: "/appointments?doctor=dr-maria-yosephine-spog",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter",

        subtitle: "Pendidikan Kedokteran",
      },

      {
        title: "Program Pendidikan Dokter Spesialis Obstetri dan Ginekologi",

        subtitle: "Pendidikan Spesialis",
      },
    ],

    experiences: [
      "Pemeriksaan dan pemantauan kehamilan.",
      "Pelayanan kesehatan reproduksi wanita.",
      "Pelayanan kebidanan dan kandungan rawat jalan.",
    ],

    awards: ["Kontributor kegiatan edukasi kesehatan ibu dan wanita."],
  },

  {
    id: "doctor-11",

    slug: "dr-helena-wijaya-spog-konk",

    name: "dr. Helena Wijaya, Sp.OG(K)Onk",

    specialty: "Konsultan Onkologi Ginekologi",

    clinicKey: "gynecologicOncology",

    clinicLabel: "Klinik Onkologi Ginekologi",

    description:
      "Berfokus pada pemeriksaan, diagnosis, dan pelayanan pasien dengan berbagai kondisi keganasan pada sistem reproduksi wanita.",

    image: doctorsPageConfig.placeholderImage,

    imageAlt: "Foto dokter Klinik Onkologi Ginekologi",

    appointmentHref: "/appointments?doctor=dr-helena-wijaya-spog-konk",

    schedules: [
      {
        label: "Poli BPJS",

        days: "Senin s/d Jumat",

        hours: "11.30 - 12.00",
      },

      {
        label: "Non BPJS",

        days: "Senin s/d Jumat",

        hours: "10.00 - 11.30",
      },
    ],

    education: [
      {
        title: "Program Pendidikan Dokter Spesialis Obstetri dan Ginekologi",

        subtitle: "Pendidikan Spesialis",
      },

      {
        title: "Konsultan Onkologi Ginekologi",

        subtitle: "Pendidikan Konsultan",
      },
    ],

    experiences: [
      "Pelayanan pasien onkologi ginekologi.",
      "Evaluasi berbagai kondisi keganasan pada sistem reproduksi wanita.",
      "Kolaborasi multidisiplin dalam pelayanan pasien onkologi.",
    ],

    awards: ["Kontribusi terhadap pengembangan pelayanan kesehatan wanita."],
  },
] as const satisfies readonly DoctorItem[];

export function getDoctorBySlug(slug: string): DoctorItem | undefined {
  return DOCTORS.find((doctor) => doctor.slug === slug);
}
