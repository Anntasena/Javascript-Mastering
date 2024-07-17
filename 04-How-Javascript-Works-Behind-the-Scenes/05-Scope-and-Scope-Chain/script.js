/*
! Scoping and scope in javascritp: concepts

? Scoping concept
#-> scoping adalah mengontrol bagaiman variabel program diatur dan diakses oleh JS engine
#-> lexical scoping berarti cara variable diatur dan diakses sepenuhnya dikendalikan oleh penempatan function dan blok dalam kode program
#-> scope adalah ruang atau lingkungan dimana variabel tertentu dideklarsikan
    *-> terdapat 3 scope
        -> global scope
        -> function scope
        -> block scope
#-> scope of a variable adalah seluruh wilayah kode, dimana variabel tertentu dapat diakses
*/

/*
! The 3 type of scope

@ Ingat!!! scope adalah tempat kode dimana variabel di deklarasikan 

? -> global scope
    -> dideklarasikan diluar function atau block apapun
    -> variable yang dideklarasikan di global scope dimana saja
? -> function scope
    -> variable hanya bisa diakses di dalam function, tidak keluar!!
    -> function scope juga bisa disebut "local scope"
? -> block scope (ES5)
    -> variabel hanya bisa diakses di dalam block
    -> NAMUN!, ini hanya berlaku untuk "let" dan "const"
    -> function juga termasuk block scoped (hanya terjadi di "strict mode")
*/

/*
! Scope chain

? rahasia dari scope chain adalah bahwa setiap scope selalu memiliki akses ke semua variabel dari semua scope luarnya
$ contoh:
let x = "global scope"
{
    let y = "local scope 1"
    {
        let z = "local scipe 2"
        {
            let xyz = `gabungan ${x} ${y} ${z}`
        }
    }
}
*/

/*
! scope chain vs call stack
? Tujuan
*-> call stack berhubungan dengan urutan eksekusi fungsi.
*-> Scope chain berhubungan dengan aksesibilitas variabel.

? Operasi
*-> Call stack mengelola konteks eksekusi fungsi dengan operasi push dan pop.
*-> Scope chain mengelola pencarian variabel melalui chain dari scope lokal hingga scope global.

? struktur
*-> Call stack adalah struktur data yang berbasis stack (LIFO).
*-> Scope chain adalah struktur hierarkis dari scope yang bersarang.
*/
