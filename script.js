// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa = {
    nama: 'Farhan', 
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`);
    }
}

let mahasiswa2 = {
    nama: 'Doddy', 
    energi: 20,
    makan: function (porsi) {
        this.energi = this.energi + porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`);
    }
}

// 2. Function Declaration 
// function Mahasiswa(nama, energi) {
//    let mahasiswa = {}
//    mahasiswa.nama = nama
//    mahasiswa.energi = energi
   
//    mahasiswa.makan = function (porsi) {
//        this.energi += porsi
//        console.log(`Halo ${this.nama}, selamat makan!`);
//    }

//    mahasiswa.main = function (jam) {
//        this.energi -= jam
//        console.log(`Halo ${this.nama}, selamat bermain!`)
//    }

//    return mahasiswa
// }

// let farhan = Mahasiswa('Farhan', 10)
// let Doddy = Mahasiswa('Doddy', 20)

// 3. Constructor Function (yg biasa digunakan)
function Mahasiswa (nama, energi) {
    this.nama = nama
    this.energi= energi

    this.makan = function (porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
} 

let farhan = new Mahasiswa('Farhan', 3)

// 4. Object.create