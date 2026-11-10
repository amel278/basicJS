const nama = "Amel";
const umur = 16;
console.log(`Nama saya ${nama} dan umur saya ${umur}`);

const harga = 5000;
const jumlah = 3;
console.log(`Total harga: ${harga * jumlah}`);

const nama2 = "Andi";
const nilai = 80;
console.log(`Nilai total Andi: ${nilai + 5}`);

const nama3 = "Amel";
const kelas = "X ICT";
const nilai2 = 80; // ini pake variabel
let status;
if (nilai2 >= 75) {
    status = "Lulus";
} else {
    status = "Tidakk Lulus";// ini kenapa status di coret karena dii js tu emang ada fungsi status
}
console.log(`${nama3} mendapatkan nilai ${nilai2}, Status: ${status}`);

console.log(`
    Nama: ${nama3}
    Kelas: ${kelas}
    Nilai: ${nilai2}`);// enter itu pake \n

const siswa = {
    nama: "Amel", 
    kelas: "X ICT", 
    nilai: 80};// ini kalo pake objek

console.log(` 
    Nama: ${siswa.nama}
    Kelas: ${siswa.kelas} 
    Nilai: ${siswa.nilai}`);
