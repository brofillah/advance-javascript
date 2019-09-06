// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak bro

// let mahasiswa = {
//     nama: 'Farhan', 
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Selamat makan ${this.nama}, selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy', 
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Selamat makan ${this.nama}, selamat makan`);
//     }
// }

// 2. Function Declaration 

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.name}, selamat bermain`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
// //    mahasiswa.makan = methodMahasiswa.makan
// //    mahasiswa.main = methodMahasiswa.main
// //    mahasiswa.tidur = methodMahasiswa.tidur
//    let mahasiswa = Object.create(methodMahasiswa)  // method untuk auto instansiasi properti (mirip seperti constructor)
//    mahasiswa.nama = nama
//    mahasiswa.energi = energi
   
//    return mahasiswa
// }

// let farhan = Mahasiswa('Farhan', 10)
// let doddy = Mahasiswa('Doddy', 20)



function Mahasiswa (nama, energi) {
    // let mahasiswa = Object.create(methodMahasiswa)
    // let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi

    Mahasiswa.prototype.makan = function (porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!`
    }

    Mahasiswa.prototype.main = function (jam) {
        this.energi -= jam
        return `Halo ${this.nama}, selamat bermain!`
    }

    Mahasiswa.prototype.tidur = function (jam) {
        this.energi += jam * 2
        return `Halo ${this.nama}, selamat tidur!`
    }

    let farhan = new Mahasiswa('Farhan', 10)

    // return mahasiswa
}



// 3. Constructor Function (yg biasa digunakan)
// function Mahasiswa (nama, energi) {
//     this.nama = nama
//     this.energi= energi

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// } 

// let farhan = new Mahasiswa('Farhan', 3)


// versi class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama
        this.energi = energi
    }

    makan = function (porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!`
    }

    main = function (jam) {
        this.energi -= jam
        return `Halo ${this.nama}, selamat bermain!`
    }

    tidur = function (jam) {
        this.energi += jam * 2
        return `Halo ${this.nama}, selamat tidur!`
    }
}

let farhan = new Mahasiswa ('Farhan', 10)