const siswa2 = 
    {nama: " aNdI ", 
    kelas: "x ict",
     email: " ANDI@GMAIL.COM "
   };

const {nama: namaSiswa, kelas: kelasSiswa, email: emailSiswa} = siswa2;

console.log(` 
    Nama: ${namaSiswa.toUpperCase().trim()}
    Kelas: ${kelasSiswa.toUpperCase().trim()} 
    Nilai: ${emailSiswa.toLowerCase().trim()}`);

const siswa = [
    { nama: "Andi", umur: 17, email: "andi@gmail.com"},
    { nama: "Budi", umur: 17, email: "budi@yahoo.com"},
    { nama: "Citra", umur: 17, email: "citra@gmail.com"},
];


const hasilcari = siswa.filter((siswa) => siswa.email.endsWith("@gmail.com"));
const result = hasilcari.map((siswa) => { return {nama: siswa.nama, email: siswa.email};   });

console.log(result);
