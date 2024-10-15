/*
! WRITING CLEAN AND MODERN JAVASCRIPT

? READABLE CODE (code yang dapat dibaca)
*- 1. Tulis kode yang orang lain dapat memahaminya
*- 2. Tulis kode yang kamu dapat memahaminya dalam masa mendatang
*- 3. Hindari solusi yang terlalu "pintar" dan terlalu rumit
*- 4. Gunakan nama variable yang deskriptif: nama sesuai isinya
*- 5. Gunakan nama funciton yang deskriptif: nama sesuai fungsinya
$[TIPS]
$- 1. Dalam banyak situasi, yang terbaik adalah menulis solusi yang paling mudah


? GENERAL RULE (aturan umum)
*- 1. Gunakan DRY (dont repeat yourself) priciple: refactor kodenya 
*- 2. Jangan mencemari namespace global, gunakan enkapsulasi
*- 3. Jangan gunakan "var" saat deklarasi variable
*- 4. Gunakan strong type checks "=== dan !==" jangan "== dan !="

? FUNCTION (aturan function)
*- 1. Umumnya, function hanya melakukan satu fungsi
*- 2. Jangan gunakan lebih dari 3 parameter dalam satu function
*- 3. Gunakan default parameter apabila memungkinkan 
*- 4. Umumnya, return tipe data yang sama seperti yang diterima
*- 5. Gunaakn arrow function saat memugkinkan agar mudah dibaca

? OOP (aturan OOP)
*- 1. Gunakan ES6 classes
*- 2. Enkapsulasi data dan jangan mutasikan dari luar class
*- 3. Implementasikan method chainning 
*- 4. Jangan gunakan arrow function sebagai method (di regular object) karna akan mengakibatkan tidak dapat mengakses "this" keyword

? Hindari NESTED CODE (aturan kode bersarang)
*- 1. Gunakan return lebih awal (guard clauses)
*- 2. Gunakan ternary (conditional) atau logical operator alih alih "if statement"
*- 3. Gunakan multiple "if" dari pada if/else-if 
*- 4. Hindari loops, gunakan array method sebagai gantinya
*- 5. Hindari callback-based aynschonous API

? ASYNCHONOUS CODE (aturan asinkron)
*- 1. Konsumsi promise dengan "async / await" untuk keterbacaan yang lebih baik
*- 2. Jika memungkinkan, jalankan promise secara parallel (promise.all)
*- 3. Handle errors (penangan error) dan promise rejection (penolakan promise)s
*/

/*
! DECLARATIVE AND FUNCTIONAL 

! 2 Fundamental diffrent ways of writing code (paradigms)
# 1. Imperative
    *- Programer menjelaskan bagaimana melakukan hal2 tertentu
    *- Jadi kita perlu menjelaskan setiap langkah yang harus diikuti komputer untuk mencapai hasil tertentu
    *- Contoh: step by step membuat kue
    
# 2. Declarative
    *-  Programmer memberi tahu komputer apa yang harus dilakukan
    *-  Menjelaskan cara komputer harus mencapai hasil tertentu
    *-  Bagaimana melakukannya? (instruksi step by step) dan mereka diabstraksikan
    *-  Contoh: menjelaskan apa itu kue tersebut

! Functional Programming Principles
? -> Paradigma Declarativ programing
? -> Di dasarkan pada gagasan penulisan software, hanya dengan menggabungkan berberapa function murni sambil menghindari efek samping dan mutasi data
? -> Functional programming dan declarative code telah menjadi cara penulisan kode modern

$ -> EFEK SAMPING: pada dasarnya hanyalah modifikasi dari data apa pun yang berada diluar function, misalnya: mengubah variable
$ -> PURE FUNCTION: Function tanpa side efek (efek samping), function yang tidak mengubah variable external manapun dan juga tidak bergantung pada variable external apapun
$ -> IMMUTABLITIY: Data takan pernah termodifikasi
# -> react, redux dibangun dengan prisip ini

$[TIPS]
*-> Kita bisa menggabungkan progrogramman inparative dan declarative dalam kode kita sendiri, tidak harus 100% menggunakan declarative 

$[FUNCTIONAL PROGRAMMING TECHIQUES]
*-> Mencoba menghindari mutasi data sesering mungkin
*-> Selalu memilih, built-in methods yang tidak menghasilkan side-effect
*-> Saat melakukan data transformation, gunakan method seperti : map, filter, reduce
*-> Coba hindari side-effect function, ini terkadang tidak selalu memungkinkan

$[DECLARATIVE SYNTAX]
*-> Gunakan array dan object destructuring
*-> Gunakan spread operator
*-> Gunakan ternary operator
*-> Gunakan template literals
*/
