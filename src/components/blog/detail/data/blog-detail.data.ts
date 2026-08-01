import type { BlogArticle, BlogCategoryKey } from "../../types/blog.types";

import type {
  BlogArticleAuthor,
  BlogArticleDetail,
  BlogDetailTemplateFactory,
} from "../types/blog-detail.types";

const DEFAULT_AUTHOR: BlogArticleAuthor = {
  name: "Tim Informasi RSU Royal Prima Medan",

  role: "Informasi dan Edukasi Kesehatan",

  initials: "RP",

  biography:
    "Konten disusun oleh Tim Informasi RSU Royal Prima Medan untuk membantu masyarakat memperoleh informasi kesehatan dan pelayanan rumah sakit yang lebih mudah dipahami.",
};

const ARTICLE_TAGS: Partial<Record<string, readonly string[]>> = {
  "mengenal-gejala-awal-stroke": [
    "Stroke",
    "Kegawatdaruratan",
    "Edukasi Kesehatan",
  ],

  "layanan-kesehatan-jantung-terpadu": [
    "Jantung",
    "Pelayanan Rumah Sakit",
    "Kardiologi",
  ],

  "pentingnya-medical-check-up-rutin": [
    "Medical Check-Up",
    "Pencegahan",
    "Pemeriksaan Kesehatan",
  ],

  "edukasi-kesehatan-jantung-bersama-masyarakat": [
    "Kesehatan Jantung",
    "Edukasi",
    "Kegiatan Masyarakat",
  ],

  "menjaga-kesehatan-saat-musim-hujan": [
    "Musim Hujan",
    "Daya Tahan Tubuh",
    "Tips Kesehatan",
  ],

  "pelayanan-radiologi-rsu-royal-prima": [
    "Radiologi",
    "Diagnosis",
    "Pelayanan Rumah Sakit",
  ],

  "kenali-tanda-dan-risiko-diabetes": ["Diabetes", "Gula Darah", "Pencegahan"],

  "kegiatan-donor-darah-rsu-royal-prima": [
    "Donor Darah",
    "Kegiatan Sosial",
    "Masyarakat",
  ],

  "pola-tidur-sehat-untuk-daya-tahan-tubuh": [
    "Tidur Sehat",
    "Daya Tahan Tubuh",
    "Gaya Hidup",
  ],

  "persiapan-sebelum-menjalani-operasi": [
    "Operasi",
    "Persiapan Pasien",
    "Edukasi Medis",
  ],

  "pelayanan-farmasi-rsu-royal-prima": [
    "Farmasi",
    "Penggunaan Obat",
    "Keselamatan Pasien",
  ],

  "seminar-kesehatan-ibu-dan-anak": [
    "Ibu dan Anak",
    "Seminar Kesehatan",
    "Edukasi",
  ],
};

const DETAIL_TEMPLATES: Record<BlogCategoryKey, BlogDetailTemplateFactory> = {
  healthTips: (article) => ({
    lead: article.excerpt,

    tags: ARTICLE_TAGS[article.slug] ?? ["Tips Kesehatan", "Gaya Hidup Sehat"],

    keyPoints: [
      "Terapkan kebiasaan sehat secara bertahap dan konsisten.",
      "Perhatikan perubahan kondisi tubuh dan keluhan yang muncul.",
      "Konsultasikan kondisi kesehatan kepada tenaga medis apabila diperlukan.",
    ],

    sections: [
      {
        id: "mengapa-penting",

        title: "Mengapa hal ini penting?",

        paragraphs: [
          article.excerpt,

          "Menjaga kesehatan tidak selalu membutuhkan perubahan besar dalam waktu singkat. Kebiasaan kecil yang dilakukan secara konsisten dapat membantu mendukung kesehatan tubuh dan kualitas hidup.",
        ],
      },

      {
        id: "langkah-sederhana",

        title: "Langkah sederhana yang dapat dilakukan",

        paragraphs: [
          "Mulailah dengan memperhatikan pola makan, aktivitas fisik, waktu istirahat, kebersihan diri, serta kebutuhan cairan tubuh.",
        ],

        items: [
          "Tentukan kebiasaan sehat yang realistis dan mudah diterapkan.",
          "Lakukan perubahan secara bertahap agar lebih mudah dipertahankan.",
          "Catat keluhan atau perubahan kondisi tubuh yang dirasakan.",
          "Hindari mendiagnosis atau mengobati kondisi sendiri tanpa arahan tenaga medis.",
        ],
      },

      {
        id: "kapan-berkonsultasi",

        title: "Kapan perlu berkonsultasi?",

        paragraphs: [
          "Konsultasi dengan tenaga medis diperlukan apabila keluhan menetap, semakin berat, mengganggu aktivitas, atau disertai gejala lain yang menimbulkan kekhawatiran.",
        ],
      },
    ],

    quote: {
      text: "Kebiasaan sehat yang dilakukan secara konsisten lebih bermanfaat dibandingkan perubahan besar yang hanya dilakukan sesaat.",

      source: "Tim Informasi RSU Royal Prima Medan",
    },
  }),

  hospitalNews: (article) => ({
    lead: article.excerpt,

    tags: ARTICLE_TAGS[article.slug] ?? ["Berita Rumah Sakit", "Pelayanan"],

    keyPoints: [
      "Informasi layanan dapat berubah mengikuti kebijakan rumah sakit.",
      "Pasien disarankan memastikan jadwal sebelum berkunjung.",
      "Hubungi Contact Center untuk memperoleh informasi terbaru.",
    ],

    sections: [
      {
        id: "tentang-layanan",

        title: "Tentang pelayanan",

        paragraphs: [
          article.excerpt,

          "Pengembangan pelayanan dilakukan untuk mendukung proses pemeriksaan, diagnosis, perawatan, serta koordinasi antarunit dalam memenuhi kebutuhan pasien.",
        ],
      },

      {
        id: "dukungan-pasien",

        title: "Dukungan bagi pasien dan keluarga",

        paragraphs: [
          "Pasien dan keluarga dapat memperoleh informasi mengenai alur pelayanan, jadwal dokter, persiapan pemeriksaan, serta dokumen yang perlu dibawa sebelum kunjungan.",
        ],

        items: [
          "Pastikan jadwal pelayanan sebelum datang.",
          "Siapkan dokumen identitas dan dokumen medis yang diperlukan.",
          "Sampaikan riwayat kesehatan secara lengkap kepada tenaga medis.",
          "Ikuti petunjuk petugas selama proses pelayanan.",
        ],
      },

      {
        id: "informasi-kunjungan",

        title: "Informasi sebelum berkunjung",

        paragraphs: [
          "Untuk memperoleh informasi yang lebih sesuai dengan kebutuhan, pasien dapat menghubungi rumah sakit secara langsung melalui kanal resmi RSU Royal Prima Medan.",
        ],
      },
    ],

    quote: {
      text: "Pelayanan yang baik dimulai dari komunikasi yang jelas antara pasien, keluarga, dan tenaga kesehatan.",

      source: "RSU Royal Prima Medan",
    },
  }),

  medicalEducation: (article) => ({
    lead: article.excerpt,

    tags: ARTICLE_TAGS[article.slug] ?? [
      "Edukasi Medis",
      "Informasi Kesehatan",
    ],

    keyPoints: [
      "Kenali perubahan kondisi tubuh sedini mungkin.",
      "Jangan mengabaikan gejala yang muncul secara tiba-tiba atau semakin berat.",
      "Informasi umum tidak menggantikan pemeriksaan dan diagnosis dokter.",
    ],

    sections: [
      {
        id: "mengenal-topik",

        title: `Mengenal ${article.title}`,

        paragraphs: [
          article.excerpt,

          "Pemahaman yang tepat membantu masyarakat mengambil keputusan yang lebih baik ketika mengalami keluhan atau ketika mendampingi anggota keluarga yang membutuhkan pertolongan.",
        ],
      },

      {
        id: "hal-yang-diperhatikan",

        title: "Hal yang perlu diperhatikan",

        paragraphs: [
          "Gejala dan kondisi kesehatan dapat berbeda pada setiap orang. Tingkat keparahan, riwayat penyakit, usia, dan kondisi lain dapat memengaruhi penanganan yang diperlukan.",
        ],

        items: [
          "Catat waktu mulai dan perkembangan keluhan.",
          "Perhatikan apakah keluhan muncul secara tiba-tiba.",
          "Sampaikan riwayat penyakit dan penggunaan obat kepada dokter.",
          "Segera cari pertolongan apabila kondisi memburuk.",
        ],
      },

      {
        id: "mencari-pertolongan",

        title: "Kapan harus mencari pertolongan?",

        paragraphs: [
          "Segera cari pertolongan medis apabila keluhan terjadi mendadak, semakin berat, memengaruhi kesadaran, pernapasan, kemampuan bergerak, atau menimbulkan kondisi kegawatdaruratan.",
        ],
      },
    ],

    quote: {
      text: "Mengenali perubahan kondisi tubuh dapat membantu pasien memperoleh pemeriksaan dan pertolongan yang lebih cepat.",

      source: "Tim Informasi RSU Royal Prima Medan",
    },
  }),

  community: (article) => ({
    lead: article.excerpt,

    tags: ARTICLE_TAGS[article.slug] ?? ["Kegiatan", "Masyarakat"],

    keyPoints: [
      "Kegiatan mendukung peningkatan kesadaran kesehatan masyarakat.",
      "Informasi kegiatan diumumkan melalui kanal resmi rumah sakit.",
      "Partisipasi masyarakat membantu memperluas dampak kegiatan sosial.",
    ],

    sections: [
      {
        id: "tentang-kegiatan",

        title: "Tentang kegiatan",

        paragraphs: [
          article.excerpt,

          "Kegiatan ini merupakan bagian dari komitmen rumah sakit untuk mendukung edukasi, kepedulian sosial, serta keterlibatan masyarakat dalam menjaga kesehatan.",
        ],
      },

      {
        id: "tujuan-kegiatan",

        title: "Tujuan kegiatan",

        paragraphs: [
          "Melalui kegiatan bersama masyarakat, informasi kesehatan dapat disampaikan secara lebih terbuka, mudah dipahami, dan relevan dengan kebutuhan peserta.",
        ],

        items: [
          "Meningkatkan kesadaran mengenai kesehatan.",
          "Mendorong kebiasaan hidup sehat.",
          "Memperluas akses terhadap informasi kesehatan.",
          "Membangun kerja sama antara rumah sakit dan masyarakat.",
        ],
      },

      {
        id: "informasi-selanjutnya",

        title: "Informasi kegiatan selanjutnya",

        paragraphs: [
          "Informasi mengenai jadwal dan pendaftaran kegiatan berikutnya akan disampaikan melalui website dan media sosial resmi RSU Royal Prima Medan.",
        ],
      },
    ],

    quote: {
      text: "Edukasi kesehatan menjadi lebih bermakna ketika dapat dipahami dan diterapkan oleh masyarakat dalam kehidupan sehari-hari.",

      source: "RSU Royal Prima Medan",
    },
  }),
};

export function getBlogArticleDetail(article: BlogArticle): BlogArticleDetail {
  const template = DETAIL_TEMPLATES[article.category](article);

  return {
    slug: article.slug,
    ...template,
    author: DEFAULT_AUTHOR,
  };
}
