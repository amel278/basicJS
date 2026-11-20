const barang = [
    {kode: "kb-001", nama: "keyboard mechanical", harga: 450000},

    {kode: "ms-002", nama: "mouse gaming", harga: 250000},

    {kode: "hs-003", nama: "headset", harga: 350000},
];

const jumlahpembelian = 7;
let diskon = 0.1;

if (jumlahpembelian >= 5 ) {
    console.log("Total harga:" , barang[1].harga * 0.1 * jumlahpembelian );
}else{
    console.log("Tidak dapat diskon:");
}

const jumlah = 7;
const harga = barang[1].harga;
let diskonn = 0;
let total = harga * jumlah;
if (jumlah >= 5){
    console.log( total * 0.1);
};


const daftarSiswa = [
    {nama: "Andi",
     kelas: "XI SIJA",
     nilai: 85,
     kehadiran: 90
    },
    {nama: "Budi",
     kelas: "XI SIJA",
     nilai: 65,
     kehadiran: 85
    },
    {nama: "Citra",
     kelas: "XI SIJA",
     nilai: 92,
     kehadiran: 95
    },
    {nama: "Gendis",
     kelas: "XI SIJA",
     nilai: 96,
     kehadiran: 90
    },
    
];


daftarSiswa.forEach((siswa) => {
if(siswa.nilai >= 75 && siswa.kehadiran >= 80) {
    console.log("Nama:",siswa.nama)
}});


for (let i = 0; i < daftarSiswa.length; i++) {
  if (daftarSiswa[i].nilai >= 75 && daftarSiswa[i].kehadiran >= 80) {
    console.log("Nama:", daftarSiswa[i].nama);
  }
};



const barangtoko = [
    {nama: "Keyboard",
     stock: 10},
    {nama: "Mouse",
     stock: 3},
    {nama: "Headset",
     stock: 0},
    {nama: "Webcam",
     stock: 7},
    {nama: "USB Hub",
     stock: 2},
];

for (let i = 0; i < barangtoko.length; i++) {
     if (barangtoko[i].stock === 0) {
        console.log(barangtoko[i].nama + " - ...");
    } 
    else if (barangtoko[i].stock <= 5) {
        console.log(barangtoko[i].nama + " - Stock sedikit");
    } 
    else {
        console.log(barangtoko[i].nama + " - Stock tersedia");
    }
}

for (let i = 0; i < 11; i++){ 
    console.log(i)
}