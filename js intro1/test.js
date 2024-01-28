const products = [
    {
        "product_name": "mie goreng",
        "product_description": "mie instan",
        "product_category": "indofood",
        "product_price": 3000,
        "stock": 88,
        "product_brand": "indofood",
    },
    {
        "product_name": "mie goreng cabe hijo",
        "product_description": "mie instan 2",
        "product_category": "food",
        "product_price": 3000,
        "stock": 0,
        "product_brand": "indofood",
    },
    {
        "product_name": "mie goreng rendang",
        "product_description": "mie instan 3",
        "product_category": "food",
        "product_price": 3000,
        "stock": 10,
        "product_brand": "indofood",
    },
    {
        "product_name": "Avocado delight",
        "product_description": "kopi dalam botol",
        "product_category": "drink",
        "product_price": 10000,
        "stock": 20,
        "product_brand": "Good Day",
    },
    {
        "product_name": "Tiramisu Bits",
        "product_description": "kopi dalam botol",
        "product_category": "drink",
        "product_price": 10000,
        "stock": 0,
        "product_brand": "Good Day",
    },
    {
        "product_name": "Mocainno",
        "product_description": "kopi dalam botol",
        "product_category": "drink",
        "product_price": 10000,
        "stock": 0,
        "product_brand": "Good Day",
    },
    {
        "product_name": "Indomilk",
        "product_description": "susu dalam botol",
        "product_category": "drink",
        "product_price": 20000,
        "stock": 1,
        "product_brand": "indofood",
    },
    {
        "product_name": "Pepsi",
        "product_description": "soda dalam botol",
        "product_category": "drink",
        "product_price": 20000,
        "stock": 1,
        "product_brand": "indofood",
    },
    {
        "product_name": "Citato bbq",
        "product_description": "kentang goreng",
        "product_category": "snack",
        "product_price": 12000,
        "stock": 5,
        "product_brand": "indofood",
    },
    {
        "product_name": "Qtela Original",
        "product_description": "Cemilan ubi goreng",
        "product_category": "snack",
        "product_price": 12000,
        "stock": 0,
        "product_brand": "indofood",
    },
    {
        "product_name": "Ayam bakar",
        "product_description": "Cemilan kentang goreng",
        "product_category": "snack",
        "product_price": 10000,
        "stock": 100,
        "product_brand": "Potabee",
    },
    {
        "product_name": "Salted Egg",
        "product_description": "Cemilan kentang goreng",
        "product_category": "snack",
        "product_price": 9000,
        "stock": 100,
        "product_brand": "Potabee",
    },
    {
        "product_name": "Wagyuu",
        "product_description": "Cemilan kentang gorengs",
        "product_category": "snack",
        "product_price": 10000,
        "stock": 100,
        "product_brand": "Potabee",
    },

]


products.forEach((e, i) => {
    if(e.stock > 0){
        products[i].stock_status = 'available';
    }else{
        products[i].stock_status = 'unavailable';
    }
})

const indofood = products.filter( function(e){
    return e.product_brand === 'indofood';
});

//! hitung dan cetak jumlah product indofood

indofood.forEach(e => console.log('No. 1 :' + e.product_name))
console.log(indofood.length);

// ! cetak product_name dengan brand indofood (tambahkan filed stock_status)

indofood.forEach(function(e) {
    console.log(`No 2 : ${e.product_name} dari ${e.product_brand} -> status: ${e.stock_status}`);
})

// ! cetak product_name, product_price dengan category dirnk (only avilble stock)

products.forEach(e => {
    if(e.product_category === 'drink' && e.stock > 0){
        console.log(`No. 3 : nama produk : ${e.product_name}  harga: ${e.product_price}`);
    }
})

//! cetak product_name dengan brand indofood dan category snack (tambahkan filed stock_status)

indofood.forEach(e => {
    if(e.product_category === 'snack'){
        console.log(`No. 4 : ${e.product_name} - status: ${e.stock_status} `);
    }
})

//! cetak dan hitung product_name yang punya product_description sama


const duplikatDeskripsi = (products) => {
    let duplicateDescriptions = {};
    let duplikatArray = [];

    for (const product of products) {
        const description = product.product_description;
        // console.log(description);

        if (duplicateDescriptions[description]) {
            // console.log(duplicateDescriptions);
            duplicateDescriptions[description].push(product);
        } else {
            duplicateDescriptions[description] = [product];
            // console.log(duplicateDescriptions);
        }
        
    }

    // Looping untuk menyusun array hasil
    for (const description in duplicateDescriptions) {
        const productsArray = duplicateDescriptions[description];
        // console.log(productsArray);

        if (productsArray.length > 1) {
            duplikatArray.push(...productsArray);
        }
    }

    return duplikatArray;
};

const duplikatDariDeskripsi = duplikatDeskripsi(products);

duplikatDariDeskripsi.forEach((e) => {
    console.log(`No 5 : ${e.product_name} - deskripsi : ${e.product_description}`);
})
console.log(duplikatDariDeskripsi.length);




























// // Cara ke 2
// const kopiDalamBotol = products.filter((product) => {
//     return product.product_description == 'kopi dalam botol';
// })
// const cemilanKentangGoreng = products.filter((product) => {
//     return product.product_description == 'Cemilan kentang goreng';
// })

// kopiDalamBotol.forEach((e) => {
//     console.log(`${e.product_name} - deskripsi : ${e.product_description}`);
// })
// console.log(kopiDalamBotol.length);

// cemilanKentangGoreng.forEach((e) => {
//     console.log(`${e.product_name} - deskripsi : ${e.product_description}`);
// })

// console.log(cemilanKentangGoreng.length);








    


