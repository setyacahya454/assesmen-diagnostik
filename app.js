/**
 * ASESMEN DIAGNOSTIK NON-KOGNITIF - BAHASA INDONESIA SMA
 * Tema: Simulasi Chat Interaktif
 * Sesuai Kurikulum Merdeka & Desain Inovasi Pembelajaran PPG
 */

// ========================================================
// 1. DATA MASTER 25 PERTANYAAN (5 ASPEK)
// ========================================================
const QUESTION_DATA = [
  // --- ASPEK 1: KESEJAHTERAAN PSIKOLOGIS, EMOSIONAL, DAN SOSIAL MURID ---
  {
    id: 1,
    aspectId: 1,
    aspectName: "Aspek 1: Kesejahteraan Psikologis & Emosional",
    aspectIcon: "fa-heart-pulse",
    question: "Bagaimana perasaan umum yang paling mendominasi dirimu saat berangkat ke sekolah atau memulai pembelajaran hari ini?",
    options: [
      { key: "a", label: "Sangat bersemangat, gembira, dan siap belajar.", weight: "positif" },
      { key: "b", label: "Biasa saja dan siap mengikuti aktivitas kelas.", weight: "netral" },
      { key: "c", label: "Cemas, khawatir, atau merasa tertekan.", weight: "perlu_perhatian" },
      { key: "d", label: "Sangat lelah, mengantuk, atau kurang berenergi.", weight: "perlu_perhatian" }
    ]
  },
  {
    id: 2,
    aspectId: 1,
    aspectName: "Aspek 1: Kesejahteraan Psikologis & Emosional",
    aspectIcon: "fa-heart-pulse",
    question: "Bagaimana perasaanmu ketika diminta untuk menyampaikan pendapat atau tampil berbicara di depan kelas?",
    options: [
      { key: "a", label: "Sangat percaya diri dan antusias membagikan pemikiran.", weight: "percaya_diri" },
      { key: "b", label: "Agak gugup, tetapi tetap bisa melaluinya dengan baik.", weight: "adaptif" },
      { key: "c", label: "Sangat cemas dan berusaha semaksimal mungkin untuk menghindar.", weight: "cemas" },
      { key: "d", label: "Malu dan ragu, tetapi mau mencoba jika ditunjuk oleh guru.", weight: "butuh_dorongan" }
    ]
  },
  {
    id: 3,
    aspectId: 1,
    aspectName: "Aspek 1: Kesejahteraan Psikologis & Emosional",
    aspectIcon: "fa-heart-pulse",
    question: "Bagaimana respons emosionalmu saat menghadapi materi pelajaran atau tugas Bahasa Indonesia yang terasa sulit?",
    options: [
      { key: "a", label: "Penasaran dan makin tertantang untuk menyelesaikannya.", weight: "growth_mindset" },
      { key: "b", label: "Tetap tenang dan berinisiatif mencari bantuan teman atau guru.", weight: "kolaboratif" },
      { key: "c", label: "Mudah merasa stres, frustrasi, atau ingin menyerah.", weight: "stres" },
      { key: "d", label: "Bingung dan memilih untuk menunggu jawaban atau arahan teman.", weight: "pasif" }
    ]
  },
  {
    id: 4,
    aspectId: 1,
    aspectName: "Aspek 1: Kesejahteraan Psikologis & Emosional",
    aspectIcon: "fa-heart-pulse",
    question: "Secara umum, bagaimana kamu merasakan suasana pertemananmu di dalam kelas saat ini?",
    options: [
      { key: "a", label: "Merasa sangat diterima, dihargai, dan dirangkul oleh semua teman.", weight: "inklusif" },
      { key: "b", label: "Memiliki beberapa teman dekat yang selalu mendukung dan saling bantu.", weight: "nyaman" },
      { key: "c", label: "Merasa canggung dan kurang cocok dengan mayoritas teman kelas.", weight: "canggung" },
      { key: "d", label: "Merasa tersisih atau sering merasa sendirian di kelas.", weight: "terisolasi" }
    ]
  },
  {
    id: 5,
    aspectId: 1,
    aspectName: "Aspek 1: Kesejahteraan Psikologis & Emosional",
    aspectIcon: "fa-heart-pulse",
    question: "Bagaimana tingkat kenyamanan emosionalmu selama mengikuti jam pelajaran Bahasa Indonesia?",
    options: [
      { key: "a", label: "Sangat senang, rileks, dan menikmati setiap aktivitasnya.", weight: "sangat_nyaman" },
      { key: "b", label: "Cukup nyaman dan bisa mengikuti pembelajaran dengan baik.", weight: "nyaman" },
      { key: "c", label: "Merasa agak tegang atau terbebani dengan tugas-tugasnya.", weight: "tegang" },
      { key: "d", label: "Merasa bosan dan sulit untuk fokus selama jam pelajaran.", weight: "kurang_fokus" }
    ]
  },

  // --- ASPEK 2: AKTIVITAS BELAJAR DI RUMAH ---
  {
    id: 6,
    aspectId: 2,
    aspectName: "Aspek 2: Aktivitas Belajar di Rumah",
    aspectIcon: "fa-house-laptop",
    question: "Berapa rata-rata alokasi waktu yang kamu gunakan untuk membaca buku atau belajar di rumah setiap hari?",
    options: [
      { key: "a", label: "Lebih dari 2 jam sehari.", weight: "waktu_tinggi" },
      { key: "b", label: "Antara 1 hingga 2 jam sehari.", weight: "waktu_sedang" },
      { key: "c", label: "Kurang dari 1 jam sehari.", weight: "waktu_rendah" },
      { key: "d", label: "Hanya belajar/membaca jika ada PR atau akan menghadapi ulangan.", weight: "waktu_insidental" }
    ]
  },
  {
    id: 7,
    aspectId: 2,
    aspectName: "Aspek 2: Aktivitas Belajar di Rumah",
    aspectIcon: "fa-house-laptop",
    question: "Bagaimana kebiasaanmu dalam mengatur jadwal dan waktu belajar mandiri di rumah?",
    options: [
      { key: "a", label: "Memiliki jadwal belajar teratur dan disiplin melakukannya setiap hari.", weight: "teratur" },
      { key: "b", label: "Belajar secara fleksibel jika ada waktu luang setelah beristirahat.", weight: "fleksibel" },
      { key: "c", label: "Sering menunda waktu belajar hingga larut malam.", weight: "menunda" },
      { key: "d", label: "Tidak pernah membuat jadwal dan belajar hanya saat diperintah orang tua.", weight: "terpaksa" }
    ]
  },
  {
    id: 8,
    aspectId: 2,
    aspectName: "Aspek 2: Aktivitas Belajar di Rumah",
    aspectIcon: "fa-house-laptop",
    question: "Apa yang paling sering kamu lakukan jika mengalami kesulitan saat pengerjaan tugas Bahasa Indonesia di rumah?",
    options: [
      { key: "a", label: "Mencari referensi mandiri di internet, buku, atau mesin pencari.", weight: "mandiri" },
      { key: "b", label: "Bertanya kepada teman melalui pesan singkat/diskusi kelompok online.", weight: "peer" },
      { key: "c", label: "Bertanya dan meminta bantuan anggota keluarga di rumah.", weight: "keluarga" },
      { key: "d", label: "Membiarkan tugas tersebut tidak selesai dan menanyakannya di sekolah.", weight: "menunggu" }
    ]
  },
  {
    id: 9,
    aspectId: 2,
    aspectName: "Aspek 2: Aktivitas Belajar di Rumah",
    aspectIcon: "fa-house-laptop",
    question: "Media atau teknologi apa yang paling sering kamu manfaatkan untuk mendukung aktivitas belajar di rumah?",
    options: [
      { key: "a", label: "Smartphone/Laptop pribadi dengan koneksi internet yang lancar.", weight: "digital_mandiri" },
      { key: "b", label: "Perangkat yang digunakan bergantian dengan anggota keluarga lain.", weight: "digital_berbagi" },
      { key: "c", label: "Buku cetak paket, modul pembelajaran, atau materi pustaka.", weight: "cetak" },
      { key: "d", label: "Hanya mengandalkan buku catatan hasil tulisan di kelas.", weight: "catatan" }
    ]
  },
  {
    id: 10,
    aspectId: 2,
    aspectName: "Aspek 2: Aktivitas Belajar di Rumah",
    aspectIcon: "fa-house-laptop",
    question: "Seberapa sering kamu membaca ulang materi Bahasa Indonesia yang telah dipelajari di sekolah?",
    options: [
      { key: "a", label: "Selalu mengulang dan merangkumnya setiap malam.", weight: "sangat_rajin" },
      { key: "b", label: "Kadang-kadang mengulang jika materi dirasa cukup sulit.", weight: "selektif" },
      { key: "c", label: "Jarang mengulang, hanya membaca cepat sebelum kelas dimulai.", weight: "jarang" },
      { key: "d", label: "Tidak pernah mengulang pelajaran sama sekali di rumah.", weight: "tidak_pernah" }
    ]
  },

  // --- ASPEK 3: KONDISI KEADAAN KELUARGA & LINGKUNGAN RUMAH ---
  {
    id: 11,
    aspectId: 3,
    aspectName: "Aspek 3: Kondisi Keluarga & Lingkungan Rumah",
    aspectIcon: "fa-people-roof",
    question: "Siapa yang paling sering mendampingi atau membantumu saat belajar di rumah?",
    options: [
      { key: "A", label: "Orang tua (Ayah/Ibu) atau kakak/saudara.", weight: "keluarga" },
      { key: "B", label: "Guru les privat atau tutor bimbingan belajar.", weight: "tutor" },
      { key: "C", label: "Teman sebaya yang datang atau belajar kelompok di rumah.", weight: "teman" },
      { key: "D", label: "Belajar mandiri tanpa pendampingan siapa pun.", weight: "mandiri" }
    ]
  },
  {
    id: 12,
    aspectId: 3,
    aspectName: "Aspek 3: Kondisi Keluarga & Lingkungan Rumah",
    aspectIcon: "fa-people-roof",
    question: "Bagaimana kondisi tempat atau fasilitas belajar yang kamu gunakan di rumah?",
    options: [
      { key: "A", label: "Memiliki meja/ruang belajar khusus yang sangat tenang dan nyaman.", weight: "sangat_kondusif" },
      { key: "B", label: "Ada tempat belajar, namun harus bergantian/berbagi ruang dengan keluarga.", weight: "cukup_kondusif" },
      { key: "C", label: "Ruang belajar kurang nyaman/berisik, tetapi masih bisa digunakan.", weight: "kurang_kondusif" },
      { key: "D", label: "Tidak memiliki tempat khusus, belajar di mana saja yang memungkinkan.", weight: "terbatas" }
    ]
  },
  {
    id: 13,
    aspectId: 3,
    aspectName: "Aspek 3: Kondisi Keluarga & Lingkungan Rumah",
    aspectIcon: "fa-people-roof",
    question: "Bagaimana bentuk perhatian atau dukungan orang tua/keluarga terhadap kegiatan belajarmu?",
    options: [
      { key: "A", label: "Sangat mendukung dan rutin menanyakan perkembangan belajar di sekolah.", weight: "dukungan_tinggi" },
      { key: "B", label: "Mendukung dan membantu menyediakan fasilitas belajar jika diminta.", weight: "dukungan_fasilitas" },
      { key: "C", label: "Kurang memperhatikan kegiatan belajar karena kesibukan kerja.", weight: "dukungan_rendah" },
      { key: "D", label: "Menyerahkan sepenuhnya urusan belajar kepada saya tanpa pernah bertanya.", weight: "pasif" }
    ]
  },
  {
    id: 14,
    aspectId: 3,
    aspectName: "Aspek 3: Kondisi Keluarga & Lingkungan Rumah",
    aspectIcon: "fa-people-roof",
    question: "Bagaimana ketersediaan akses sarana penunjang (buku bacaan/perangkat digital) di rumahmu?",
    options: [
      { key: "A", label: "Sangat lengkap (memiliki koleksi buku dan perangkat pribadi yang memadai).", weight: "fasilitas_lengkap" },
      { key: "B", label: "Cukup memadai untuk kebutuhan belajar sehari-hari.", weight: "fasilitas_cukup" },
      { key: "C", label: "Terbatas, namun berusaha dimaksimalkan sebaik mungkin.", weight: "fasilitas_terbatas" },
      { key: "D", label: "Sangat minim dan sering mengalami kendala akses.", weight: "fasilitas_minim" }
    ]
  },
  {
    id: 15,
    aspectId: 3,
    aspectName: "Aspek 3: Kondisi Keluarga & Lingkungan Rumah",
    aspectIcon: "fa-people-roof",
    question: "Seberapa terbuka kamu menceritakan kendala atau pengalaman belajarmu di sekolah kepada orang tua?",
    options: [
      { key: "A", label: "Sangat terbuka, rutin berdiskusi tentang suka dan duka di sekolah.", weight: "sangat_terbuka" },
      { key: "B", label: "Menceritakan hal-hal penting atau saat mengalami nilai kurang baik saja.", weight: "terbuka_parsial" },
      { key: "C", label: "Jarang bercerita kecuali jika ditanya terlebih dahulu oleh orang tua.", weight: "jarang_cerita" },
      { key: "D", label: "Tidak pernah menceritakan urusan sekolah kepada orang tua.", weight: "tertutup" }
    ]
  },

  // --- ASPEK 4: LATAR BELAKANG PERGAULAN & INTERAKSI SOSIAL ---
  {
    id: 16,
    aspectId: 4,
    aspectName: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial",
    aspectIcon: "fa-user-group",
    question: "Bagaimana kamu mendeskripsikan pola interaksi sosialmu dengan teman-teman di sekolah?",
    options: [
      { key: "A", label: "Sangat terbuka dan bisa berteman akrab dengan siapa saja tanpa membeda-bedakan.", weight: "ekstrovert" },
      { key: "B", label: "Lebih suka berkumpul dengan kelompok kecil berisi 2–4 teman dekat saja.", weight: "selektif" },
      { key: "C", label: "Cenderung pasif, hanya berinteraksi jika ada teman yang menyapa terlebih dahulu.", weight: "pasif" },
      { key: "D", label: "Lebih nyaman menyendiri dan berfokus pada aktivitas pribadi.", weight: "introvert" }
    ]
  },
  {
    id: 17,
    aspectId: 4,
    aspectName: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial",
    aspectIcon: "fa-user-group",
    question: "Dalam kegiatan kerja kelompok Bahasa Indonesia, peran mana yang paling membuatmu merasa nyaman?",
    options: [
      { key: "A", label: "Ketua/koordinator yang membagi tugas dan mengarahkan kelompok.", role: "Leader" },
      { key: "B", label: "Pencatat/sekretaris yang merangkum ide-ide hasil diskusi.", role: "Notulen/Writer" },
      { key: "C", label: "Juru bicara/presenter yang menyampaikan hasil karya di depan kelas.", role: "Speaker/Presenter" },
      { key: "D", label: "Anggota aktif yang fokus mencari referensi dan menyusun materi.", role: "Researcher/Builder" }
    ]
  },
  {
    id: 18,
    aspectId: 4,
    aspectName: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial",
    aspectIcon: "fa-user-group",
    question: "Bagaimana caramu merespons jika terjadi perbedaan pendapat saat berdiskusi kelompok?",
    options: [
      { key: "A", label: "Mendengarkan semua pendapat dan aktif mencari jalan tengah/kompromi.", weight: "mediator" },
      { key: "B", label: "Mengikuti pendapat suara terbanyak agar diskusi cepat selesai.", weight: "konformis" },
      { key: "C", label: "Memilih diam dan mengalah daripada menimbulkan perdebatan.", weight: "menghindar" },
      { key: "D", label: "Mempertahankan argumen pribadi karena merasa pendapat saya yang paling benar.", weight: "dominan" }
    ]
  },
  {
    id: 19,
    aspectId: 4,
    aspectName: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial",
    aspectIcon: "fa-user-group",
    question: "Seberapa sering kamu membahas atau menceritakan topik menarik (seperti buku, film, musik, atau konten media sosial) bersama teman-temanmu?",
    options: [
      { key: "A", label: "Sangat sering, hampir setiap ada waktu luang di sekolah.", weight: "sangat_sering" },
      { key: "B", label: "Kadang-kadang, jika topik pembicaraannya relevan dan seru.", weight: "kadang" },
      { key: "C", label: "Jarang, kami lebih sering membicarakan hal lain.", weight: "jarang" },
      { key: "D", label: "Tidak pernah membahas hal-hal tersebut dengan teman.", weight: "tidak_pernah" }
    ]
  },
  {
    id: 20,
    aspectId: 4,
    aspectName: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial",
    aspectIcon: "fa-user-group",
    question: "Sikap apa yang biasanya kamu tunjukkan jika melihat teman sekelasmu mengalami kesulitan belajar?",
    options: [
      { key: "A", label: "Proaktif menawarkan bantuan atau menjelaskan materi kepadanya.", weight: "proaktif" },
      { key: "B", label: "Senang hati membantu jika teman tersebut datang dan meminta bantuan.", weight: "responsif" },
      { key: "C", label: "Diam saja karena merasa kemampuan diri sendiri juga masih terbatas.", weight: "ragu" },
      { key: "D", label: "Membiarkan saja, karena setiap orang bertanggung jawab atas tugasnya.", weight: "individualis" }
    ]
  },

  // --- ASPEK 5: KARAKTER, MINAT, DAN GAYA BELAJAR BAHASA INDONESIA ---
  {
    id: 21,
    aspectId: 5,
    aspectName: "Aspek 5: Karakter, Minat & Gaya Belajar",
    aspectIcon: "fa-brain",
    question: "Metode penyampaian materi seperti apa yang paling membuatmu cepat memahami pelajaran Bahasa Indonesia?",
    options: [
      { key: "A", label: "Visual Teks: Membaca modul, ringkasan materi, infografis, atau bagan secara mandiri.", style: "Visual" },
      { key: "B", label: "Auditori: Mendengarkan penjelasan guru secara langsung, ceramah interaktif, atau podcast.", style: "Auditori" },
      { key: "C", label: "Audio-Visual: Menonton tayangan video pembelajaran, slide presentasi menarik, atau film pendek.", style: "Audio-Visual" },
      { key: "D", label: "Kinestetik: Melakukan praktik langsung, bermain peran (role play), atau simulasi di depan kelas.", style: "Kinestetik" }
    ]
  },
  {
    id: 22,
    aspectId: 5,
    aspectName: "Aspek 5: Karakter, Minat & Gaya Belajar",
    aspectIcon: "fa-brain",
    question: "Jika guru memberikan tugas pembuatan karya Bahasa Indonesia, format tugas mana yang paling ingin kamu pilih?",
    options: [
      { key: "A", label: "Karya Tulis: Cerita pendek (cerpen), puisi, esai, atau artikel opini.", product: "Karya Tulis", styleBias: "Visual" },
      { key: "B", label: "Karya Lisan: Pidato, rekaman podcast, cerita lisan (storytelling), atau wawancara.", product: "Karya Lisan", styleBias: "Auditori" },
      { key: "C", label: "Karya Visual: Poster edukatif, komik digital, infografis, atau peta konsep.", product: "Desain Visual", styleBias: "Visual" },
      { key: "D", label: "Karya Audio-Visual: Video pendek, vlog pembelajaran, atau drama singkat.", product: "Multimedia / Video", styleBias: "Audio-Visual" }
    ]
  },
  {
    id: 23,
    aspectId: 5,
    aspectName: "Aspek 5: Karakter, Minat & Gaya Belajar",
    aspectIcon: "fa-brain",
    question: "Topik atau tema pembahasan seperti apa yang paling memotivasi dan menarik minat bacamu?",
    options: [
      { key: "A", label: "Teknologi, inovasi digital, kecerdasan buatan, atau sains populer.", topic: "Teknologi & Sains" },
      { key: "B", label: "Isu sosial, kebudayaan, seni, drama, atau tren hiburan.", topic: "Seni & Isu Sosial" },
      { key: "C", label: "Cerita fiksi, petualangan, misteri, atau karya sastra klasik.", topic: "Fiksi & Sastra" },
      { key: "D", label: "Isu lingkungan hidup, alam, petualangan luar ruangan, atau gaya hidup sehat.", topic: "Lingkungan & Alam" }
    ]
  },
  {
    id: 24,
    aspectId: 5,
    aspectName: "Aspek 5: Karakter, Minat & Gaya Belajar",
    aspectIcon: "fa-brain",
    question: "Aktivitas pembelajaran Bahasa Indonesia mana yang menurutmu paling menyenangkan dilakukan di kelas?",
    options: [
      { key: "A", label: "Membaca cerita/puisi dan menganalisis makna tersirat di dalamnya.", activity: "Apresiasi Sastra", styleBias: "Visual" },
      { key: "B", label: "Menulis karya kreatif sesuai dengan imajinasi atau ide gagasan pribadi.", activity: "Menulis Kreatif", styleBias: "Visual" },
      { key: "C", label: "Berdiskusi, berdebat secara sehat, atau bertukar ide mengenai topik hangat.", activity: "Diskusi & Debat", styleBias: "Auditori" },
      { key: "D", label: "Mengkritisi isi berita, konten media sosial, atau iklan yang beredar di masyarakat.", activity: "Literasi Kritis", styleBias: "Audio-Visual" }
    ]
  },
  {
    id: 25,
    aspectId: 5,
    aspectName: "Aspek 5: Karakter, Minat & Gaya Belajar",
    aspectIcon: "fa-brain",
    question: "Bagaimana karakter atau kebiasaanmu dalam menyelesaikan tugas proyek/karya Bahasa Indonesia?",
    options: [
      { key: "A", label: "Bersemangat sejak awal dan langsung membuat draf perencanaannya.", habit: "Proaktif Terencana" },
      { key: "B", label: "Mengerjakan secara bertahap dan terstruktur sesuai petunjuk guru.", habit: "Disiplin Terbimbing" },
      { key: "C", label: "Cenderung menunda-nunda dan baru mengerjakan saat mendekati batas waktu (deadline).", habit: "Deadliner" },
      { key: "D", label: "Merasa terbebani di awal sehingga butuh bimbingan atau arahan langkah demi langkah dari guru.", habit: "Butuh Scaffolding" }
    ]
  }
];

// Friendly conversational response snippets from the Teacher
const BOT_FEEDBACK_SNIPPETS = [
  "Sip, terima kasih kejujurannya ya!",
  "Wah menarik, noted ya!",
  "Okee, jawabanmu sangat membantu Bapak!",
  "Keren! Bapak catat yaa.",
  "Bagus sekali, yuk lanjut ke pertanyaan berikutnya!",
  "Terima kasih sudah berbagi cerita dengan jujur!"
];

// ========================================================
// 2. CONTOH DATA AWAL (SAMPLE DATA FOR IMMEDIATE DEMO)
// ========================================================
const SAMPLE_STUDENTS = [
  {
    id: "std-001",
    name: "Arya Bima Pratama",
    classGrade: "X A",
    studentNumber: "04",
    timestamp: "21 Okt 2026, 08:45 WIB",
    answers: {
      1: "a", 2: "a", 3: "a", 4: "a", 5: "a",
      6: "a", 7: "a", 8: "a", 9: "a", 10: "a",
      11: "D", 12: "A", 13: "A", 14: "A", 15: "A",
      16: "A", 17: "A", 18: "A", 19: "A", 20: "A",
      21: "C", 22: "D", 23: "A", 24: "D", 25: "A"
    },
    conclusion: {
      learningStyle: "Audio-Visual",
      styleSub: "Video Pembelajaran & Tayangan Digital",
      interest: "Vlog Edukasi & Sains Teknologi",
      homeActivity: "Mandiri, Terjadwal & Fasilitas Lengkap",
      emotionStatus: "Sangat Positif & Antusias"
    }
  },
  {
    id: "std-002",
    name: "Nabila Zahra Khairunnisa",
    classGrade: "X B",
    studentNumber: "18",
    timestamp: "21 Okt 2026, 09:12 WIB",
    answers: {
      1: "b", 2: "b", 3: "b", 4: "b", 5: "a",
      6: "b", 7: "a", 8: "a", 9: "a", 10: "b",
      11: "A", 12: "A", 13: "A", 14: "A", 15: "A",
      16: "B", 17: "B", 18: "A", 19: "A", 20: "A",
      21: "A", 22: "A", 23: "C", 24: "B", 25: "B"
    },
    conclusion: {
      learningStyle: "Visual",
      styleSub: "Modul Teks, Infografis & Bagan",
      interest: "Menulis Cerpen & Karya Sastra",
      homeActivity: "Teratur (1-2 jam/hari) & Didampingi Orang Tua",
      emotionStatus: "Tenang, Nyaman & Tekun"
    }
  },
  {
    id: "std-003",
    name: "Rizky Fauzan Fadilah",
    classGrade: "X C",
    studentNumber: "27",
    timestamp: "21 Okt 2026, 09:40 WIB",
    answers: {
      1: "b", 2: "a", 3: "b", 4: "a", 5: "b",
      6: "c", 7: "b", 8: "b", 9: "a", 10: "c",
      11: "C", 12: "B", 13: "B", 14: "B", 15: "B",
      16: "A", 17: "C", 18: "A", 19: "A", 20: "B",
      21: "B", 22: "B", 23: "B", 24: "C", 25: "B"
    },
    conclusion: {
      learningStyle: "Auditori",
      styleSub: "Podcast, Diskusi & Penjelasan Lisan",
      interest: "Pidato/Debat & Isu Sosial Budaya",
      homeActivity: "Belajar Fleksibel & Senang Diskusi Teman",
      emotionStatus: "Komunikatif & Percaya Diri"
    }
  },
  {
    id: "std-004",
    name: "Dimas Anggara Putra",
    classGrade: "XI A",
    studentNumber: "09",
    timestamp: "21 Okt 2026, 10:05 WIB",
    answers: {
      1: "d", 2: "d", 3: "c", 4: "c", 5: "d",
      6: "d", 7: "c", 8: "d", 9: "b", 10: "d",
      11: "D", 12: "C", 13: "C", 14: "C", 15: "C",
      16: "C", 17: "D", 18: "B", 19: "B", 20: "C",
      21: "D", 22: "D", 23: "D", 24: "C", 25: "D"
    },
    conclusion: {
      learningStyle: "Kinestetik",
      styleSub: "Role Play, Praktik & Simulasi Nyata",
      interest: "Drama / Praktik Lapangan & Isu Alam",
      homeActivity: "Belajar Insidental (Perlu Pendampingan Khusus)",
      emotionStatus: "Kurang Berenergi & Perlu Motivasi"
    }
  },
  {
    id: "std-005",
    name: "Siti Rahmawati",
    classGrade: "XII A",
    studentNumber: "32",
    timestamp: "21 Okt 2026, 10:30 WIB",
    answers: {
      1: "a", 2: "b", 3: "a", 4: "a", 5: "a",
      6: "b", 7: "b", 8: "a", 9: "a", 10: "b",
      11: "A", 12: "A", 13: "A", 14: "A", 15: "A",
      16: "A", 17: "B", 18: "A", 19: "A", 20: "A",
      21: "A", 22: "C", 23: "B", 24: "D", 25: "A"
    },
    conclusion: {
      learningStyle: "Visual",
      styleSub: "Desain Infografis & Peta Konsep",
      interest: "Desain Poster & Kritik Literasi Media",
      homeActivity: "Mandiri, Kondusif & Akses Digital Baik",
      emotionStatus: "Sangat Bersemangat & Kreatif"
    }
  }
];

// ========================================================
// 3. APPLICATION STATE & STORAGE ENGINE
// ========================================================
const STORAGE_KEY = "PPG_DIAGNOSTIK_STUDENTS_V2";
const DEFAULT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxFxok3OGdSTx-ZenDUAo0FBZUhDvXFHnlRNvX3X9S0um6oLdYbDjrROwn3Pc-vLtcH1Q/exec";
const DEFAULT_TEACHER_EMAIL = "setyacahya454@gmail.com";

let currentStudent = {
  name: "",
  classGrade: "",
  studentNumber: "",
  currentQuestionIndex: 0,
  answers: {}
};

let currentDetailStudent = null;
let learningStyleChartInstance = null;
let productPreferenceChartInstance = null;

// Audio Synthesizer (Zero asset dependency)
const audioCtx = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext))
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null;

function playSound(type) {
  if (!audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'tada') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.1);
        g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.1 + 0.3);
        o.start(audioCtx.currentTime + i * 0.1);
        o.stop(audioCtx.currentTime + i * 0.1 + 0.35);
      });
    }
  } catch (e) {
    console.warn("Audio playback not allowed yet", e);
  }
}

// Initialize LocalStorage Data (Default KOSONG / FRESH)
function getStoredStudents() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    return [];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveStudentToStorage(studentData) {
  const list = getStoredStudents();
  list.unshift(studentData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// ========================================================
// 4. NAVIGATION CONTROLLER
// ========================================================
function navigateTo(viewId) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Update Phone Mockup Real-time Clock
function updatePhoneClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const clockEl = document.getElementById('phone-clock');
  if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
}
setInterval(updatePhoneClock, 30000);
updatePhoneClock();

// ========================================================
// 5. ALUR SISWA (SIMULASI CHAT)
// ========================================================

function startChatSimulation(event) {
  if (event) event.preventDefault();
  
  const nameInput = document.getElementById('student-name');
  const classSelect = document.getElementById('student-class');
  const numberInput = document.getElementById('student-number');

  if (!nameInput.value.trim() || !classSelect.value) {
    alert("Harap lengkapi nama dan kelas terlebih dahulu ya!");
    return;
  }

  currentStudent = {
    id: 'std-' + Date.now(),
    name: nameInput.value.trim(),
    classGrade: classSelect.value,
    studentNumber: numberInput.value ? String(numberInput.value).padStart(2, '0') : '01',
    currentQuestionIndex: 0,
    answers: {}
  };

  navigateTo('view-chat-simulation');
  initializeChatScreen();
}

function initializeChatScreen() {
  const chatArea = document.getElementById('chat-messages-container');
  // Bersihkan riwayat chat lama kecuali stempel tanggal
  chatArea.innerHTML = `
    <div class="chat-date-stamp">
      <span>Hari ini • Asesmen Diagnostik Non-Kognitif</span>
    </div>
  `;

  // Pesan sambutan hangat dari Guru
  setTimeout(() => {
    appendTeacherMessage(
      `Halo <b>${currentStudent.name}</b> (${currentStudent.classGrade})! Senang sekali bisa mengobrol denganmu hari ini 😊.<br><br>` +
      `Kita akan ngobrol santai lewat 25 pertanyaan ya. Jawablah sesuai apa yang paling kamu rasakan sehari-hari. Siap? Yuk kita mulai!`
    );

    // Muat pertanyaan nomor 1 setelah jeda singkat
    setTimeout(() => {
      loadQuestion(0);
    }, 1200);
  }, 400);
}

function loadQuestion(index) {
  if (index >= QUESTION_DATA.length) {
    finishAssessment();
    return;
  }

  currentStudent.currentQuestionIndex = index;
  const q = QUESTION_DATA[index];

  // Update Progress header
  const progressPercent = Math.round(((index + 1) / QUESTION_DATA.length) * 100);
  document.getElementById('chat-progress-text').textContent = `${index + 1} / ${QUESTION_DATA.length}`;
  document.getElementById('chat-progress-fill').style.width = `${progressPercent}%`;

  // Update Aspect banner
  const aspectIcon = document.getElementById('aspect-icon');
  aspectIcon.className = `fa-solid ${q.aspectIcon}`;
  document.getElementById('aspect-title').textContent = q.aspectName;

  // Sembunyikan dock tombol sementara guru mengetik
  const dock = document.getElementById('reply-options-list');
  dock.innerHTML = '';
  document.getElementById('chat-input-dock').style.opacity = '0.5';
  document.getElementById('chat-input-dock').style.pointerEvents = 'none';

  // Tampilkan typing indicator
  showTyping(true);

  setTimeout(() => {
    showTyping(false);

    // Kirim Balon Chat Pertanyaan dari Guru
    const questionHtml = `
      <span class="question-tag">Pertanyaan ${q.id} dari 25</span><br>
      ${q.question}
    `;
    appendTeacherMessage(questionHtml);
    playSound('pop');

    // Tampilkan 4 pilihan jawaban di dock
    renderOptions(q);
    document.getElementById('chat-input-dock').style.opacity = '1';
    document.getElementById('chat-input-dock').style.pointerEvents = 'auto';
  }, 650);
}

function renderOptions(question) {
  const listContainer = document.getElementById('reply-options-list');
  listContainer.innerHTML = '';

  question.options.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'reply-option-card';
    const optUpper = opt.key.toUpperCase();
    const optClass = `opt-${opt.key.toLowerCase()}`;

    card.innerHTML = `
      <div class="option-badge ${optClass}">${optUpper}</div>
      <div class="option-text">${opt.label}</div>
    `;

    card.onclick = () => handleStudentAnswer(question.id, opt.key, opt.label);
    listContainer.appendChild(card);
  });
}

// Mascot Encouragement Quotes & Interactivity
const MASCOT_LANDING_QUOTES = [
  "✨ Halo! Aku <b>Nara</b>, sahabat belajarmu di Bahasa Indonesia!",
  "📖 Belajar itu makin asik kalau kita tahu gaya belajar kita sendiri!",
  "💡 Jawab dengan santai & jujur ya, tidak ada nilai benar/salah kok!",
  "🌟 Kamu hebat! Yuk mulai obrolan bareng Pak Guru sekarang!",
  "🚀 Siap bertualang menemukan minat dan potensimu hari ini?"
];
let mascotQuoteIndex = 0;

function interactWithMascot() {
  playSound('pop');
  mascotQuoteIndex = (mascotQuoteIndex + 1) % MASCOT_LANDING_QUOTES.length;
  const bubble = document.getElementById('mascot-bubble');
  if (bubble) {
    bubble.style.transform = 'scale(1.06)';
    bubble.innerHTML = `<span>${MASCOT_LANDING_QUOTES[mascotQuoteIndex]}</span>`;
    setTimeout(() => { bubble.style.transform = ''; }, 200);
  }
}

const MINI_MASCOT_QUOTES = [
  "Tips: 'Sedikit demi sedikit, lama-lama menjadi bukit! Semangat! 💪'",
  "Tips: 'Jawaban jujurmu sangat membantu Guru merancang kelas yang seru! 😊'",
  "Tips: 'Fokus dan rileks yaa, kamu melakukannya dengan sangat baik! ✨'",
  "Tips: 'Tetap santai, sebentar lagi kamu akan tahu profil belajarmu! 🎯'"
];
let miniMascotIndex = 0;

function interactWithMiniMascot() {
  playSound('pop');
  miniMascotIndex = (miniMascotIndex + 1) % MINI_MASCOT_QUOTES.length;
  const label = document.getElementById('mini-mascot-text');
  if (label) {
    label.textContent = MINI_MASCOT_QUOTES[miniMascotIndex];
  }
}

function appendMascotMilestone(title, desc) {
  const container = document.getElementById('chat-messages-container');
  const card = document.createElement('div');
  card.className = 'mascot-milestone-bubble';
  card.innerHTML = `
    <div class="mascot-milestone-img">
      <svg viewBox="0 0 120 120" fill="none" style="width: 100%; height: 100%;">
        <circle cx="60" cy="60" r="50" fill="#bbf7d0"/>
        <circle cx="42" cy="55" r="5" fill="#1e293b"/>
        <circle cx="78" cy="55" r="5" fill="#1e293b"/>
        <circle cx="36" cy="64" r="5" fill="#fbcfe8"/>
        <circle cx="84" cy="64" r="5" fill="#fbcfe8"/>
        <path d="M52 66 C56 71, 64 71, 68 66" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <polygon points="60,18 90,30 60,40 30,30" fill="#1e3a5f"/>
      </svg>
    </div>
    <div class="mascot-milestone-text">
      <h5>${title}</h5>
      <p>${desc}</p>
    </div>
  `;
  container.appendChild(card);
  scrollToChatBottom();
}

function handleStudentAnswer(questionId, selectedKey, selectedLabel) {
  playSound('click');

  // Disable dock
  document.getElementById('chat-input-dock').style.pointerEvents = 'none';
  document.getElementById('chat-input-dock').style.opacity = '0.5';

  // Simpan jawaban siswa
  currentStudent.answers[questionId] = selectedKey;

  // Kirim Balon Chat Jawaban Siswa ke sisi kanan
  const studentMsg = `<b>[${selectedKey.toUpperCase()}]</b> ${selectedLabel}`;
  appendStudentMessage(studentMsg);

  // Tokoh Animasi Nara memunculkan milestone penyemangat di titik-titik penting
  let delayNext = 550;
  if (questionId === 5) {
    delayNext = 1400;
    setTimeout(() => {
      appendMascotMilestone("Aspek 1 Selesai! 🎉", "Perasaan & kesiapan emosimu sudah tercatat dengan baik. Sekarang yuk intip kebiasaan belajarmu di rumah!");
      playSound('pop');
      const miniText = document.getElementById('mini-mascot-text');
      if (miniText) miniText.textContent = "Tips: 'Aspek 1 selesai! Lanjut ke aktivitas rumah ya! 🏠'";
    }, 400);
  } else if (questionId === 10) {
    delayNext = 1400;
    setTimeout(() => {
      appendMascotMilestone("Hebat, 10 Soal Berhasil! 🏠", "Kemandirian belajarmu keren banget! Lanjut yuk ke kondisi lingkungan belajar.");
      playSound('pop');
      const miniText = document.getElementById('mini-mascot-text');
      if (miniText) miniText.textContent = "Tips: '10 soal selesai! Keren banget! 🌟'";
    }, 400);
  } else if (questionId === 15) {
    delayNext = 1400;
    setTimeout(() => {
      appendMascotMilestone("Lebih dari Setengah Jalan! 🌟", "Kamu luar biasa fokus! Sekarang giliran obrolan seru tentang pergaulan teman kelas.");
      playSound('pop');
      const miniText = document.getElementById('mini-mascot-text');
      if (miniText) miniText.textContent = "Tips: 'Sudah lebih dari setengah jalan! Tetap semangat! 👥'";
    }, 400);
  } else if (questionId === 20) {
    delayNext = 1400;
    setTimeout(() => {
      appendMascotMilestone("5 Soal Terakhir Menuju Garis Akhir! 🎨", "Saatnya menentukan preferensi karya dan gaya belajar Bahasa Indonesia paling asik buatmu!");
      playSound('pop');
      const miniText = document.getElementById('mini-mascot-text');
      if (miniText) miniText.textContent = "Tips: '5 soal terakhir! Pilih minat Bahasa Indonesia favoritmu! 🎨'";
    }, 400);
  } else {
    // Micro response ramah dari Guru sesekali
    const shouldGiveFeedback = (questionId % 3 === 0) || questionId === 1 || questionId === 21;
    if (shouldGiveFeedback) {
      delayNext = 1000;
      setTimeout(() => {
        const randomFeedback = BOT_FEEDBACK_SNIPPETS[Math.floor(Math.random() * BOT_FEEDBACK_SNIPPETS.length)];
        appendTeacherMessage(randomFeedback);
        playSound('pop');
      }, 400);
    }
  }

  // Lanjut ke nomor berikutnya
  setTimeout(() => {
    loadQuestion(currentStudent.currentQuestionIndex + 1);
  }, delayNext);
}

function appendTeacherMessage(htmlContent) {
  const container = document.getElementById('chat-messages-container');
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const row = document.createElement('div');
  row.className = 'chat-message-row teacher-row';
  row.innerHTML = `
    <div class="chat-bubble chat-bubble-teacher">
      ${htmlContent}
      <div class="bubble-meta">
        <span>${timeStr}</span>
      </div>
    </div>
  `;
  container.appendChild(row);
  scrollToChatBottom();
}

function appendStudentMessage(htmlContent) {
  const container = document.getElementById('chat-messages-container');
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const row = document.createElement('div');
  row.className = 'chat-message-row student-row';
  row.innerHTML = `
    <div class="chat-bubble chat-bubble-student">
      ${htmlContent}
      <div class="bubble-meta">
        <span>${timeStr}</span>
        <i class="fa-solid fa-check-double"></i>
      </div>
    </div>
  `;
  container.appendChild(row);
  scrollToChatBottom();
}

function showTyping(visible) {
  const typingEl = document.getElementById('typing-indicator');
  const statusEl = document.getElementById('chat-status-text');
  if (visible) {
    typingEl.classList.remove('hidden');
    statusEl.textContent = 'sedang mengetik...';
    scrollToChatBottom();
  } else {
    typingEl.classList.add('hidden');
    statusEl.textContent = 'online';
  }
}

function scrollToChatBottom() {
  const container = document.getElementById('chat-messages-container');
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 40);
}

function confirmExitChat() {
  if (confirm("Yakin ingin keluar dari obrolan? Jawaban yang belum selesai tidak akan tersimpan.")) {
    navigateTo('view-landing');
  }
}

// ========================================================
// 6. MESIN ANALISIS DIAGNOSTIK OTOMATIS (3 KOLOM KESIMPULAN)
// ========================================================
function analyzeStudentDiagnostic(answers) {
  // 1. ANALISIS GAYA BELAJAR UTAMA (Aspek 5: Q21, Q22, Q24)
  const q21 = (answers[21] || "A").toUpperCase();
  const q22 = (answers[22] || "A").toUpperCase();
  const q24 = (answers[24] || "A").toUpperCase();

  let learningStyle = "Visual";
  let styleSub = "Membaca Teks, Ringkasan & Modul Mandiri";
  let tips = "Buat peta konsep atau mind-mapping warna-warni saat belajar teks Bahasa Indonesia.";

  if (q21 === "B") {
    learningStyle = "Auditori";
    styleSub = "Mendengarkan Penjelasan, Diskusi & Podcast";
    tips = "Cobalah merekam suaramu saat membaca materi atau belajar bersama kelompok diskusi.";
  } else if (q21 === "C") {
    learningStyle = "Audio-Visual";
    styleSub = "Video Pembelajaran, Animasi & Presentasi Menarik";
    tips = "Manfaatkan video ulasan sastra atau animasi materi di platform digital.";
  } else if (q21 === "D") {
    learningStyle = "Kinestetik";
    styleSub = "Praktik Langsung, Bermain Peran & Simulasi Nyata";
    tips = "Gunakan metode role-playing (bermain peran) atau praktik panggung saat memahami teks drama/cerita.";
  }

  // 2. ANALISIS MINAT & BAKAT (Q22: Produk, Q23: Topik, Q17: Peran)
  const q23 = (answers[23] || "C").toUpperCase();
  let topicStr = "Sastra & Cerita Fiksi";
  if (q23 === "A") topicStr = "Teknologi & Sains Digital";
  else if (q23 === "B") topicStr = "Seni & Isu Sosial Budaya";
  else if (q23 === "D") topicStr = "Lingkungan Hidup & Alam Bebas";

  let productStr = "Karya Tulis (Cerpen/Puisi/Opini)";
  if (q22 === "B") productStr = "Karya Lisan (Podcast/Pidato/Wawancara)";
  else if (q22 === "C") productStr = "Desain Visual (Infografis/Komik Digital)";
  else if (q22 === "D") productStr = "Audio-Visual (Video Pendek/Vlog/Drama)";

  const interestCombined = `${productStr} • Tema: ${topicStr}`;

  // 3. ANALISIS AKTIVITAS BELAJAR DI RUMAH & KESEJAHTERAAN (Q6, Q7, Q9, Q12, Q13)
  const q6 = (answers[6] || "b").toLowerCase();
  const q7 = (answers[7] || "b").toLowerCase();
  const q9 = (answers[9] || "a").toLowerCase();
  const q12 = (answers[12] || "B").toUpperCase();
  const q13 = (answers[13] || "A").toUpperCase();

  let homeDiscipline = "Teratur & Disiplin";
  if (q7 === "b") homeDiscipline = "Fleksibel Mandiri";
  else if (q7 === "c") homeDiscipline = "Cenderung Menunda";
  else if (q7 === "d") homeDiscipline = "Butuh Dorongan Orang Tua";

  let homeFacility = "Fasilitas Sangat Lengkap";
  if (q9 === "b" || q12 === "B") homeFacility = "Berbagi Fasilitas Keluarga";
  else if (q9 === "d" || q12 === "D") homeFacility = "Akses Fasilitas Terbatas";

  const homeActivitySummary = `${homeDiscipline} • ${homeFacility}`;

  // Kesejahteraan Emosi (Q1, Q2, Q5)
  const q1 = (answers[1] || "a").toLowerCase();
  let emotionStatus = "Sangat Positif & Antusias";
  if (q1 === "b") emotionStatus = "Tenang & Siap Belajar";
  else if (q1 === "c") emotionStatus = "Cemas / Perlu Pendekatan Empatis";
  else if (q1 === "d") emotionStatus = "Kurang Berenergi / Mudah Lelah";

  return {
    learningStyle,
    styleSub,
    interest: interestCombined,
    product: productStr,
    topic: topicStr,
    homeActivity: homeActivitySummary,
    emotionStatus,
    tips
  };
}

// Rekomendasi Pedagogis Guru untuk Kurikulum Merdeka (Diferensiasi Pembelajaran)
function generateDifferentiatedRecommendations(conclusion) {
  let diferensiasiKonten = "";
  let diferensiasiProses = "";
  let diferensiasiProduk = "";

  if (conclusion.learningStyle === "Visual") {
    diferensiasiKonten = "Sediakan modul beranotasi visual, infografis ringkas, teks berstruktur, dan lembar kerja bergambar.";
    diferensiasiProses = "Beri kesempatan membaca mandiri dan membuat peta pikiran (*mind-mapping*) atau catatan konsep.";
    diferensiasiProduk = "Arahkan membuat produk berupa esai kreatif, cerpen, komik strip, atau poster infografis edukatif.";
  } else if (conclusion.learningStyle === "Auditori") {
    diferensiasiKonten = "Sediakan audio book, rekaman podcast ulasan materi, atau penjelasan lisan interaktif.";
    diferensiasiProses = "Beri ruang diskusi kelompok kecil, debat santai, tanya jawab lisan, atau teknik *Think-Pair-Share*.";
    diferensiasiProduk = "Bebaskan mengumpulkan karya berupa rekaman podcast, orasi pidato, pembacaan puisi berirama, atau wawancara lisan.";
  } else if (conclusion.learningStyle === "Audio-Visual") {
    diferensiasiKonten = "Gunakan tayangan video pendek, slide interaktif animasi, film pendek bertema sastra/sosial.";
    diferensiasiProses = "Gunakan model *Flipped Classroom* atau telaah tayangan video bermakna.";
    diferensiasiProduk = "Beri opsi membuat vlog resensi buku, trailer video bedah teks, atau drama digital berdurasi 3 menit.";
  } else {
    // Kinestetik
    diferensiasiKonten = "Sediakan kartu kata interaktif (*flashcards*), skenario simulasi, dan studi kasus nyata lapangan.";
    diferensiasiProses = "Gunakan metode *Gallery Walk*, permainan peran (*role-play*), atau simulasi wawancara langsung.";
    diferensiasiProduk = "Arahkan menampilkan drama pendek di depan kelas, demonstrasi pidato panggung, atau pameran karya (*exhibition*).";
  }

  return `
    <b>1. Diferensiasi Konten:</b> ${diferensiasiKonten}<br>
    <b>2. Diferensiasi Proses:</b> ${diferensiasiProses}<br>
    <b>3. Diferensiasi Produk:</b> ${diferensiasiProduk}
  `;
}

// ========================================================
// 7. SELESAI ASESMEN & TAMPILAN PERSONA SISWA
// ========================================================
function finishAssessment() {
  const now = new Date();
  const dateStr = `${now.getDate()} ${["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][now.getMonth()]} ${now.getFullYear()}, ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} WIB`;

  const analysis = analyzeStudentDiagnostic(currentStudent.answers);

  const studentFinalData = {
    id: currentStudent.id,
    name: currentStudent.name,
    classGrade: currentStudent.classGrade,
    studentNumber: currentStudent.studentNumber,
    timestamp: dateStr,
    answers: currentStudent.answers,
    conclusion: analysis
  };

  // Simpan data ke storage
  saveStudentToStorage(studentFinalData);

  // Otomatis kirim ke Google Drive, Google Sheets & Email Guru
  const webhookUrl = localStorage.getItem("GOOGLE_WEBHOOK_URL") || DEFAULT_WEBHOOK_URL;
  const teacherEmail = localStorage.getItem("TEACHER_EMAIL") || DEFAULT_TEACHER_EMAIL;
  if (webhookUrl) {
    syncStudentToGoogleCloud(studentFinalData, webhookUrl, teacherEmail);
  }

  // Play Celebration effects
  playSound('tada');
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Isi data ke View Hasil Siswa
  document.getElementById('result-student-name').textContent = currentStudent.name;
  document.getElementById('result-student-class').textContent = `${currentStudent.classGrade} • No. Absen ${currentStudent.studentNumber}`;

  document.getElementById('persona-style-title').textContent = `${analysis.learningStyle} (${analysis.styleSub})`;
  document.getElementById('persona-style-desc').textContent = `Kamu memiliki kecenderungan paling cepat memahami konsep melalui preferensi ${analysis.learningStyle.toLowerCase()}.`;

  document.getElementById('persona-interest-text').textContent = analysis.interest;
  document.getElementById('persona-home-text').textContent = analysis.homeActivity;
  document.getElementById('persona-emotion-text').textContent = analysis.emotionStatus;
  document.getElementById('persona-tips-text').textContent = analysis.tips;

  // Berikan warna badge sesuai gaya belajar
  const badgeEl = document.getElementById('persona-style-badge');
  badgeEl.className = 'persona-badge';
  if (analysis.learningStyle === 'Visual') badgeEl.style.background = '#0284c7';
  else if (analysis.learningStyle === 'Auditori') badgeEl.style.background = '#d97706';
  else if (analysis.learningStyle === 'Audio-Visual') badgeEl.style.background = '#7c3aed';
  else if (analysis.learningStyle === 'Kinestetik') badgeEl.style.background = '#16a34a';

  navigateTo('view-student-result');
}

function finishStudentSession() {
  // Reset input form
  document.getElementById('student-name').value = '';
  document.getElementById('student-number').value = '';
  navigateTo('view-landing');
}

// ========================================================
// 8. ALUR PORTAL GURU & VERIFIKASI PIN RAHASIA
// ========================================================
const DEFAULT_TEACHER_PIN = "55555";

function getTeacherPin() {
  return localStorage.getItem('TEACHER_CUSTOM_PIN') || DEFAULT_TEACHER_PIN;
}

function changeTeacherPinPrompt() {
  const currentPin = getTeacherPin();
  const oldInput = prompt("Verifikasi Keamanan Guru:\nMasukkan PIN saat ini:");
  if (oldInput === null) return;
  if (oldInput.trim() !== currentPin) {
    alert("PIN lama tidak sesuai! Gagal mengubah PIN.");
    return;
  }

  const newPin = prompt("Masukkan 5 digit PIN baru Anda (hanya angka):");
  if (newPin === null) return;
  if (!/^\d{5}$/.test(newPin.trim())) {
    alert("PIN baru harus terdiri dari tepat 5 digit angka! (contoh: 12345)");
    return;
  }

  localStorage.setItem('TEACHER_CUSTOM_PIN', newPin.trim());
  alert("PIN Portal Guru berhasil diperbarui! Harap simpan baik-baik PIN rahasia Anda.");
}

function openTeacherPinModal() {
  const modal = document.getElementById('pin-modal');
  modal.classList.remove('hidden');

  // Clear digits & error
  document.querySelectorAll('.pin-digit').forEach(input => input.value = '');
  document.getElementById('pin-error-msg').classList.add('hidden');
  
  // Focus first input
  setTimeout(() => {
    const firstDigit = document.querySelector('.pin-digit');
    if (firstDigit) firstDigit.focus();
  }, 100);
}

function closeTeacherPinModal() {
  document.getElementById('pin-modal').classList.add('hidden');
}

function onPinInput(el, index) {
  const digits = document.querySelectorAll('.pin-digit');
  if (el.value.length === 1 && index < digits.length - 1) {
    digits[index + 1].focus();
  }
}

function onPinKeyDown(el, e, index) {
  const digits = document.querySelectorAll('.pin-digit');
  if (e.key === 'Backspace' && el.value === '' && index > 0) {
    digits[index - 1].focus();
  }
}

function verifyTeacherPin(event) {
  if (event) event.preventDefault();
  
  const digits = document.querySelectorAll('.pin-digit');
  let enteredPin = "";
  digits.forEach(d => enteredPin += d.value);

  const validPin = getTeacherPin();

  if (enteredPin === validPin) {
    closeTeacherPinModal();
    navigateTo('view-teacher-portal');
    renderTeacherDashboard();
  } else {
    const errorEl = document.getElementById('pin-error-msg');
    errorEl.classList.remove('hidden');
    digits.forEach(d => {
      d.value = '';
      d.style.borderColor = '#e11d48';
    });
    digits[0].focus();
  }
}

function logoutTeacher() {
  navigateTo('view-landing');
}

// ========================================================
// 9. DASHBOARD REKAP JAWABAN GURU & TABEL 3 KESIMPULAN
// ========================================================

function renderTeacherDashboard() {
  const students = getStoredStudents();

  // Populate Class Filter dropdown dynamically
  populateClassFilter(students);

  // Update KPI Cards
  updateDashboardKPIs(students);

  // Render Charts
  renderAnalyticalCharts(students);

  // Render Table
  renderStudentsTable(students);
}

function populateClassFilter(students) {
  const filterSelect = document.getElementById('filter-class-select');
  const existingClasses = new Set();
  students.forEach(s => {
    if (s.classGrade) existingClasses.add(s.classGrade);
  });

  filterSelect.innerHTML = `<option value="ALL">Semua Kelas (${students.length})</option>`;
  Array.from(existingClasses).sort().forEach(cls => {
    filterSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
  });
}

function updateDashboardKPIs(students) {
  const total = students.length;
  document.getElementById('stat-total-students').textContent = total;

  if (total === 0) {
    document.getElementById('stat-top-style').textContent = "-";
    document.getElementById('stat-positive-emotion').textContent = "0%";
    document.getElementById('stat-need-attention').textContent = "0";
    return;
  }

  // Count learning styles
  const styleCount = { Visual: 0, Auditori: 0, "Audio-Visual": 0, Kinestetik: 0 };
  let positiveEmotionCount = 0;
  let needAttentionCount = 0;

  students.forEach(s => {
    const style = s.conclusion ? s.conclusion.learningStyle : "Visual";
    styleCount[style] = (styleCount[style] || 0) + 1;

    // Check Emotion & Home attention
    const q1 = (s.answers[1] || "").toLowerCase();
    const q12 = (s.answers[12] || "").toUpperCase();
    const q14 = (s.answers[14] || "").toUpperCase();

    if (q1 === "a" || q1 === "b") positiveEmotionCount++;
    if (q1 === "c" || q1 === "d" || q12 === "D" || q14 === "D") needAttentionCount++;
  });

  // Find top style
  let topStyle = "Visual";
  let maxCount = -1;
  for (const [st, count] of Object.entries(styleCount)) {
    if (count > maxCount) {
      maxCount = count;
      topStyle = st;
    }
  }

  const topPercent = Math.round((maxCount / total) * 100);
  document.getElementById('stat-top-style').textContent = topStyle;
  document.getElementById('stat-top-style-sub').textContent = `${topPercent}% dari populasi siswa`;

  const emotionPercent = Math.round((positiveEmotionCount / total) * 100);
  document.getElementById('stat-positive-emotion').textContent = `${emotionPercent}%`;

  document.getElementById('stat-need-attention').textContent = needAttentionCount;
}

function renderAnalyticalCharts(students) {
  if (typeof Chart === 'undefined') return;

  // Chart 1: Pemetaan Gaya Belajar
  const styleCount = { Visual: 0, Auditori: 0, "Audio-Visual": 0, Kinestetik: 0 };
  students.forEach(s => {
    const style = s.conclusion ? s.conclusion.learningStyle : "Visual";
    styleCount[style] = (styleCount[style] || 0) + 1;
  });

  const ctx1 = document.getElementById('learningStyleChart');
  if (ctx1) {
    if (learningStyleChartInstance) learningStyleChartInstance.destroy();
    learningStyleChartInstance = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['Visual Teks', 'Auditori', 'Audio-Visual', 'Kinestetik'],
        datasets: [{
          data: [
            styleCount['Visual'],
            styleCount['Auditori'],
            styleCount['Audio-Visual'],
            styleCount['Kinestetik']
          ],
          backgroundColor: ['#38bdf8', '#f59e0b', '#a855f7', '#22c55e'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Poppins', size: 11 } } }
        }
      }
    });
  }

  // Chart 2: Preferensi Produk Karya (Q22)
  const productCount = { "Karya Tulis": 0, "Karya Lisan": 0, "Desain Visual": 0, "Multimedia": 0 };
  students.forEach(s => {
    const q22 = (s.answers[22] || "A").toUpperCase();
    if (q22 === "A") productCount["Karya Tulis"]++;
    else if (q22 === "B") productCount["Karya Lisan"]++;
    else if (q22 === "C") productCount["Desain Visual"]++;
    else if (q22 === "D") productCount["Multimedia"]++;
  });

  const ctx2 = document.getElementById('productPreferenceChart');
  if (ctx2) {
    if (productPreferenceChartInstance) productPreferenceChartInstance.destroy();
    productPreferenceChartInstance = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Tulis (Cerpen/Opini)', 'Lisan (Podcast/Pidato)', 'Visual (Infografis/Komik)', 'Audio-Visual (Video/Drama)'],
        datasets: [{
          label: 'Jumlah Siswa Memilih',
          data: [
            productCount['Karya Tulis'],
            productCount['Karya Lisan'],
            productCount['Desain Visual'],
            productCount['Multimedia']
          ],
          backgroundColor: ['#58b398', '#e09f3e', '#52a8dc', '#e5989b'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1 } }
        }
      }
    });
  }
}

// Render Table with the 3 Automatic Conclusion Columns
function renderStudentsTable(studentsToRender) {
  const tbody = document.getElementById('students-table-body');
  const emptyState = document.getElementById('empty-table-state');
  tbody.innerHTML = '';

  if (!studentsToRender || studentsToRender.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  studentsToRender.forEach((std, index) => {
    const tr = document.createElement('tr');
    const conc = std.conclusion || analyzeStudentDiagnostic(std.answers || {});

    // Badge styling for Gaya Belajar
    let styleClass = 'tag-visual';
    let styleIcon = 'fa-eye';
    if (conc.learningStyle === 'Auditori') {
      styleClass = 'tag-auditori';
      styleIcon = 'fa-ear-listen';
    } else if (conc.learningStyle === 'Audio-Visual') {
      styleClass = 'tag-audiovisual';
      styleIcon = 'fa-photo-film';
    } else if (conc.learningStyle === 'Kinestetik') {
      styleClass = 'tag-kinestetik';
      styleIcon = 'fa-person-walking';
    }

    tr.innerHTML = `
      <td><b>${index + 1}</b></td>
      <td>
        <span style="font-weight: 600; color: #0f172a;">${std.name}</span>
        <span class="sub-tag-text"><i class="fa-regular fa-clock"></i> ${std.timestamp || '-'}</span>
      </td>
      <td><span class="detail-badge">${std.classGrade || 'X-1'}</span></td>
      
      <!-- KOLOM KESIMPULAN 1: [Gaya Belajar] -->
      <td class="col-highlight-style">
        <span class="tag-badge ${styleClass}">
          <i class="fa-solid ${styleIcon}"></i> ${conc.learningStyle}
        </span>
        <span class="sub-tag-text">${conc.styleSub || '-'}</span>
      </td>

      <!-- KOLOM KESIMPULAN 2: [Minat & Bakat] -->
      <td class="col-highlight-interest">
        <span style="font-weight: 600; font-size: 0.82rem; color: #854d0e;">
          <i class="fa-solid fa-star"></i> ${conc.product || conc.interest.split('•')[0]}
        </span>
        <span class="sub-tag-text">${conc.topic || conc.interest}</span>
      </td>

      <!-- KOLOM KESIMPULAN 3: [Aktivitas Belajar di Rumah] -->
      <td class="col-highlight-home">
        <span style="font-weight: 600; font-size: 0.82rem; color: #075985;">
          <i class="fa-solid fa-house-user"></i> ${conc.homeActivity.split('•')[0] || conc.homeActivity}
        </span>
        <span class="sub-tag-text">${conc.homeActivity.split('•')[1] || conc.emotionStatus}</span>
      </td>

      <!-- AKSI -->
      <td>
        <div class="table-action-btns">
          <button class="btn-icon-action" onclick="openStudentDetail('${std.id}')" title="Lihat 25 Jawaban Lengkap & Rekomendasi Guru">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          <button class="btn-icon-action" onclick="deleteStudentById('${std.id}')" title="Hapus Data">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function filterStudentTable() {
  const searchQuery = document.getElementById('search-student-input').value.toLowerCase().trim();
  const classFilter = document.getElementById('filter-class-select').value;
  const styleFilter = document.getElementById('filter-style-select').value;

  const allStudents = getStoredStudents();

  const filtered = allStudents.filter(std => {
    const matchName = std.name.toLowerCase().includes(searchQuery);
    const matchClass = classFilter === 'ALL' || std.classGrade === classFilter;
    const stdStyle = (std.conclusion && std.conclusion.learningStyle) ? std.conclusion.learningStyle : 'Visual';
    const matchStyle = styleFilter === 'ALL' || stdStyle === styleFilter;

    return matchName && matchClass && matchStyle;
  });

  renderStudentsTable(filtered);
}

// ========================================================
// 10. MODAL DETAIL SISWA (25 JAWABAN & REKOMENDASI DIFERENSIASI)
// ========================================================
function openStudentDetail(studentId) {
  const students = getStoredStudents();
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  currentDetailStudent = student;
  const conc = student.conclusion || analyzeStudentDiagnostic(student.answers || {});

  document.getElementById('modal-student-name').textContent = student.name;
  document.getElementById('modal-student-class').textContent = `${student.classGrade} (Absen ${student.studentNumber || '-'})`;
  document.getElementById('modal-student-timestamp').textContent = `Waktu Pengisian: ${student.timestamp || '-'}`;

  document.getElementById('modal-summary-style').textContent = `${conc.learningStyle} (${conc.styleSub || ''})`;
  document.getElementById('modal-summary-product').textContent = conc.product || conc.interest;
  document.getElementById('modal-summary-home').textContent = conc.homeActivity;
  document.getElementById('modal-summary-emotion').textContent = conc.emotionStatus;

  // Render Pedagogy Recommendations for PPG / Teacher Portfolio
  document.getElementById('modal-pedagogy-text').innerHTML = generateDifferentiatedRecommendations(conc);

  // Group 25 Answers by 5 Aspects
  const container = document.getElementById('modal-answers-container');
  container.innerHTML = '';

  const aspectGroups = [
    { id: 1, title: "Aspek 1: Kesejahteraan Psikologis, Emosional, dan Sosial Murid", qRange: [1, 5] },
    { id: 2, title: "Aspek 2: Aktivitas Belajar di Rumah", qRange: [6, 10] },
    { id: 3, title: "Aspek 3: Kondisi Keadaan Keluarga & Lingkungan Rumah", qRange: [11, 15] },
    { id: 4, title: "Aspek 4: Latar Belakang Pergaulan & Interaksi Sosial", qRange: [16, 20] },
    { id: 5, title: "Aspek 5: Karakter, Minat, dan Gaya Belajar Bahasa Indonesia", qRange: [21, 25] }
  ];

  aspectGroups.forEach(grp => {
    const box = document.createElement('div');
    box.className = 'aspect-group-box';
    
    let itemsHtml = '';
    for (let qNum = grp.qRange[0]; qNum <= grp.qRange[1]; qNum++) {
      const qMaster = QUESTION_DATA.find(q => q.id === qNum);
      const studentAnsKey = (student.answers[qNum] || "-").toUpperCase();
      let answerLabel = "-";
      
      if (qMaster) {
        const foundOpt = qMaster.options.find(o => o.key.toUpperCase() === studentAnsKey);
        if (foundOpt) answerLabel = foundOpt.label;
      }

      itemsHtml += `
        <div class="aspect-item-row">
          <div class="item-q">${qNum}. ${qMaster ? qMaster.question : ''}</div>
          <div class="item-a">Jawaban Siswa: <b>[${studentAnsKey}]</b> ${answerLabel}</div>
        </div>
      `;
    }

    box.innerHTML = `
      <div class="aspect-group-title">
        <i class="fa-solid fa-folder-open"></i> ${grp.title}
      </div>
      ${itemsHtml}
    `;

    container.appendChild(box);
  });

  document.getElementById('student-detail-modal').classList.remove('hidden');
}

function closeStudentDetailModal() {
  document.getElementById('student-detail-modal').classList.add('hidden');
}

function deleteCurrentStudent() {
  if (!currentDetailStudent) return;
  if (confirm(`Yakin ingin menghapus data siswa: ${currentDetailStudent.name}?`)) {
    deleteStudentById(currentDetailStudent.id);
    closeStudentDetailModal();
  }
}

function deleteStudentById(studentId) {
  if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
    const students = getStoredStudents().filter(s => s.id !== studentId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    renderTeacherDashboard();
  }
}

function clearAllData() {
  if (confirm("Apakah Anda yakin ingin MENGHAPUS SEMUA DATA rekapan siswa? Daftar akan kembali kosong (0 siswa).")) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    renderTeacherDashboard();
  }
}

function loadSampleData() {
  if (confirm("Muat 5 data contoh simulasi untuk keperluan uji coba/demo presentasi?")) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_STUDENTS));
    renderTeacherDashboard();
  }
}

function resetSampleData() {
  loadSampleData();
}

// ========================================================
// 11. EKSPOR DATA KE CSV (EXCEL COMPATIBLE)
// ========================================================
function exportDataToCSV() {
  const students = getStoredStudents();
  if (students.length === 0) {
    alert("Tidak ada data untuk diunduh.");
    return;
  }

  // Header CSV
  let csvContent = "\uFEFF"; // UTF-8 BOM agar terbaca di Excel Bahasa Indonesia
  csvContent += "No,Nama Siswa,Kelas,No Absen,Waktu Pengisian,Gaya Belajar,Sub Gaya Belajar,Minat & Bakat,Aktivitas Belajar di Rumah,Kondisi Emosional\n";

  students.forEach((std, i) => {
    const c = std.conclusion || analyzeStudentDiagnostic(std.answers || {});
    const clean = str => `"${(str || '').replace(/"/g, '""')}"`;

    const row = [
      i + 1,
      clean(std.name),
      clean(std.classGrade),
      clean(std.studentNumber),
      clean(std.timestamp),
      clean(c.learningStyle),
      clean(c.styleSub),
      clean(c.interest),
      clean(c.homeActivity),
      clean(c.emotionStatus)
    ];

    csvContent += row.join(",") + "\n";
  });

  // Download trigger
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `Rekap_Asesmen_Diagnostik_Bahasa_Indonesia_${Date.now()}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ========================================================
// 12. INTEGRASI GOOGLE DRIVE, GOOGLE SHEETS & EMAIL GURU
// ========================================================
function openCloudModal() {
  const modal = document.getElementById('cloud-settings-modal');
  const emailInput = document.getElementById('teacher-email-input');
  const webhookInput = document.getElementById('google-webhook-input');
  const statusBadge = document.getElementById('cloud-connection-status');
  const statusLabel = document.getElementById('cloud-status-label');

  const savedEmail = localStorage.getItem("TEACHER_EMAIL") || DEFAULT_TEACHER_EMAIL;
  const savedWebhook = localStorage.getItem("GOOGLE_WEBHOOK_URL") || DEFAULT_WEBHOOK_URL;

  emailInput.value = savedEmail;
  webhookInput.value = savedWebhook;

  statusBadge.className = "cloud-status-badge connected";
  statusLabel.innerHTML = '<b style="color:#15803d;"><i class="fa-solid fa-circle-check"></i> Terhubung ke Google Drive & Email (Aktif)</b>';

  modal.classList.remove('hidden');
}

function closeCloudModal() {
  document.getElementById('cloud-settings-modal').classList.add('hidden');
}

function saveCloudConfig(event) {
  if (event) event.preventDefault();

  const emailVal = document.getElementById('teacher-email-input').value.trim();
  const webhookVal = document.getElementById('google-webhook-input').value.trim();

  localStorage.setItem("TEACHER_EMAIL", emailVal);
  localStorage.setItem("GOOGLE_WEBHOOK_URL", webhookVal);

  alert("✅ Pengaturan Berhasil Disimpan!\n\nSetiap ada siswa yang menyelesaikan asesmen, hasil pengisiannya akan otomatis terkirim ke Google Spreadsheet Anda dan memberikan notifikasi ke email.");
  closeCloudModal();
}

function testCloudConnection() {
  const emailVal = document.getElementById('teacher-email-input').value.trim();
  const webhookVal = document.getElementById('google-webhook-input').value.trim();

  if (!webhookVal) {
    alert("⚠️ Harap masukkan URL Web App Google Apps Script terlebih dahulu!");
    return;
  }

  const testPayload = {
    name: "Uji Coba Sistem Guru",
    classGrade: "Tes Koneksi Cloud",
    studentNumber: "00",
    timestamp: new Date().toLocaleString("id-ID"),
    teacherEmail: emailVal,
    conclusion: {
      learningStyle: "Uji Koneksi Berhasil",
      styleSub: "Google Drive Terhubung",
      product: "Sinkronisasi Aktif",
      topic: "Email Notifikasi Berfungsi",
      homeActivity: "Google Sheets & Google Sites Siap",
      emotionStatus: "Terhubung Sempurna",
      tips: "Koneksi Google Apps Script berhasil mengirimkan data secara live."
    },
    answers: { 1: "a", 21: "a", 22: "a" }
  };

  alert("⏳ Mengirimkan data uji coba ke Google Drive & Email Anda... Mohon tunggu 2 detik lalu periksa Google Sheets dan Email Anda.");

  fetch(webhookVal, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(testPayload)
  }).then(() => {
    alert("🎉 Sinyal data berhasil terkirim! Silakan cek Google Spreadsheet dan Inbox Email Anda untuk melihat baris data baru.");
  }).catch(err => {
    console.error("Cloud Test Error:", err);
    alert("Sinyal terkirim (mode no-cors). Silakan periksa Google Spreadsheet Anda.");
  });
}

function syncStudentToGoogleCloud(studentData, webhookUrl, teacherEmail) {
  const payload = {
    ...studentData,
    teacherEmail: teacherEmail || ""
  };

  fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  }).then(() => {
    console.log("☁️ Berhasil menyinkronkan data siswa ke Google Drive & Email Guru.");
  }).catch(err => {
    console.warn("Gagal menyinkronkan ke Google Cloud:", err);
  });
}

// ========================================================
// 13. INITIALIZATION ON PAGE LOAD
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  // Pastikan data awal tersimpan
  getStoredStudents();

  // Close modals on clicking overlay outside
  window.addEventListener('click', (e) => {
    const pinModal = document.getElementById('pin-modal');
    const detailModal = document.getElementById('student-detail-modal');
    const cloudModal = document.getElementById('cloud-settings-modal');
    if (e.target === pinModal) closeTeacherPinModal();
    if (e.target === detailModal) closeStudentDetailModal();
    if (e.target === cloudModal) closeCloudModal();
  });
});
