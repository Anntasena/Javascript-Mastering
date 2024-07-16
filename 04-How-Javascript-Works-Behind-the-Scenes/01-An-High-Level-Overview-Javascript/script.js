//! Highlevel Javascript
/*
## TIPS: Mendapatkan gambaran besar sebelum menyelam lebih dalam adalah teknik pembelajaran yang luar biasa

$> Javascirpt adalah bahasa pemrograman multi-paradigma tingkat tinggi, berorientasi object
    - pernyataan di atas memang benar tetapi ini hanyalah permukaan dari sebuah gunung es 

Revisited (yang sebenarnya)
$>  Javascript adalah bahasa pemrograman tingkat tinggi, berbasis prototype, berorientasi objek, multi-paradigma, ditafsirkan atau dikompilasi tepat waktu, dinamis, utas tunggal, kumpulan sampah dengan fungsi kelas satu dan event non pemblokiran model konkurensi loop

$> 9 Topik Javascript dari kelaimat diatas
    *- high-level:
        -> setiap komputer memerlukan memory dan prosessor (CPU) untuk bekerja, bahasal low-level harus mengatur memory dan CPU secara manual seperti bahasa pemrograman "C", sedangkan untuk bahasa pemrograman high-level seperti "Javascript" dan "Python" kita tidak perlu mengelola sumberdaya secara manual, karna bahasa ini memiliki apa yang disebut "abstaction".
        -> hal ini membuatnya lebih mudah dipelajari dan digunakan, tetapi kelemahannya adalah program tidak akan pernah secepat atau di optimalkan seperti bahasa pemrograman "C" 
    *- garbage-collected
        -> salah satu alat cangih yang mengambil management memori
        -> pada dasarnya ini adalah algoritma didalam javascript, yang secara otomatis menghapus object lama yang tidak digunakan dari memori komputer
        -> analoginya seperti mempunyai petugas kebersihan yang membersihkan memori
    *- interpreted or just-in-time compiled
        -> komputer hanya memahami nol dan satu, dan ini disebut "mechine-code", oleh karna itu tidak praktis untuk ditulis
        -> kita hanya menulis kode javascript yang dapat dibaca manusia, yang merupakan "abstaction" dari mechine code tetapi pada akhirnya ini perlu diterjemahkan ke mechine code dan itu bisa berupa "compiled" atau "interpreted"
        -> langkah ini diperlukan dalam setiap bahasa pemrograman karna tidak ada yang menulis mechine-code secara manual
    *- multi-paradigm
        -> salah satu yang membuat javascript begitu popular adalah karna ini adalah bahasa multi-paradigma
        -> dalam pemrograman, paradigma adalah sebuah pendekatan dan pola pikir keseluruhan dari structur code, yang pada akhirnya akan mengarahkan style dan teknik pengkodean dalam sebuah yang menggunaakn paradigma tertentu
            => 3 paradigma populer
                -> procedular programing: hanya mengatu kode dengan cara yang sangat linier dengan berberapa fungsi diantaranya
                -> Object-Orientend Programming (OOP): 
                -> functional programming (FP)
        -> kita juga bisa menklasifikasikan paradigma sebagai "imparative" dan "declarative"
        -> banyak bahasa pemrograman yang hanya procedural, hanya OOP, atau hanya FP, tetapi javascript bisa melakukan semuanya
    *- prototype-based object-oriented
        -> hampir semua yang ada di javascript adalah object kecuali primitive value
    *- first-class functions
        -> maksudnya bahwa fungsi diperlakukan seperti variable biasa
        -> tidak semua bahasa mempunyai first-class functions, tetapi javascirpt mempunyainya
    *- dynamic
        -> dalam javascript tidak menetapkan tipe data ke variable, sebaliknya ini baru diketahui setelah javascript mengesekusi
        -> jenis variable juga dapat dengan mudah saat kita menetapkan kembali variabelnya
        -> oleh karna itu banyak kontroversi bahwa ini adalah hal yang "bagus" atau "tidak" tetapi inilah javascript
    *- single-threaded
        -> concurency model: adalah bagaimana javascript menangani banyak tugas yang terjadi pada saat yang sama
        -> javascrip berjalan dalam satu waktu dan oleh karna itu membutuhkan cara untuk menangani banyak hal yang terjadi pada saat yang bersamaan 
    *- non-blocking event loop
        -> mengambil tugas yang berjalan lama, mengesekusinya dilatar belakang, dan kemudian mengembalikannya ketika sudah selesai
*/