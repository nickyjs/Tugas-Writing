//Membuat variabel promis dengan tipe data boolean
// let promise = true;

// //Mendeklarasikan promise dengan parameter
// let Promises = new Promise((resolve, reject) => {
//     if(promise){
//         resolve('promises terpenuhi')
//     }else{
//         reject('promise tidak terpenuhi')
//     }
// })

// Promises
// .then(res => console.log(`Ok ${res} !`))
// .catch(res => console.log(`Its Ok ! ${res}`))











//MODULE
// // File Jepang.js
// export let motor = ["suzuki", "yamaha", "honda", "kawasaki"]

// let entertainment = ["anime", "manga", "wibu", "dorama"]
// export default entertainment

// export function sayHello() {
//  console.log("hallooo")
// }

// import {apple} from './amerika.js';
//  console.log(apple);

// // File Indonesia.js
// import {motor} from "./Jepang.js"
//  console.log(motor);

// import Entertainment, { motor as motorJepang, sayHello  } from "./jepang.js"
// console.log(Entertainment);

// // File Amerika.js
// let apple = ["iphone", "macbook", "imac"]
//   export {apple}

// Berdasarkan script diatas,
// - Indonesia hanya bisa import, karena dia file utama.
// - Jepang bisa melakukan import dan export.
// - Amerika hanya melakukan export.










//Struktur Recursive

// let kali = function pengali(a, b) {
//     if (b === 1) {
//         return a;
//     } else {
//         return a + pengali(a, b - 1)
//     }
// };
// console.log(kali(3, 4));




// function recursive(){
//     //
//     recursive()
//     //
// }







// OBJECT
// Deklarasi Object buah dan menambahkan properti

// let buah = [
//     {
//         nama : "Apel",
//         warna : "Merah",
//         harga : 5000,
//     },
//     {
//         nama : "Jeruk",
//         warna : "Orange",
//         harga : 6000,
//     },
//     {
//         ama : "Semangka",
//         warna : "Merah",
//         harga : 60000,
//     }];

//     buah.forEach((listBuah) => {
//         console.log(listBuah);
//     })
    

    //     newObject :{
//         rasa : "Manis",

//     }
// };
// console.log(buah.nama);
// console.log('buah apel rasanya :', buah.newObject.rasa);


// //Confert property object to array
// console.log(Object.values(buah))

// //Confert object to array
// console.log(Object.entries(buah))


// delete buah.rasa;

// console.log(buah);


//update
// buah = {
//     namaBuah : "apel"
// }
//  console.log(buah);

//mengupdate value dari key yang sudah tersedia
// buah.warna = "hijau"
// buah.harga = 100000

// console.log(buah);

//Mengakses seluruh object
//  console.log(buah);










//ARRAY

// let arrayku = ["Julya", "Informatika", 20]

// console.log("panjang Arrayku adalah = " + arrayku.length)




// let arrayMulti = [
//     ["Nicky", "Informatika", 20],
//     ["Julya", "Farmasi", 21],
//     ["Alfian", "Psikologi", 22]
// ]

// let newArray = arrayMulti.map((index)=>  {
//         return index;  
// });

// console.log(newArray)


// //push
//  arrayMulti.push(["Andro", "Teknik Kimia", 20, "Purwodadi"])
//  //pop
//  arrayMulti.pop()
//shift
//arrayMulti.shift()
//unshift
//arrayMulti.unshift()
//for each
// arrayMulti.forEach(element =>{
//     console.log(element)
// })



// console.log(arrayMulti[0][0]);
// //Mengakses array ke 0, dengan index ke 0

// console.log(arrayMulti[1][1]);
// //Mengakses array ke 1, dengan index ke 1

// console.log(arrayMulti[2][2]);
// // Mengakses array ke 2, dengan index ke 2



