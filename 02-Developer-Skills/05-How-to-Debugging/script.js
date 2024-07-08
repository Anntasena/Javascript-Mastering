"use strict";

// DEBUGGING adalah memperbaiki masalah

// Apa itu software bugs?
/*
    > Software bugs adalah => cacat atau masalah pada program komputer
        - Pada dasarnya, setiap program yang tidak diharapkan atau tidak diinginkan disebut bug
        - Istilah bug sebenarnya diciptakan pada tahun 1940-an ketika serangga yang sebenarnya menyebabkan masalah di komputer havard
        - Bugs adalah bagian normal dari pengembangan software (karna kita manusia dan manusia tempatnya salah :)
        - Faktanya setiap aplikasi kompleks mengandung bug, yang terkadang tidak ditemukan selama bertahun tahun yang dapat menyebabkan lubang di keamaanan atau masalah lainnya
*/

// Prosses debugging
/*
    > 1. Menidentifikasi => sadar bahwa ada semacam bugs
        > menemukan bugs bisa dengan:
            - automatic testing software
            - laporan penggunaan selama produksi (bugs yang ditemukan selama produksi adalah yang terburuk)
            - mempertimbangankan dimana bugs itu sering terjadi
    > 2. Mencari => mengisolasi dimana bug itu terjadi
        - bisa menggunakan developer console
    > 3. Memperbaiki => membetulkan bug
        - mengganti solusi yang salah menjadi solusi baru yang benar
    > 4. Mencegah => mencegah bug terjadi lagi di basis kode
        - mencari projek yang mempunyai bug sama dalam kode yang sama
            *sangat mustahil bahwa kita melakukan kesalahan yang sama
        - menulis test menggunakan software testing
*/