// const nilai = [80,75,90,85,70,95,65,60,100,98];
//     nilai.forEach((angka) => {
//     console.log(angka);
// });

// nilai.forEach((angka) => {
//     if (angka >= 75) {
//         console.log(angka + " - Lulus");
//     } else {
//         console.log(angka + " - Remidial");
//     }

// });

// const baru = ["Amel", "Rani", "Ndus", "Alisya","Revlin", "Pina", "Insyiroh", "Sean", "Juju", "Keonho"];
//         baru.forEach((nama) => {
//         console.log("Halo", nama);
//     });

// const nilai = [80,75,90,85,70,95,65,60,50,88];
//    nilai.forEach((angka) => { // dia nampiliin satu persatu
//    console.log(angka + 5);
// });

// const siswa = [
//     { nama: "Amel", alamat: "Solo", umur:12, kelas:8},
//     { nama: "Amira", alamat: "Sukoharjo", umur:15, kelas:10},
//     { nama: "Ayu", alamat: "Solo", umur:16, kelas:10},

// ] ;

// const namaSaja = siswa.map((namaDoang) => namaDoang.nama);//kalo map dia munculinnnya dalam bentuk array baru(isi yang kita panggil)
// console.log(namaSaja);

// const umurSaja = siswa.map((umurDoang) => umurDoang.umur);
// console.log(umurSaja);

// const nilaiBaru = [80,65,90,70,85,60,95,75,88,78];
// const nilaiLulus = nilaiBaru.filter((angka) => {
//     return angka <= 75;
// });
// console.log(nilaiLulus);

 arrayAngka = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 const angkaGenap = arrayAngka.filter((angka) => {
     return angka %2 === 0;
 });
// console.log(angkaGenap);

const angkaGanjil = arrayAngka.filter((angka) => {
  return angka %2 !== 0;
 });
// console.log(angkaGanjil);

const warTicket = [
    {nama : "konser", jumlah : 300, dipesan : 200},
    {nama : "seminar", jumlah : 100, dipesan : 90},
    {nama : "Workshop", jumlah : 80, dipesan : 80},
];

const sisa = warTicket.filter((ticket) => {
  return ticket.jumlah - ticket.dipesan >= 30;  
   
 });


 const habis = warTicket.filter((ticket) => {
  return ticket.jumlah - ticket.dipesan === 0;  
   
 });

 
 const masihsisa = warTicket.find((ticket) => {
  return ticket.jumlah - ticket.dipesan !== 0 && ticket.nama != "konser";  
  
 });
 
//  console.log(masihsisa);
 
const siswa = [
    { nama: "Andi", nilai: 80},
    { nama: "Budi", nilai: 65},
    { nama: "Citra", nilai: 90},
    { nama: "Dina", nilai: 75},
    { nama: "Eko", nilai: 85},
];



//  siswa.forEach((siswa) => {
//      if (siswa.nilai >= 75) {
//         console.log(siswa.nama + " - " + siswa.nilai + " - Lulus");
//     } else {
//      console.log(siswa.nama + " - " + siswa.nilai + " - Remidial");
//    }
//  });


 const product = [
    { nama: "Mouse", harga: 100000},
    { nama: "Keyboard", harga: 150000 },
    { nama: "Headset", harga: 200000},
    { nama: "Flashdisk", harga: 50000},
    { nama: "Webcam", harga: 250000 },
];

const hargapromo = product.map((barang) => {
    let diskon = barang.harga * 0.1;
    let hargaDiskon = barang.harga - diskon;
    return { nama: barang.nama, harga: hargaDiskon };
});

// console.log(hargapromo);
   


const calonAnggota = [
    { nama: "Andi", nilai: 85, kehadiran: 90},
    { nama: "Budi", nilai: 75, kehadiran: 95},
    { nama: "Citra", nilai: 90, kehadiran: 85},
    { nama: "Dina", nilai: 80, kehadiran: 70},
    { nama: "Eko", nilai: 88, kehadiran: 100},
    { nama: "Fajar", nilai: 70, kehadiran: 75},
];

const anggotaLulus = calonAnggota.filter((siswa) => {
    return siswa.nilai >= 80 && siswa.kehadiran >= 80;
}   );

// anggotaLulus.forEach((anggota) => {
//     console.log(anggota.nama )
// });
// console.log ("jumlah anggota yang lulus: " + anggotaLulus.length);

const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "Baik"},
    { kode: "PC002", nama: "Komputer 2", kondisi: "Rusak"},
    { kode: "PC003", nama: "Komputer 3", kondisi: "Baik"},
    { kode: "PC004", nama: "Komputer 4", kondisi: "Perbaikan"},
    { kode: "PC005", nama: "Komputer 5", kondisi: "Baik"},
];

const hasilcari = inventaris.find((item) => {
    return item.kode === "PC003"
});

    if (hasilcari) {
        console.log ("nama perangkat: " + hasilcari.nama );
        console.log ("kondisi: " + hasilcari.kondisi);

    } else {
        console.log ("perangkat tidak ditemukan")
}
