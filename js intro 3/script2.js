// Melanjutkan program menggunakan callback function

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ];
        if (!error) {
            callback(null, month);  
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 1000);
};

function cbMonth(error, data) {
    if (data.length > 0) {
        dataBaru = data.map((element) => element)
        console.log(dataBaru)
    }else(
        console.log(error)
    )
}

getMonth(cbMonth)