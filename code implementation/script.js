// No. 1 Mendeteksi palindrom
function deteksiPalindrom(word) {
    const palindrom = word.split('').reverse().join('')
    if (word === palindrom) {
        console.log('Palindrom');
    }else{
        console.log('Bukan Palindrom');
    }
}

deteksiPalindrom('malam');

// No. 2 Membalikkan kata
function reverseWord(kalimat) {
    const reverse = kalimat.split(' ').reverse().join(' ');
    console.log(reverse);
}

reverseWord('Saya Belajar Javascript');

// No. 3 Menghitung total harga
function fazzFood(harga, voucher, jarak, pajak) {
    let diskon; 
    let totalPajak;
    let ongkir;

    // Cek diskon
    if (voucher === 'FAZZFOOD50' && harga >= 50000) {
        diskon = Math.min(harga * 50 / 100, 50000)
    }else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
        diskon = Math.min(harga * 60 / 100, 30000)
    }else{
        diskon = 0;
    }

    // Cek ongkir
    if(jarak<=2){
        ongkir = 5000;
    }else{
        ongkir = 5000 + ((jarak-2) *3000);
    }

    // Cek Pajak
    if (pajak === true) {
        totalPajak = harga * 5 / 100;
    }else{
        totalPajak = 0;
    }

    console.log(`Harga : ${harga}
    Potongan : ${diskon}
    Biaya Antar : ${ongkir}
    Pajak : ${totalPajak}
    SubTotal : ${harga - diskon + ongkir + totalPajak}`);
}

fazzFood(75000, 'FAZZFOOD50', 5, true);

// No. 4 me-urutkan angka
function divideAndSort(int) {

    const sort = int.toString().split('0')
    .map((element) => {
        const el = element.split('').sort().join('')
        return parseInt(el);
    }).join('')
    console.log(sort);
}

divideAndSort(5956560159466056);