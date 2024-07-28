"use strict";

/*
👋 Hei! Apakah Anda menyukai tugas untuk bagian sebelumnya? Kami punya lebih banyak lagi untuk Anda; kali ini semuanya tentang buku 📕📗📘

Di bawah ini Anda dapat menemukan data yang digunakan dalam tugas;
Ini adalah serangkaian buku yang berhubungan dengan ilmu komputer, matematika dan bisnis;
Setiap buku diwakili oleh sebuah objek;
Properti tidak ada, tipe data berbeda untuk properti yang sama, atau duplikat yang disengaja;
Salin data ini ke editor kode Anda, dan luangkan waktu untuk membiasakan diri dengannya sebelum Anda mulai mengerjakan tugas.
Pastikan untuk mengomentari kode dari tugas sebelumnya jika Anda melanjutkan di file yang sama.
Semoga berhasil dan selamat bersenang - senang!
*/

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
  {
    printBookInfo: function ({ title, author, year = "year unknown" }) {
      console.log(`${title} by ${author}, ${year}`);
    },
    spellword: function (word) {
      console.log(...word);
    },
    printBookAuthorsCount: function (title, ...author) {
      console.log(`The book ${title} has ${author.length} authors`);
    },
  },
];

//! Gunakan for-of loop untuk mengulang array books dan menjumlahkan halaman semua buku. Gunakan variabel pageSum di bawah ini, dan properti pages dari objek book.

let pageSum = 0;

for (let book of books) {
  pageSum += book.pages;
  console.log(pageSum);
}

//! Berikut ini adalah variabel allAuthors yang menyimpan array kosong. Gunakan for-of loop untuk mengisi allAuthors dengan penulis setiap buku dari array books.
//! Ingat bahwa setiap objek book memiliki properti author, yang dapat berupa string (jika hanya ada satu penulis) atau array (jika ada beberapa penulis). Anda mungkin perlu menggunakan operator typeof. Anda juga dapat menggunakan beberapa loop jika diperlukan. Array allAuthors seharusnya hanya memiliki satu level (tanpa array bertingkat).
const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else if (Array.isArray(book.author)) {
    for (const author of book.author) {
      allAuthors.push(author)
    }
  }
}

console.log(allAuthors);


//! Gunakan for-of loop bersama dengan metode Array's authors() untuk mencatat setiap penulis dari allAuthors ke konsol beserta indeksnya. Buat indeks dimulai dari 1, bukan 0.

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}: ${author}`);
}