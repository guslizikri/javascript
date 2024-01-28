// No 1 --- Membuat variable tipe data objek
const biodata = {
    name: 'Zikri Gusi',
    age: 19,
    hobby: ['catur', 'ngoding'],
    isMarried: false,
    schoolList: [
        {
            nama: 'SDN 15',
            yearIn: 2010,
            yearOut: 2016,
            major: null
        },
        {
            nama: 'SMPN 173',
            yearIn: 2016,
            yearOut: 2019,
            major: null
        },
        {
            nama: 'SMKN 12',
            yearIn: 2019,
            yearOut: 2022,
            major: 'Rekayasa Perangkat Lunak'
        }
    ],
    skills: [
        {
            nama: 'catur',
            level: 'beginner'
        },
        {
            nama: 'Ngoding',
            level: 'beginner'
        }
    ],
    interestInCoding: true
};

console.log(biodata.schoolList[2].major);

// NO 2 --- Menghitung rata-rata UN beserta grade-nya

const mtk = 90;
const bindo = 90;
const ipa = 90;
const basing = 50;

let grade;

if(typeof(mtk) == "number" && typeof(bindo) == "number" && typeof(ipa) == "number" && typeof(basing) == "number"){
   const rataRata = (mtk + bindo + ipa + basing) / 4;
   if(rataRata >= 90){
    grade = 'A'
   }else if(rataRata >= 80 && rataRata < 90){
    grade = 'B'
   }else if(rataRata >= 70 && rataRata < 80){
    grade = 'C'
   }else if(rataRata >= 60 && rataRata < 70){
    grade = 'D'
   }else{
    grade = 'E'
   }
   console.log(`Rata-rata : ${rataRata}
    Grade : ${grade}`);
}else{
    console.log('Semua nilai harus terisi dengan benar!');
}

// NO 3 --- Membuat program segitiga terbalik
let string="";

function printSegitiga(angka){
    if(typeof(angka) == 'number'){
        for(angka; angka>0; angka--){
            for(let j =1; j<=angka; j++){
                string+= j;
            }
            string+= "\n";
        }
        
    }else{
        string = 'Data harus number';
    }
    return console.log(string);
}

printSegitiga(5);

// NO 4 --- Terdapat 2 soal
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// a --- Mengubah data dengan spread operator

const dataSaya = {...data, hobby: 'catur'};
dataSaya.name = 'Zikri';
dataSaya.email = 'z@gmail.com';
console.log(dataSaya.name);

// b --- Mengambil data dengan destructuring

const {street, city} = data.address;
console.log(city);
console.log(street);
    
