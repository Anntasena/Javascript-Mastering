/*
! Apa itu "execution context"
? Exection context adalah konsep fundamental yang menjelaskan bagaimana JS menjalankan kode. ini mencakup lingkungan dimana kode dijalankan dan mekanisme yang digunakan JS untuk melacak apa yang sedang dikerjakan saat ini

? Jenis-jenis execution context
*- 1. global execution context (GEC):
    -> ini adalah konteks esekusi default. saat program JS pertama kali berjalan, ini dimulai dengan GEC
    -> GEC mencakup kode yang tidak berada didalam fungsi mana pun
    -> hanya ada 1 GEC per program JS
*- 2. function execution context (FEC):
    -> setiap kali sebuah function dipanggil, sebuah exectuion context baru dibuat untuk function tersebut
    -> FEC mencakup semua semua variable yang di dekalarasikan di dalam function dan argumen yang diterima oleh function tersebut
*- 3. eval exection context:
    -> kode yang diesekusi dalam eval juga memiliki konteks esekusinya sendiri, namun ini jarang digunakan dan biasanya dihindari karna alasan keamanan dan kinerja

? Analogi execution context dengan pizza
#KOTAK -> #PIZZA +  SENDOK + NOTA
*-> pizza = kode javascrip yang akan diesekusi
*-> kotak = context execution
*-> seendok + nota = tools

# makan pizza terjadi di dalam kotak yang kemudian menjadi environment untuk makakn pizza. kotak juga berisi sendok dan nota yang diperlukan untuk makan pizza, dengan kata lain untuk menesekusi kode
*/

/*
! Exection context in detail

? apa yang ada di dalam execution context
*-> 1. variable environment
    - let, const, var declaration
    - functions
    - argument object
*-> 2. scope chain
    - pada dasarnya terdiri dari referensi ke variabel yang terletak diluar function saat ini
*-> 3. this keyword

$ fact
- proses diatas disebut "creation phase" terjadi tepat sebelum exection
- secara teknik, value baru bisa diketahui saat dieksekusi
*/

/*
! The call stack

? call stack adalah struktur data yang digunakan oleh javascript untuk melacak function yang sedang di exectuion dan function2 yang memanggilnya. call stack bekerja bedasarkan prinsip LIFO (Last in, Frist out) yang berarti element terakhir yang ditambahkan akan menjadi element pertama yang dikeluarkan
*/