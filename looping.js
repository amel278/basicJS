// console.log("Nama saya amel");
// console.log("Nama saya amel");
// console.log("Nama saya amel");
// console.log("Nama saya amel");
// console.log("Nama saya amel");

// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }


// for(let i = 11; i <= 20; i += 2) {
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++) {
//     console.log (i + " x " + i + " = " + (i*i));
// }

// for(let i = 1; i <= 10; i++) {
//     console.log (i + " x " + 1 + " = " + (i*1));
// }


// let total=0;

// for (let i = 1; i <= 5; i++){
//     total = total +i;
//     console.log(`i=${i} -> total=${total}`);
// }
// console.log(total); //15

// let total=0;

// for (let i = 10; i <= 20; i+=2){
//     total = total +i;
//     console.log(`i=${i} -> total=${total}`);
// }
// console.log(total); //15

// let nama = ["Rani", "Amel", "Gendhis","Fina", "Aline", "Alisya", "Iin", "Azzah","Khansa","Keonho"];
// for (let i =0; i < nama.length; i++){
//     console.log(nama [i]);
// }//kalo data ratusan

// let nama = ["Rani", "Amel", "Gendhis","Fina", "Aline", "Alisya", "Iin", "Azzah","Khansa","Keonho"];
// for (let i =0; i < 10; i++){
//     console.log('${i + 1}. {nama [i]}';
// }

// let nilai = [80, 65, 90, 55, 75, 95, 98];
// for (let i = 0; i < nilai.length; i++) {
//      if (nilai[i]  >= 90) {
//         console.log("nilainya" +  nilai[i] + ", Sangat Bagus");
//     } else if (nilai[i] >=80 && nilai   [i] <= 90){
//         console.log("nilainya" + nilai[i] + ", Bagus");
//     } else {
//         console.log ("nilainya" +  nilai[i] + ", Cukup");
//     }
// }

// let nilai = [80, 65, 90, 75, 95];
// let nama = ["Amel", "Rani", "Cia", "Elsa", "Namira"]
// for (let i = 0; i < nilai.length && nama.length; i++) {
//      if (nilai[i]  >= 90) {
//         console.log(nama[i] + " - "+ nilai[i] + " - Lulus");
//       } else {
//         console.log (nama[i] + " - " + nilai[i] + " - Tidak lulus");
//     }
// }

let nilai = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < nilai.length; i++) {
     if (nilai[i] % 2 === 0 && nilai[i] >=10) {
        console.log(nilai[i] + " - Genap" + " -" + nilai[i]);
     } else if (nilai[i] && nilai[i] <10){
        console.log(nilai[i] + " - Ganjil" + "-" + nilai[i])
     } else {
        console.log ( nilai[i] + " - Ganjil");
    }
}