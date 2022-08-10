const result = Math.pow(3, 8)
console.log(result)


const num1 = 75
const num2 = 45

const gap = num1 - num2

if (gap < 5) {
    console.log('you guys can be friends')
}
else {
    console.log('You guys stay apart')
}



const number = 2.50001

const fullNumber = Math.round(number)
// console.log(fullNumber)

const result2 = Math.ceil(2.00001)
const result3 = Math.floor(456.259)
// console.log(result2)




// -----Random------
console.log(Math.random())


// 1-100 random numbers

/* const random = Math.round(Math.random() * 100)
console.log(random) */


for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6)
    console.log(random)
}

const num = -78;
const answer = Math.abs(num);
console.log(answer);
