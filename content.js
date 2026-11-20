// Kandungan menu Tips Hafazan & Hukum Tajwid
// Contoh tajwid diambil daripada ayat UTQH dalam app ini (s = no. surah, a = no. ayat) — kecuali yang bertanda luar:true
window.TIPS = [
  {i:"🤲", t:"Betulkan niat dan berdoa", d:"Mulakan dengan niat kerana Allah, bukan semata-mata untuk lulus ujian. Berdoa sebelum menghafaz supaya dipermudahkan dan diberi ingatan yang kuat."},
  {i:"🎧", t:"Dengar dahulu sebelum menghafaz", d:"Dengar bacaan qari (tekan nombor ayat dalam app untuk bacaan Al-Husary) sekurang-kurangnya 3–5 kali. Telinga yang biasa dengan ayat menjadikan hafazan lebih cepat dan sebutan lebih tepat."},
  {i:"✂️", t:"Pecahkan kepada potongan kecil", d:"Hafaz satu ayat atau separuh ayat pada satu masa. Jangan cuba menghafaz satu petikan sekali gus."},
  {i:"🔁", t:"Teknik 10 + 10", d:"Baca satu ayat sambil melihat sebanyak 10 kali, kemudian baca tanpa melihat sebanyak 10 kali. Jika tersilap, lihat semula dan ulang."},
  {i:"🔗", t:"Rangkaikan ayat", d:"Selepas hafal ayat 1 dan ayat 2, baca ayat 1 + 2 bersama beberapa kali sebelum pergi ke ayat 3. Ini mengelakkan tersangkut di sambungan antara ayat."},
  {i:"📖", t:"Fahami maksud ayat", d:"Baca terjemahan ringkas setiap ayat. Ayat yang difahami ceritanya lebih mudah diingat susunannya."},
  {i:"🧠", t:"Uji diri, bukan sekadar membaca", d:"Menguji ingatan (active recall) jauh lebih berkesan daripada membaca berulang kali. Gunakan mod Hafazan dalam app: ayat disorok dan anda perlu membacanya dari ingatan."},
  {i:"🔴", t:"Fokus pada perkataan merah", d:"Selepas latihan, ulang perkataan dan ayat yang ditanda merah dalam ringkasan. Kesilapan yang sama biasanya berulang di tempat yang sama."},
  {i:"⚠️", t:"Awas ayat yang hampir serupa", d:"Contoh: Al-Kahfi ayat 102 dan ayat 107 kedua-duanya berakhir dengan نُزُلًا. Tandakan dan bandingkan ayat-ayat seperti ini supaya tidak tertukar."},
  {i:"📅", t:"Ulang kaji berjarak", d:"Ulang hafazan pada hari ke-1, ke-2, ke-4 dan ke-7 selepas menghafaz. Ulang kaji berjarak mengukuhkan ingatan jangka panjang."},
  {i:"🌅", t:"Pilih masa terbaik", d:"Waktu selepas Subuh ketika minda segar, dan ulang kaji ringkas sebelum tidur. Tidur membantu otak mengukuhkan apa yang baru dihafaz."},
  {i:"🕌", t:"Baca dalam solat", d:"Baca ayat yang dihafaz dalam solat fardu dan sunat. Ini cara ulang kaji yang paling berterusan."},
  {i:"👥", t:"Perdengarkan kepada orang lain", d:"Minta guru, ibu bapa atau rakan mendengar bacaan anda (tasmi'). Mereka boleh menegur tajwid yang tidak dapat disemak oleh app."},
  {i:"🎯", t:"Sedikit tetapi berterusan", d:"15 minit setiap hari lebih berkesan daripada 2 jam seminggu sekali. Sasaran cadangan: satu petikan hafazan setiap minggu."},
  {i:"🌿", t:"Jaga adab dan hati", d:"Imam Syafi'i pernah mengadu kepada gurunya Waki' tentang hafazannya yang lemah, lalu dinasihatkan supaya meninggalkan maksiat kerana ilmu itu cahaya. Jaga solat, adab dan akhlak."}
];
window.TAJWID = [
  {sec:"Nun Mati & Tanwin", intro:"Hukum apabila nun mati (نْ) atau tanwin (ـًـٍـٌ) bertemu huruf hijaiyah.", rules:[
    {n:"Izhar Halqi", d:"Dibaca jelas tanpa dengung.", h:"ء ه ع ح غ خ", ex:[{t:"مِّنْ خَشْيَةِ", s:59,a:21,r:"Al-Hasyr 21"},{t:"عَلِيمٌ خَبِيرٌ", s:49,a:13,r:"Al-Hujurat 13"}]},
    {n:"Idgham Maal Ghunnah", d:"Dimasukkan ke dalam huruf selepasnya dengan dengung 2 harakat.", h:"ي ن م و", ex:[{t:"ذَكَرٍ وَأُنثَىٰ", s:49,a:13,r:"Al-Hujurat 13"},{t:"شُعُوبًا وَقَبَآئِلَ", s:49,a:13,r:"Al-Hujurat 13"}]},
    {n:"Idgham Bila Ghunnah", d:"Dimasukkan ke dalam huruf selepasnya tanpa dengung.", h:"ل ر", ex:[{t:"رَءُوفٌ رَّحِيمٌ", s:9,a:128,r:"At-Taubah 128"}]},
    {n:"Iqlab", d:"Bunyi nun ditukar kepada mim dengan dengung 2 harakat.", h:"ب", ex:[{t:"نَفْسٌۢ بِمَا", s:6,a:70,r:"Al-An'am 70"}]},
    {n:"Ikhfa' Haqiqi", d:"Dibaca samar antara izhar dan idgham dengan dengung 2 harakat.", h:"ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك", ex:[{t:"مِّن ذَكَرٍ", s:49,a:13,r:"Al-Hujurat 13"},{t:"مِّنْ أَنفُسِكُمْ", s:9,a:128,r:"At-Taubah 128"},{t:"فَمَن كَانَ", s:18,a:110,r:"Al-Kahfi 110"}]}
  ]},
  {sec:"Mim Mati", intro:"Hukum apabila mim mati (مْ) bertemu huruf hijaiyah.", rules:[
    {n:"Ikhfa' Syafawi", d:"Mim mati bertemu ba, dibaca samar di bibir dengan dengung 2 harakat.", h:"ب", ex:[{t:"عَلَيْكُم بِٱلْمُؤْمِنِينَ", s:9,a:128,r:"At-Taubah 128"}]},
    {n:"Idgham Mithlain", d:"Mim mati bertemu mim, dimasukkan dengan dengung 2 harakat.", h:"م", ex:[{t:"كُنتُم مُّؤْمِنِينَ", s:3,a:139,r:"Ali 'Imran 139"}]},
    {n:"Izhar Syafawi", d:"Mim mati bertemu huruf selain ba dan mim, dibaca jelas tanpa dengung. Lebih jelas lagi apabila bertemu wau dan fa.", h:"Selain ب dan م", ex:[{t:"هُمْ فِى", s:23,a:2,r:"Al-Mu'minun 2"},{t:"لَهُمْ جَنَّـٰتُ", s:18,a:107,r:"Al-Kahfi 107"}]}
  ]},
  {sec:"Ghunnah Musyaddadah", intro:"", rules:[
    {n:"Nun & Mim Bersabdu", d:"Nun atau mim yang bertanda sabdu (ـّ) wajib didengungkan 2 harakat.", h:"نّ مّ", ex:[{t:"إِنَّ صَلَاتِى", s:6,a:162,r:"Al-An'am 162"},{t:"مِّمَّن دَعَآ", s:41,a:33,r:"Fussilat 33"}]}
  ]},
  {sec:"Mad (Bacaan Panjang)", intro:"1 harakat ≈ satu ketukan jari.", rules:[
    {n:"Mad Asli (Thabi'i)", d:"Huruf mad (ا و ي) tanpa hamzah atau sukun selepasnya. Panjang 2 harakat.", h:"ا و ي", ex:[{t:"خَـٰلِدِينَ فِيهَا", s:18,a:108,r:"Al-Kahfi 108"}]},
    {n:"Mad Wajib Muttasil", d:"Huruf mad bertemu hamzah dalam satu kalimah. Panjang 4 atau 5 harakat.", h:"Mad + ء (satu kalimah)", ex:[{t:"جَآءَكُمْ", s:9,a:128,r:"At-Taubah 128"},{t:"أَوْلِيَآءَ", s:18,a:102,r:"Al-Kahfi 102"}]},
    {n:"Mad Jaiz Munfasil", d:"Huruf mad di hujung kalimah bertemu hamzah di awal kalimah berikutnya. Panjang 2, 4 atau 5 harakat.", h:"Mad + ء (dua kalimah)", ex:[{t:"إِنَّآ أَعْتَدْنَا", s:18,a:102,r:"Al-Kahfi 102"},{t:"إِنَّمَآ أَنَا۠", s:18,a:110,r:"Al-Kahfi 110"}]},
    {n:"Mad 'Arid Lissukun", d:"Huruf mad sebelum huruf terakhir yang diwaqafkan (berhenti). Panjang 2, 4 atau 6 harakat.", h:"Mad + waqaf", ex:[{t:"ٱلْعَـٰلَمِينَ", s:6,a:162,r:"Al-An'am 162"},{t:"ٱلْمُؤْمِنُونَ", s:23,a:1,r:"Al-Mu'minun 1"}]},
    {n:"Mad 'Iwad", d:"Tanwin baris atas (ـً) di hujung bacaan yang diwaqafkan, dibaca seperti alif 2 harakat.", h:"ـًا + waqaf", ex:[{t:"أَعْمَـٰلًا", s:18,a:103,r:"Al-Kahfi 103"},{t:"مَدَدًا", s:18,a:109,r:"Al-Kahfi 109"}]},
    {n:"Mad Silah Tawilah", d:"Ha dhamir (هُۥ / هِۦ) di antara dua huruf berbaris bertemu hamzah. Panjang 4 atau 5 harakat.", h:"هۥ / هۦ + ء", ex:[{t:"بِهِۦٓ أَن", s:6,a:70,r:"Al-An'am 70"}]}
  ]},
  {sec:"Qalqalah (Lantunan)", intro:"Huruf qalqalah: ق ط ب ج د (قُطْبُ جَدٍّ).", rules:[
    {n:"Qalqalah Sughra", d:"Huruf qalqalah bertanda sukun di tengah bacaan. Lantunan ringan.", h:"ق ط ب ج د", ex:[{t:"قَدْ أَفْلَحَ", s:23,a:1,r:"Al-Mu'minun 1"},{t:"ٱلْبَحْرُ", s:18,a:109,r:"Al-Kahfi 109"}]},
    {n:"Qalqalah Kubra", d:"Huruf qalqalah di hujung bacaan yang diwaqafkan. Lantunan lebih kuat.", h:"ق ط ب ج د + waqaf", ex:[{t:"مِن شَرِّ مَا خَلَقَ", s:113,a:2,r:"Al-Falaq 2 (luar silibus UTQH)", luar:true}]}
  ]},
  {sec:"Alif Lam (ال)", intro:"", rules:[
    {n:"Alif Lam Qamariah", d:"Lam dibaca jelas (bertanda sukun).", h:"ا ب غ ح ج ك و خ ف ع ق ي م ه", ex:[{t:"ٱلْعَـٰلَمِينَ", s:6,a:162,r:"Al-An'am 162"},{t:"ٱلْبَارِئُ", s:59,a:24,r:"Al-Hasyr 24"}]},
    {n:"Alif Lam Syamsiah", d:"Lam tidak dibaca dan dimasukkan ke dalam huruf selepasnya (bertanda sabdu).", h:"ت ث د ذ ر ز س ش ص ض ط ظ ل ن", ex:[{t:"ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ", s:59,a:22,r:"Al-Hasyr 22"}]}
  ]},
  {sec:"Lam Jalalah (ٱللَّه)", intro:"", rules:[
    {n:"Tafkhim (tebal)", d:"Didahului huruf berbaris atas atau hadapan.", h:"ـَ ـُ sebelum ٱللَّه", ex:[{t:"هُوَ ٱللَّهُ", s:59,a:22,r:"Al-Hasyr 22"},{t:"عِندَ ٱللَّهِ", s:9,a:19,r:"At-Taubah 19"}]},
    {n:"Tarqiq (nipis)", d:"Didahului huruf berbaris bawah.", h:"ـِ sebelum ٱللَّه", ex:[{t:"لِلَّهِ رَبِّ", s:6,a:162,r:"Al-An'am 162"}]}
  ]},
  {sec:"Huruf Ra (ر)", intro:"", rules:[
    {n:"Ra Tafkhim (tebal)", d:"Ra berbaris atas atau hadapan.", h:"رَ رُ", ex:[{t:"رَبِّ", s:6,a:162,r:"Al-An'am 162"}]},
    {n:"Ra Tarqiq (nipis)", d:"Ra berbaris bawah.", h:"رِ", ex:[{t:"ٱلْبَارِئُ", s:59,a:24,r:"Al-Hasyr 24"}]}
  ]}
];
