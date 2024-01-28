// No 1. Menjelaskan dan melanjutkan program menggunakan then catch dan try catch

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find( (element) => {
                return element === day
            });
            if (cek) {
                resolve(cek)
            }else (
                reject(new Error('Hari ini bukan hari kerja'))
            )
        }, 3000);
    })
}

// a. Then Catch

cekHariKerja('senin')
// then digunakan untuk menangani hasil (fullfiled) dari objek promise
.then((result) => {
    console.log(result);
})
// catch digunakan untuk menangani kegagalan (rejected) dari objek promise
.catch((err) => {
    console.log(err);
})

// b Try Catch

async function cekHari() {
    // Try menjalankan code yg memiliki kemungkinan dapat terjadi error (untuk mencoba)
    try {
        // Jika kode yg di coba terdapat error maka baris selanjutnya tidak akan di eksekusi 
        const result = await cekHariKerja('minggu');
        console.log(result);
        // dan error tersebut akan di tangkap oleh catch
    } catch (err) {
        console.log(err);
    }
}
// Try catch dapat digunakan dalam proses asynchronous dan syncronous
cekHari();


