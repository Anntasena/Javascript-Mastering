//! Tipe data stucture apa yang harus digunakan?

//# Data structure overview
/*
*->  source of data
  - data yang berasal dari program itu sendiri : seperti "status message"
  - data yang berasal dari UI (antarmuka) : seperti "form"
  - data yang berasal dari sumber external : seperti "web API"
*/

//@ jadi..., tidak peduli dari mana data berasal, dan jenis datanya, biasanya selalu memiliki kumpulan data "collection of data" yang perlu kita simpan disuatu tempat
//! Dimana kita menyimpan collection of data?
//? Dengan mengguanakan structure data

//# 4 data structure bawaan dalam Javascript
/*
*-> Array : digunakan ketika hanya memerlukan daftar nilai yang "sederhana"
*-> Set : digunakan ketika hanya memerlukan daftar nilai yang "sederhana"
*-> Object : digunakan ketika membutuhkan pasangan "key/value"
*-> Map : digunakan ketika membutuhkan pasangan "key/value"
*/

/*
*-> Other build-in
-> weekMap
-> weekSet
*-> Non build-in
-> stacks (tumpukan)
-> queue (antrian)
-> linked list (daftar terkait)
-> trees (pohon)
-> hash table (tabel hash)
*/

//! Array vs Sets and Object vs Maps
//! kapan waktu yang tepat harus menggunakan salah satu dari data structure?

//# ARRAY vs SETS
/*
$ const task = ['Code', 'Eat', "Code"]
#-> ARRAYS (digunakan ketika)
-> perlu menyimpan nilai secara berurutan dan ketika nilai ini mengandung duplikat
-> perlu memanipulasi data

$ const task = new Set{['Code', 'Eat', "Code"]}
#-> SETS (digunakan ketiak)
-> berurusan dengan "unique value"
-> saat memerlukan kinerja yang tinggi, seperti mencari item atau menghapus item dari set bisa 10x lebih cepat dari array
-> menghapus value duplikat dari array
*/



//# OBJECT vs MAPS
/*
$ const task = {
$   task: 'Code',
$   date: 'Today',
$   repeat: true
$   }
#-> OBJECT (digunakan ketika)
-> membutuhkan key/value store yang traditional
-> membutuhkan struktur yang mudah ditulis dan mudah di akses
*-> Gunakan ketika membutuhkan function didalamnya
*-> Gunakan ketika bekerja dengan JSON (dapat di convert ke map)

$ const task = new Map([
$  ['task', 'Code'],
$  ['date', 'Today'],
$  [false, 'Start Codeing'],
$])
#-> MAPS (digunakan ketika)
-> membutuhkan peforma yang lebih tinggi
-> membutuhkan key dengan tipe data apapun
-> mudah di iterasi
-> mudah untuk dihitung ukurannya
*-> Gunakan ketika membutuhkan map key dan value
*-> Gunakan ketika membutuhkan key tetapi bukan tipe data string
*/