function belajar(materi) {
    console.log("Belajar, " + materi);
    
}

function salam() {
    console.log("Assalamualaikum");
}

function sapa(nama) {
    console.log("hallo, " + nama);
}

// belajar("HTML");
// belajar("CSS");
// belajar("JavaScript")

function tambah(a,b,c){
    console.log(a + b + c);
}

// tambah(60, 30, 20);
// tambah(70, 10,tambah 20);
// tambah(80, 20, 50);

function kalibagi(a,b,c){
    console.log(a * b / c);
}

function bagikali(a,b,c){
    console.log(a / b * c);
}

function pangkatbagi(a,b,c){
console.log(a** b / c);
}

// kalibagi(60,30,2);
// bagikali(70,10,20);
// pangkatbagi(2,8,2);

// function hitungTotal(harga, jumlah){
//     console.log(`Harga Apel perbuah: ${harga}, Jumlah: ${jumlah}`);
//     return harga * jumlah; //return disini ini buat saved the value

// }

// let total = hitungTotal(10000, 3);
// let diskon = 5000;
// let bayar =  total - diskon;

// console.log("Diskon = " + diskon)
// console.log("Harga bayar = " ,bayar);

// function luaslingkaran(phi, r){
//     return phi* r**2;

// }
// function kelilinglingkaran(phi, r){
//     return 2*phi*r;
// }


// console.log("Luas lingkaran      = " + luaslingkaran(3.14, 7));
// console.log("Keliling lingkaran  = " + kelilinglingkaran(3.14, 7));

// function volumebalok(p,l,t){
//     return p*l*t;
// }

// console.log("Volume balok = " + volumebalok(17,5,10));

// const tambah2 = (a,b) => {
//     return a + b;
// };
// console.log(tambah2(5,2));

// const volumebalok = (a,b,c) => {
//     return a *b *c;
// };
// console.log(volumebalok(17,5,10));

// const hitungTotal2 = (harga, jumlah) => {
//    console.log(`Harga Apel perbuah: ${harga}, Jumlah: ${jumlah}`);
//    return harga * jumlah; //return disini ini buat saved the value

//  }

// let total = hitungTotal2(5000, 4);
// let diskon = 2000;
// let bayar =  total - diskon;

// console.log("Diskon = " + diskon)
// console.log("Harga bayar = " ,bayar);

function tampilkanUmur() {
    let umur =  17;
    console.log(umur);
}

// tampilkanUmur();

// console.log(umur); //ini akan eror karena dia diluar si function nya jadi gamuncul

// let beratBadan = 70; //ini global scope

// function tampilberatBadan() {
//     console.log(beratBadan);
// }

// tampilberatBadan();
// console.log(beratBadan);



function tampilberatBadan() {
    let beratBadan = 70; //ini global scope
    console.log(beratBadan);
 }

tampilberatBadan();
console.log(beratBadan);
