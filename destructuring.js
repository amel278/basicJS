const siswa = {
    nama: "Amel", umur: 16, kelas: 10, hobby: "listenmusic"
};

// console.log(siswa.nama)
// console.log(siswa.umur)
// console.log(siswa.kelas) // ini yang cara simple/dasar

// delete siswa.hobby;
// console.log(siswa)

const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa} = siswa;

// console.log(namaSiswa);
// console.log(umurSiswa);
// console.log(kelasSiswa);

const warna = ["Merah", "Hijau", "Kuning" ];
const [warna1, warna2, warna3] = warna;

// console.log(warna1)

const siswaBaru = [ 
    {nama: "Andi", nilai: 80, umur: 14, kelas: 8},
    {nama: "Budi", nilai: 65, umur: 15, kelas: 9},
    {nama: "Citra", nilai: 90, umur: 16, kelas: 10},
    {nama: "Dina", nilai: 70, umur: 17, kelas: 11},
    {nama: "Eko", nilai: 85,  umur: 18, kelas: 12},
];

siswaBaru.forEach(({nama, nilai}) => {// ini yang destructuring karena pake {}
    // console.log(nama, nilai)
});

const namasaja = siswaBaru.map((namaDoang) => namaDoang.nama);
const nilaisaja = siswaBaru.map((nilaiDoang) => nilaiDoang.nilai);
// console.log(namasaja);
// console.log(nilaisaja); //basic

const daftarNama = siswaBaru.map (({nama,nilai}) => {
    return {nama, nilai}; // destructuring
});
// console.log(daftarNama);


const daftarHarga = [
    {nama: "Asus", harga: 14000000, kondisi: "baru"},
    {nama: "Lenovo", harga: 16000000, kondisi: "bekas"},
    {nama: "MSI", harga: 22000000, kondisi: "baru"},
];

const namaharga = daftarHarga.map (({nama, harga}) => {
    return {nama, harga};

});

// console.log(namaharga);