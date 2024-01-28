// No 1 Menjelaskan 10 method build in function
const numbers = [45, 4, 9, 16, 25];

// 1. map(): Membuat array baru dengan menjalankan fungsi pada setiap element
const numbers1 = numbers.map((e) => {return e*2});

// 2. forEach(): Menjalankan fungsi pada setiap elemen array tanpa membuat array baru.
numbers.forEach((e) =>  e);

// 3. filter(): Membuat array baru dengan elemen-elemen yang memenuhi kondisi tertentu.
const numbers2 = numbers.filter((e) => {return e > 20});

// 4. indexOf(): Mengembalikan indeks dari elemen pertama yang ditemukan dalam array. Jika tidak ditemukan, mengembalikan -1.
const index = numbers.indexOf(45);

// 5. find(): Mengembalikan nilai dari elemen pertama yang memenuhi kondisi tertentu dalam array.
const cari = numbers.find(element => element > 18);

// 6. some(): Mengembalikan nilai true jika setidaknya satu elemen memenuhi kondisi tertentu.
const beberapa = numbers.some(element => element > 18);

// 7. every(): Mengembalikan true jika semua elemen memenuhi kondisi tertentu.
const jikaSemua = numbers.every(element => element > 18);

// 8. push(): Menambahkan elemen ke akhir array
numbers.push(1);

// 9. pop(): Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut
numbers.pop();

// 10. length : Menghitung panjang array
numbers.length

// No 2 Membuat program Search name dengan callback function


function searchName(word, maks, callback){
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
        ]
    // Memanggil/menjalankan serta me-return callback function
    return callback(word, maks, name)
}

function cbSearch(input, maks, data) {
    // /input/i: Reguler expresion agar input menjadi case insensitive 
    const re = new RegExp(input, 'i')

    // Proses filter data
    const dataSearch = data.filter(element => {
        return element.match(re);
    }).splice(0,maks);
    return dataSearch;
}

console.log(searchName('an', 4, cbSearch));


// No 3 Mencari data dan mengurutkannya

// catatam untuk no.3 untuk proses nya lebih efisien di masukkan kedalam validasi yang membutuhkan, jadi kalo di taro luar, proses akan tetap di eksekusi

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // Mengurutkan data array
    dataArray.sort(function(a, b) {
        return a - b;
    })
    // Me-filter data array yang sudah di urutkan
    const dataBaru = dataArray.filter(e => {
        return e > nilaiAwal && e < nilaiAkhir
    })
 
    // Melakukan validasi
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5 && dataBaru.length != 0) {   
        console.log(dataBaru);
    }else if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal');
    }else if (dataArray.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih besar dari 5');
    }else if (dataBaru.length == 0) {
        console.log('Nilai tidak ditemukan');
    }
}

seleksiNilai(25, 20 , [2, 25, 4, 14, 17, 30, 8])
