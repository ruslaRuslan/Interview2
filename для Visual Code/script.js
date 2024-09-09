// function add() {
//   let result = 0;
//   return function (sum) {
//     console.log((result += sum));
//   };
// }
// const changeAdd = add();

// changeAdd(5); //5
// changeAdd(55); // 60
// changeAdd(-25); // 35
// // closure
// // intervyu
// ------------------------------------------------------------------------------------------------------------------

// const laptop = { model: "HP", il: 2018, olke: "china" };

// // T1. laptop obyekti yarat (model, il, olke)
// // laptop2 yarat, ve kopyala (modeli ve il deyis)
// // Her iki obyekti console-a cixart.

// const laptop2 = { ...laptop, model: "BMW", il: 2020 };

// console.log("laptop:", laptop);
// console.log("laptop2:", laptop2);

// // ------------------------------------------------------------------------------------------------------------------
// // T2. Bir Arrow  funksiya yarat. Ona laptop obyektini verim. O console-a bele bir mesaj cixartsin:
// // showInfo(laptop)
// // -> HP markali laptop, 2018-ci ilde china-da istehsal olunub.

// const showInfo = (info) => {
//   console.log(
//     `${laptop.model} markali laptop, ${laptop.il}-ci ilde ${laptop.olke}-da istehsal olunub. `
//   );
// };
// showInfo(laptop);
// // ------------------------------------------------------------------------------------------------------------------
// // T3. showAge(laptop) // Verilen laptopun 6 yasi var.

// const showAge = () => {
//   let date = new Date();
//   let newDate = date.getFullYear();
//   console.log(`Verilen laptopun ${newDate - laptop.il} yasi var.`);
// };
// showAge(laptop);
// // ------------------------------------------------------------------------------------------------------------------

// // T4. laptop obyektine yeni bir property-e elave et. sahib: {ad:'Ruslan', soyad:'Zeynalov', dogumIl:2000}

// laptop.sahib = {
//   ad: "Ruslan",
//   soyad: "Zeynalov",
//   dogumIl: 2000,
// };
// console.log(laptop);

// // ------------------------------------------------------------------------------------------------------------------

// // T5. showOwner(laptop) // HP markali laptopun sahibi Zeynalov Ruslandir. O 2000-ci ilde dogulub.

// const showOwner = () => {
//   console.log(
//     `${laptop.model} markali laptopun sahibi ${laptop.sahib.soyad} ${laptop.sahib.ad}-dir`
//   );
// };
// showOwner();
// // ------------------------------------------------------------------------------------------------------------------

// // T6. showAgeDifferences(laptop) // sahibinin dogum ili ile laptopun il ferqi. (sahib 2000, Hp 2018) -> 18 il.

// const showAgeDifferences = (info) => {
//   console.log(
//     ` sahibinin dogum ili ile laptopun il ferqi. (sahib ${
//       laptop.sahib.dogumIl
//     }, ${laptop.model} ${laptop.il}) -> ${laptop.il - laptop.sahib.dogumIl} il.`
//   );
// };
// showAgeDifferences(laptop);

// // ------------------------------------------------------------------------------------------------------------------

// // T7*. Yeni bir laptop3 obyekti yarat Spread (...) operatoru ile. Sahib melumatlarini deyis. (sahib: ali, isiyev, 1995)

// let laptop3 = { ...laptop.sahib, ad: "Ali", soyad: "isiyev", dogumIl: 1995 };
// console.log(laptop3);

// // ------------------------------------------------------------------------------------------------------------------

// // T8. isEqual(laptop, laptop3) -> bu funksiya 2 obyekt alir, onlar beraberdirse, console-a "Bunlar eyni obyektlerdir " , eks halda "Bunlar ferqli obyektlerdir"
// const isEqual = (laptop, laptop3) => {
//   if (JSON.stringify(laptop) === JSON.stringify(laptop3)) {
//     console.log("Bunlar eyni obyektlerdir ");
//   } else {
//     console.log("Bunlar ferqli obyektlerdir");
//   }
// };
// isEqual();

// // ------------------------------------------------------------------------------------------------------------------

// // T9. isSameName(laptop, laptop2) -> bu funksiya 2 obyekt alir, obyektlerin modelleri eynidirse "Bunlar eyni modeldirler", eks halda "bunlar ferqli modeldirler" mesajini console-a cixarsin.
// const isSameName = () => {
//   if (laptop.model === laptop2.model) {
//     console.log("Bunlar eyni modeldirler");
//   } else {
//     console.log("bunlar ferqli modeldirler");
//   }
// };
// isSameName(laptop, laptop2);

// // ------------------------------------------------------------------------------------------------------------------

// // T10. isSameOwner(laptop, laptop3)-> bu funksiya 2 obyekt alir, obyektlerin sahiblerinin adlari eynidirse "Bunlar eyni adama mexsusdur", eks halda "bunlar ferqli adamlara mexsusdur" mesajini console-a cixarsin.
// const isSameOwner = () => {
//   if (laptop.ad === laptop3.ad) {
//     console.log("Bunlar eyni adama mexsusdur");
//   } else {
//     console.log("bunlar ferqli adamlara mexsusdur");
//   }
// };
// isSameOwner(laptop, laptop3);
// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// add(5, 5);
// function add(a, b) {
//   let result = a + b;
//   console.log(result);
// }

// const add2 = function (a, b) {
//   let result = a + b;
//   console.log(result);
// };
// add2(2, 3);

// const add3 = (a, b) => a + b;
// console.log(add3(1, 2));
// _______________________________________________________________________________________________________________________________________

// let user = prompt("palindrom olup olmaduguni yoxla");
// function isPalindrome(string) {
//   let reversed = string.split("").reverse().join("");
//   return reversed === user;
// }
// if (isPalindrome(user)) {
//   console.log(`"${user}" palindromdu`);
// } else {
//   console.log(`"${user}" palindrom deyil`);
// }
// _______________________________________________________________________________________________________________________________________

// setTimeout(() => {
//   console.log("10 saniyə sonra salam!");
// }, 10000);

// setInterval(() => {
//   console.log("Hər 10 saniyədə bir salam!");
// }, 10000);
// _______________________________________________________________________________________________________________________________________
// let array = [1, 2, 3, 4, 5];
// let array2 = ["Sada", "Mamed", "Nazim", "Elcan", "Sahib", "Ruslan"];

// // let result = array.reduce((a, b) => a + b);
// // console.log(result);

// let result2 = array2.every((element) => element.includes("R"));
// console.log(result2);
