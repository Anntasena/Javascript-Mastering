"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imageCountainer = document.querySelector(".images");

// //$ FUNCTION //////////
// //$ ///////////////////

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imageCountainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Images not found!!"));
    });
  });
};

let currentImg;

//$ /////////////////////////
//$ /////////////////////////

//# PART 1
const loadNPause = async function () {
  try {
    // load image 1
    let img = await createImage("../img/img-1.jpg");
    console.log("Image 1 passed with async await function");
    await wait(2);
    img.style.display = "none";

    // load image 2
    img = await createImage("../img/img-2.jpg");
    console.log("Image 2 passed with async await function");
    await wait(2);
    img.style.display = "none";

    // load image 3
    img = await createImage("../img/img-3.jpg");
    console.log("Image 3 passed with async await function");
    img.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};

//# PART 2
const loadAll = async function (imgArr) {
  try {
    //@ loop imgs dan memberikan function createImg() yang akan menghasilkan promise
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);
    //@ mengubah promise menjadi value
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    //@ loop imgsEl dan memberikan class "parallel" untuk setiap elemennya
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.log(error);
  }
};

// loadNPause();
loadAll(["../img/img-1.jpg", "../img/img-2.jpg", "../img/img-3.jpg"]);

//$ /////////////////////////////
//$ /////////////////////////////
//$ /////////////////////////////
//$ TESTING
const testAwait = async function (tesArr) {
  const arrs = tesArr.map(async (arr) => await arr); // async akan selalau menghasilkan promise
  console.log(arrs);
  const renderArrs = await Promise.all(arrs); // mengubah promise menjadi value tetapi harus menggunakan await ,jika tidak ia akan tetap menjadi promise
  console.log(renderArrs);
};

testAwait([1, 2, 3, 4, 5, 6]);
