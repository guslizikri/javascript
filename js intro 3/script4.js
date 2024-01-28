// No 4. Menampilkan name dari API

const getData = fetch('htts://jsonplaceholder.typicode.com/users');

getData.then((response) => { return response.json()})
.then((response) => {
    response.forEach(element => console.log(element.name))
})
.catch((err) => {
    console.log(err + ' Terjadi kesalahan');
})

