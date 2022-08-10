// [45,21,6,98,56]

// Note: Here we work with some objects inside an array and made some comparison with them 




// 1. Find the Cheapest Phone among this 5 phones

// const phones = [
//     { name: 'Samsung', camera: 12, storage: '64gb', price: 40000, color: 'white' },
//     { name: 'OnePlus', camera: 48, storage: '256gb', price: 43500, color: 'green' },
//     { name: 'iPhone', camera: 12, storage: '512gb', price: 82000, color: 'silver' },
//     { name: 'Xiaomi', camera: 105, storage: '128gb', price: 52000, color: 'ash' },
//     { name: 'Oppo', camera: 32, storage: '64gb', price: 20000, color: 'black' },
//     { name: 'Walton', camera: 20, storage: '56gb', price: 22000, color: 'silver' }

// ]


// function chepestPhone(phones) {
//     let cheapest = phones[0]
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i]
//         // console.log(phone)

//         if (phone.price < cheapest.price) {
//             cheapest = phone

//         }
//     }

//     return cheapest

// }

// const mySelection = chepestPhone(phones)
// console.log(mySelection)




// 2. Finding the most expensive phone
const phones = [
    { name: 'Samsung', camera: 12, storage: '64gb', price: 40000, color: 'white' },
    { name: 'OnePlus', camera: 48, storage: '256gb', price: 43500, color: 'green' },
    { name: 'iPhone', camera: 12, storage: '512gb', price: 82000, color: 'silver' },
    { name: 'Xiaomi', camera: 105, storage: '128gb', price: 52000, color: 'ash' },
    { name: 'Oppo', camera: 32, storage: '64gb', price: 20000, color: 'black' },
    { name: 'Walton', camera: 20, storage: '56gb', price: 22000, color: 'silver' }

]




function ExpensivePhone(phones) {
    let expensive = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i]
        // console.log(phone)

        if (phone.price > expensive.price) {
            expensive = phone

        }
    }

    return expensive

}

const mySelection = ExpensivePhone(phones)
console.log(mySelection)
