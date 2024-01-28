// Membuat 2 program menggunakan promise

// Program 1  
const pesanProduct = (barang, jumlah) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const products = [
                {
                    nama : 'indomie',
                    stok : 10,
                    harga : 5000
                },
                {
                    nama : 'chitato',
                    stok : 15,
                    harga : 2000
                },
                {
                    nama : 'aqua',
                    stok : 5,
                    harga : 3000
                }
            ];

            let cek = products.find( (element) => {
                return element.nama === barang
            });
            if (cek) {
                if (cek.stok < jumlah) {
                    reject(Error(`Maaf, stok ${cek.nama}  tidak mencukupi`))
                }
                resolve(`Pesanan ${cek.nama} sebanyak ${jumlah}, dengan total harga : Rp.${cek.harga * jumlah}
                Sedang Diproses `)
            }else (
                reject(Error(`Maaf, ${barang} saat ini tidak tersedia`))
            )
        }, 1000);
    })
}

pesanProduct('chitao', 9)
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})

// Program 2
const formLogin = (username, pass) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const user = [
                {
                    username : 'qwerty',
                    password : 'qwe123'
                },
                {
                    username : 'asd',
                    password : 'asd123'
                }
            ];
            let cek = user.find( (element) => {
                return element.username === username
            });
            if (cek) {
                if (cek.password !== pass ) {
                    reject(Error('Password anda salah'))
                }
                resolve(`Selamat datang ${cek.username} anda berhasil login`)
            }else (
                reject(Error('Username anda salah'))
            )
        }, 1000);
    })
}

const cekLogin = async () => {
    try {
        const login = await formLogin('qwerty', 'qwe123')
        console.log(login);
    } catch (err) {
        console.log(err);
    }
}
cekLogin()