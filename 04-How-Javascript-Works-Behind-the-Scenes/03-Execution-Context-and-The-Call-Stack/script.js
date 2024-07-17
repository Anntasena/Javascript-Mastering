/*
! Apa itu javascript engine? 
? JS engine adalah Sebuah program komputer yang mengesekusi kode javascript

- Setiap browser sekarang mempunyai JS engine didalamnya
- Mesin paling terkenal adalah google "V8 engine"
- setiap JS engine selalu berisi "call stack" dan "heap"
    -> call stack: adalah tempat kode kita sebenarnya diesekusi menggunakan sesuatu yang disebut "execution context"
    -> heap: adalah kumpulan memori tidak testruktur yang menyimpan semua objek yang dibutuhkan aplikasi kita
*/

/*
! Computer science sidenote: compilation vs interpretation

? Compilation / kompilasi:
- seluruh source code diubah menajadi code machine sekaligus dan code machine ini kemeudian ditulis kedalam file portabel yang dapat dijalankan dikomputer manapun
@ steps:
[source code] ---> 'compilation' --> [portable file: machine code] --> 'execution' --> [program running]

? Interpretation / interpretasi:
- ada juru bahasa yang menjalankan source code dan mengesekusinya baris demi baris
@ steps:
[source code] --> 'execution line by line --> [program running]

$ fact:
- dulu JS adalah bahasa yang mengunakan interpretation secara murni.
- tetapi masalah bahasa yang menggunakan interpretation adalah bahwa ini jauh, jauh lebih lambat dari pada bahasa compilation
- dahulu ini oke untuk JS, tetapi dengan modern JS dan full web application yang kita buat dan gunakan, kinerja yang lambat tidak lagi dapat di terima
- JS modern sekarang adalah campuran dari compilation dan interpretation yang disebut "just-in-time (JIT) compilation"

? just-in-time (JIT) compilation
- pada dasarnya mengkompilasi seluruh kode kedalam machine code sekaligus dan segera mengesekusinya
@ steps:
[source code] ---> 'compilation' --> [machine code] --> 'execution' --> [program running]
stepnya sama dengan compilation tetapi tanpa portalbe file
*/

/*
! Modern just-in-time compilation of javascript

? ketika sepotong kode JS masuk ke engine:
# step 1. Parsing / mengurai kode
- kode di urai menjadi data structure yang disebut "abstrac syntax tree (AST)"
# step 2. compilation / kompilasi
- AST yang dihasilkan dan menkompilasinya kedalam code mechine
# steo 3. execution / eksekusi
- code machine langsung di eksekusi
- eksekusi terjadi di call stack JS engine

$ fact:
- JS modern mempunyai stategi optimalisasi yaitu:
    -> membuat versi code mechine yang sangat tidak dioptimalkan di awal agar dapat mulai diesekusi secepat mungkin
    -> kemudian di backgorund, kode ini sedang dioptimalkan dan dikompilasi ulang selama esekusi program yang sudah berjalan
    -> proses inilah yang membuat modern machine seperti V8 begitu cepat
*/

/*
! The bigger picture: javascript runtime

? kita bisa membayangkan JS runtine seperti kotak besar yang mencakup semua hal yang kita perlukan untuk menggunakan JS seperti browser
- dan inti dari setiap JS runtime merupakan JS engine
- tanpa ada engine, tidak ada runtime, dan tidak ada JS sama sekali
? namun engine saja tidak cukup, agar berfungsi dengan baik , kita memerlukan akses ke web API
- web API berhubungan dengan 
    -> DOM
    -> timers
    -> Fetch API
    -> console.log
    -> ...
- pada dasarnya web API adalah fungsionalitas yang disediakan untuk engine, tetapi sebenarnya bukan bagian dari bahasa JS itu sendiri
- JS hanya mendapatkan akses ke API ini melalui "global window object"
? JS runtime juga menyertakan "callback queue"
- call back queue adalah antrian balik
- ini adalah struktur data yang berisi semua fungsi panggilan balik yang siap diesekusi

$ fact:
- javascript juga bisa berada diluar browser misal node.js
- karna tidak dalam browser, JS tidak bisa mengakses web API, karna web API disediakan oleh browser
- sebagai gantinya, JS memiliki berberapa ikatan dengan "C++ bindings & thread pool"


*/