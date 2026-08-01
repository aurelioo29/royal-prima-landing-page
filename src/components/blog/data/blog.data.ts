import type {
  BlogArticle,
  BlogCategoryKey,
  BlogPoster,
} from "../types/blog.types";

export const BLOG_CATEGORY_KEYS = [
  "healthTips",
  "hospitalNews",
  "medicalEducation",
  "community",
] as const satisfies readonly BlogCategoryKey[];

export const blogArticles = [
  {
    id: "stroke-warning-signs",
    slug: "mengenal-gejala-awal-stroke",

    title: "Mengenal Gejala Awal Stroke dan Pentingnya Penanganan Cepat",

    excerpt:
      "Kenali tanda-tanda awal stroke dan langkah yang perlu dilakukan agar pasien mendapatkan pertolongan medis secepatnya.",

    image: "/images/blog/articles/gejala-awal-stroke.webp",

    imageAlt: "Dokter menjelaskan gejala awal stroke",

    category: "medicalEducation",

    publishedAt: "2026-07-29",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "heart-service",
    slug: "layanan-kesehatan-jantung-terpadu",

    title: "RSU Royal Prima Mengembangkan Layanan Kesehatan Jantung Terpadu",

    excerpt:
      "Pengembangan layanan jantung dilakukan untuk memberikan pemeriksaan dan penanganan yang lebih terintegrasi bagi pasien.",

    image: "/images/blog/articles/layanan-jantung-terpadu.webp",

    imageAlt: "Tim dokter pelayanan jantung RSU Royal Prima",

    category: "hospitalNews",

    publishedAt: "2026-07-26",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "medical-check-up",
    slug: "pentingnya-medical-check-up-rutin",

    title: "Pentingnya Medical Check-Up Rutin untuk Menjaga Kesehatan",

    excerpt:
      "Pemeriksaan kesehatan berkala membantu mendeteksi faktor risiko penyakit sebelum menimbulkan keluhan yang lebih serius.",

    image: "/images/blog/articles/medical-check-up.webp",

    imageAlt: "Pasien menjalani medical check-up",

    category: "healthTips",

    publishedAt: "2026-07-22",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "heart-education",
    slug: "edukasi-kesehatan-jantung-bersama-masyarakat",

    title: "Edukasi Kesehatan Jantung Bersama Masyarakat Kota Medan",

    excerpt:
      "Kegiatan edukasi membahas gaya hidup sehat, pengendalian tekanan darah, serta pencegahan penyakit kardiovaskular.",

    image: "/images/blog/articles/edukasi-kesehatan-jantung.webp",

    imageAlt: "Kegiatan edukasi kesehatan jantung",

    category: "community",

    publishedAt: "2026-07-18",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "rainy-season",
    slug: "menjaga-kesehatan-saat-musim-hujan",

    title: "Panduan Menjaga Kesehatan Tubuh Saat Musim Hujan",

    excerpt:
      "Perubahan cuaca dapat memengaruhi daya tahan tubuh. Terapkan pola hidup sehat untuk membantu mengurangi risiko penyakit.",

    image: "/images/blog/articles/kesehatan-musim-hujan.webp",

    imageAlt: "Keluarga menjaga kesehatan saat musim hujan",

    category: "healthTips",

    publishedAt: "2026-07-14",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "radiology-service",
    slug: "pelayanan-radiologi-rsu-royal-prima",

    title: "Pelayanan Radiologi untuk Mendukung Diagnosis yang Lebih Akurat",

    excerpt:
      "Pelayanan radiologi membantu dokter memperoleh gambaran medis yang dibutuhkan untuk menentukan diagnosis dan perawatan pasien.",

    image: "/images/blog/articles/pelayanan-radiologi.webp",

    imageAlt: "Petugas radiologi melakukan pemeriksaan",

    category: "hospitalNews",

    publishedAt: "2026-07-10",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "diabetes-signs",
    slug: "kenali-tanda-dan-risiko-diabetes",

    title: "Kenali Tanda, Faktor Risiko, dan Pencegahan Diabetes",

    excerpt:
      "Diabetes dapat berkembang tanpa gejala yang jelas. Mengenali faktor risiko membantu mendorong pemeriksaan lebih dini.",

    image: "/images/blog/articles/pencegahan-diabetes.webp",

    imageAlt: "Pemeriksaan gula darah pasien",

    category: "medicalEducation",

    publishedAt: "2026-07-06",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "blood-donation",
    slug: "kegiatan-donor-darah-rsu-royal-prima",

    title: "Kegiatan Donor Darah Bersama RSU Royal Prima Medan",

    excerpt:
      "Kegiatan donor darah menjadi bagian dari komitmen rumah sakit dalam mendukung kebutuhan darah dan kepedulian sosial.",

    image: "/images/blog/articles/donor-darah.webp",

    imageAlt: "Kegiatan donor darah RSU Royal Prima",

    category: "community",

    publishedAt: "2026-07-02",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "healthy-sleep",
    slug: "pola-tidur-sehat-untuk-daya-tahan-tubuh",

    title: "Pola Tidur Sehat untuk Mendukung Daya Tahan Tubuh",

    excerpt:
      "Tidur yang cukup dan berkualitas berperan penting dalam menjaga konsentrasi, metabolisme, dan sistem imun tubuh.",

    image: "/images/blog/articles/pola-tidur-sehat.webp",

    imageAlt: "Ilustrasi pola tidur yang sehat",

    category: "healthTips",

    publishedAt: "2026-06-28",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "surgery-preparation",
    slug: "persiapan-sebelum-menjalani-operasi",

    title: "Hal yang Perlu Dipersiapkan Sebelum Menjalani Operasi",

    excerpt:
      "Persiapan fisik, administrasi, dan komunikasi dengan tenaga medis membantu pasien menjalani prosedur operasi dengan lebih tenang.",

    image: "/images/blog/articles/persiapan-operasi.webp",

    imageAlt: "Dokter memberikan penjelasan sebelum operasi",

    category: "medicalEducation",

    publishedAt: "2026-06-24",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "pharmacy-service",
    slug: "pelayanan-farmasi-rsu-royal-prima",

    title: "Pelayanan Farmasi yang Aman dan Terintegrasi untuk Pasien",

    excerpt:
      "Pelayanan farmasi memastikan pasien memperoleh obat yang tepat disertai informasi penggunaan yang jelas dan aman.",

    image: "/images/blog/articles/pelayanan-farmasi.webp",

    imageAlt: "Apoteker menyiapkan obat pasien",

    category: "hospitalNews",

    publishedAt: "2026-06-20",

    author: "RSU Royal Prima Medan",
  },

  {
    id: "mother-child-seminar",
    slug: "seminar-kesehatan-ibu-dan-anak",

    title: "Seminar Kesehatan Ibu dan Anak Bersama Tenaga Medis",

    excerpt:
      "Seminar membahas kesehatan kehamilan, tumbuh kembang anak, nutrisi, dan pentingnya pemeriksaan secara berkala.",

    image: "/images/blog/articles/seminar-ibu-anak.webp",

    imageAlt: "Seminar kesehatan ibu dan anak",

    category: "community",

    publishedAt: "2026-06-16",

    author: "RSU Royal Prima Medan",
  },
] satisfies readonly BlogArticle[];

export const blogPoster = {
  image: "/images/blog/posters/layanan-kesehatan.webp",

  imageAlt: "Informasi pelayanan kesehatan RSU Royal Prima Medan",

  href: "/appointments",
} satisfies BlogPoster;
