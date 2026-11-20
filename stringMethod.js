//// TOUPPERCASE & TOLOWERCASE

const nama = "Amel";
console.log(nama.toUpperCase());
console.log(nama.toLowerCase());

const username = "AmEl";
const usernameBaru = username.toLowerCase();
console.log(usernameBaru);


//// TRIIM

const name = " Amel ";
console.log(name);
console.log(name.trim());


//// INCLUDES

const email = "andi@gmail.com";
console.log(email.includes("@"));// ini berarti benar dia di variabel nama

const nama2 = "Amel";
console.log(nama2.includes("el"));
console.log(nama2.includes("sha"));

const emails = "andi@gmail.com";
if (emails.includes("@")) {
    console.log("email valid");
} else {
    console.log("email not valid");
}

const code = "PC-001";
console.log(code.startsWith("PC"));

const kode = "LT-001";
if (kode.startsWith("PC")) {
    console.log("Barangnya komputer");
} else {
    console.log("Barangnya bukan komputer");
}

const file = "laporan.pdf";
console.log(file.endsWith("pdf"));

const files = "laporan.jpg";
if (files.endsWith(".pdf")) {
    console.log("File pdf");
}else if (files.endsWith(".jpg")) {
    console.log("File gambar");
}else if (files.endsWith(".docs")) {
    console.log("File word");
}else {
    console.log("file tidak didefinisikan");
}

const nama3 = "Amel";
console.log(nama3.indexOf("e"), nama3.indexOf("l"));// ini untuk nyari posisi hurufnya
console.log(nama3.indexOf("p"));

const nama4 = "Andi";
if (nama4.indexOf("z") !== -1) {
    console.log("Huruf ditemukan");
}else {
    console.log("Huruf tidak ditemukan");
}

const numby = 2;
if (numby %2 === 0) {
    console.log("Genap");
}else {
    console.log("Ganjil")
}

const nama5 = "Amel";
console.log(nama5.slice(0, 2)); // ini yang dimunculin huruf yang sebelum index 2 jadi 0 dan 1

const namaBarang = "PC-001";
console.log(namaBarang.slice(3, 7));

const kalimat = "Saya Belajar Java";
const hasil = kalimat.replace (
    "Java", "JavaScript" // yang pertama itu yang mau diganti apa trus yang kedua itu gantinya.
);
const hasilBaru = hasil.replace (
    "Saya", "Aku"
)
console.log(hasilBaru);

const nama6 = "Amel,Budi,Citra";
const hasil2 = nama6.split(",");// dipisah kan nya pake (,) untuk dimunculin 3 nama itu ke dalam array
const kalimat2 = "Saya Belajar JavaScript";
const hasil3 = kalimat2.split(" ");
console.log(hasil2);
console.log(hasil3);

const namaKelompok = ["Andi", "Budi", "Citra"];
const joinKelompok = namaKelompok.join(" - ");
console.log(joinKelompok);

const kasus1 = "Aku suka renang";
const kasus = kasus1.replace("Aku", "Saya");
const kasushasil = kasus.replace("renang", "berenang");
const hasil4 = kasushasil.split(" ");
console.log(hasil4)

const username2 = " AdMIN123 ";
const hasil5 = username2.trim().toLowerCase();
console.log(hasil5); 


