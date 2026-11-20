# Mudah Hafaz

Web app statik (GitHub Pages) untuk latihan hafazan/tilawah UTQH SPM. Tiada build step.

## Fail
- `index.html`: keseluruhan UI & logik · `data.js`: teks ayat UTQH (Quran.com) · `content.js`: kandungan Tips Hafazan & Hukum Tajwid · `version.js`: nombor versi · `sw.js`: cache luar talian

## Peraturan versi (WAJIB setiap kemas kini)
Setiap perubahan yang di-push mesti:
1. Naikkan `APP_VERSION` dan `APP_DATE` dalam `version.js` (semver: PATCH = pembetulan, MINOR = ciri baharu, MAJOR = perubahan besar).
2. Tambah entri baharu di atas dalam `CHANGELOG.md` (Bahasa Melayu).
3. Mesej commit bermula dengan `vX.Y.Z:`.

`sw.js` mengambil nama cache daripada `version.js`, jadi menaikkan versi juga memaksa telefon murid memuat turun fail baharu.
