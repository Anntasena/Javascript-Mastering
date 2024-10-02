"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*
! Bagaimana Web Bekerja?
------------------------------
? Pada dasarnya, web bekerja berdasarkan pertukaran data antara klien (browser pengguna) dan server (komputer yang menyimpan data atau situs web). Prosesnya seperti berikut:

*1. Pengguna (klien): Misalnya, saat Anda mengetik alamat web (URL) di browser, seperti www.example.com, Anda sebenarnya sedang meminta halaman atau sumber daya dari server.
*2. Permintaan (Request): Browser Anda mengirimkan sebuah permintaan (request) ke server yang menyimpan situs web tersebut. Ini dilakukan melalui HTTP/HTTPS, yang merupakan protokol komunikasi di web.
*3. Server: Server menerima permintaan dari browser Anda dan mencari file yang diminta, misalnya halaman HTML, gambar, CSS, atau JavaScript.
*4. Tanggapan (Response): Server kemudian mengirimkan tanggapan (response) kembali ke browser. Tanggapan ini bisa berupa file HTML (struktur halaman), gambar, atau informasi lainnya.
*5. Menampilkan halaman: Browser mengambil respons dari server dan menampilkan hasilnya, yaitu halaman web yang Anda minta.


!Proses Request dan Response Secara Detail
------------------------------
*1. Client (Browser) Mengirim Request: Ketika Anda mengunjungi sebuah halaman web, browser mengirimkan HTTP request ke server. Request ini berisi beberapa informasi penting, seperti:
- Metode HTTP (HTTP Method): Contoh yang paling umum adalah GET (untuk meminta data) dan POST (untuk mengirimkan data).
- URL: Alamat halaman yang Anda akses, misalnya https://www.example.com/about.
- Headers: Informasi tambahan seperti jenis browser, data autentikasi, dan sebagainya.


*2. Server Memproses Request: Server menerima request dan memutuskan apa yang harus dilakukan. Biasanya, server akan:
-Mencari file HTML, CSS, atau JavaScript yang diminta.
-Memproses data jika request memerlukan interaksi dengan database (seperti saat mengisi form).
-Mengirimkan respons.

*3. Server Mengirimkan Response: Setelah server selesai memproses request, ia mengirimkan HTTP response kembali ke browser. Respons ini biasanya berisi:
- Status Code: Menyatakan apakah request berhasil atau gagal (contoh: 200 OK untuk sukses, 404 Not Found jika halaman tidak ditemukan).
- Body: Isi dari respons, seperti halaman HTML, data JSON, gambar, atau jenis file lainnya.

*4. Browser Menampilkan Halaman: Setelah browser menerima respons dari server, ia akan memproses data (seperti HTML, CSS, JavaScript) dan menampilkan halaman web kepada pengguna.


! Proses yang Lebih Mendalam
------------------------------

? DNS (Domain Name System): Sebelum request dikirim, browser perlu menemukan alamat IP dari server menggunakan DNS. DNS bertindak seperti buku telepon yang menerjemahkan domain (seperti www.example.com) menjadi alamat IP.

? Caching: Browser dan server dapat menggunakan cache untuk menyimpan data agar tidak perlu memuat ulang dari server setiap kali ada request yang sama, sehingga mempercepat proses.

?Cookies dan Sessions: Server dan browser sering bertukar cookies untuk menyimpan informasi seperti sesi login, sehingga Anda tidak perlu masuk kembali setiap kali mengunjungi situs web.

! Kesimpulan:
------------------------------
$ Request: Browser mengirim permintaan ke server.
$ Response: Server mengirim tanggapan yang berisi data yang diminta.
$ roses HTTP/HTTPS: Protokol yang mengatur bagaimana data dikirimkan antara klien dan server.

! Kepanjangan dari:
------------------------------
@ -> DNS (Domain Name System):
     Sistem yang menerjemahkan nama domain (seperti www.example.com) menjadi alamat IP server yang sesuai.

@ -> TCP (Transmission Control Protocol):
     Protokol komunikasi yang memastikan data dikirim dengan aman dan berurutan antara dua komputer.

@ -> IP (Internet Protocol):
     Protokol yang digunakan untuk mengidentifikasi perangkat di jaringan dengan alamat IP (Internet Protocol).

@ -> HTTP (Hypertext Transfer Protocol):
     Protokol yang digunakan untuk mengirim dan menerima data (seperti HTML) di web, biasanya dalam bentuk plain text.

@ -> HTTPS (Hypertext Transfer Protocol Secure):
     Versi aman dari HTTP, di mana komunikasi dienkripsi dengan SSL/TLS untuk melindungi data selama transfer.

! Perbedaan dari HTTP dan HTTPS:
-----------------------------------
HTTP:
- Tidak menggunakan enkripsi, sehingga data dikirim dalam teks terbuka dan lebih rentan terhadap serangan.

HTTPS:
- Menggunakan enkripsi SSL/TLS untuk melindungi data selama proses transfer, membuatnya lebih aman daripada HTTP.

! Arti status Code:
-------------------------------
@ -> 200 (OK): 
     Request berhasil dan server mengirimkan data yang diminta.

@ -> 201 (Created):
     Request berhasil dan sebuah resource baru berhasil dibuat di server (biasanya untuk POST request).

@ -> 400 (Bad Request): 
     Request tidak valid atau ada kesalahan pada sintaksis permintaan dari klien.

@ -> 401 (Unauthorized):
     Klien tidak memiliki izin untuk mengakses resource yang diminta (biasanya karena masalah autentikasi).

@ -> 403 (Forbidden):
     Klien memiliki otentikasi tetapi tidak diizinkan untuk mengakses resource.

@ -> 404 (Not Found): 
     Server tidak dapat menemukan resource yang diminta.

@ -> 500 (Internal Server Error): 
     Ada kesalahan di sisi server yang mencegah request diproses.

@ -> 502 (Bad Gateway):
     Server bertindak sebagai gateway atau proxy dan mendapatkan respons yang tidak valid dari server upstream.

@ -> 503 (Service Unavailable):
     Server tidak dapat menangani request karena sedang overload atau sedang dalam pemeliharaan.

*/
