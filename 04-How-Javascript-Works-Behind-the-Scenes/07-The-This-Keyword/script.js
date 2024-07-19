/*
!INGAT--> 3 KOMPONENT EXECUTION CONTEXT
*-> Variable environment
*-> Scope chain
*-> This keyword
*/

/*
! How the this keyword works
? this keyword / this variable pada dasarnya adalah variable khusus yang dibuat untuk setiap konteks dan oleh karna itu fungsi apapun
? secara umum, "this keyword" akan selalu mengambil nilai dari pemilik function dimana kata kunci ini digunakan
? "this keyword" tidak statis, itu tergantung bagaimana function itu sebenarnya dipanggil dan nilainya hanya akan ditetapkan ketika function benar2 dipanggil

# Cara memanggil function
*-> Method => this = <Object that is calling the method>
*-> Simple function call => this = undefined
*-> Arrow function => this <this of surrounding function (lexical this)>
*-> Event listener => this <DOM element that the handler is attached to>
*-> new, call, apply, bind 
*/