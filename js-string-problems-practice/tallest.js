/* function maxInArray(numbers) {
    //     console.log('Array inside the array:', numbers)

    let largest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index]
        // console.log(element)

        if (element > largest) {
            largest = element

        }


    }
    return largest  // generally returning from loops makes troubles


}




const heights = [167, 190, 120, 165, 137, 345]
const tallest = maxInArray(heights)
console.log('Tallest person is :', tallest, 'cm')
 */



// Home work : Write a function to get the lowest number in an array 


function minInArray(numbers) {
    //     console.log('Array inside the array:', numbers)

    let lowest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index]
        // console.log(element)

        if (element < lowest) {
            lowest = element

        }


    }
    return lowest  // generally returning from loops makes troubles


}




const heights = [167, 190, 120, 165, 137, 345, 89, 65]
const shortest = minInArray(heights)
console.log('Tallest person is :', shortest, 'cm')
