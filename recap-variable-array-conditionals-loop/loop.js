/* Problem Set
-----------
---LOOP----
-----------

1. Display "Ajke amar mon valo nei" for 39 times

2. Display numbers between 58 to 98
3. Show even numbers from 412 to 456
4. Show all even numbers from 412 to 456
5. Show all odd numbers 581 to 623
6. Difference between while loop and for loop
7. Declare an array for all the topics that you have learned last few days display them as output.

8. Create an array for all the mobiles phones.Display all the elements of the array by using a while loop

9. Run a loop from 30 to 86 .this loop will stop if the values get higher than  44

10.Write the price of the books that you have.Display the prices if the prices are higher than 200  like only 1-200




 */


/* // 1. Display "Ajke amar mon valo nei" for 39 times */
for (var i = 0; i < 39; i++) {
    /*   console.log("Ajke amar mon vlo nei") */
}

/* // 2. Display numbers between 58 to 98 */

for (var i = 58; i < 98; i++) {
    /*   console.log(i) */
}


/* //3. Show even numbers from 412 to 456 */

for (var i = 412; i < 456; i += 2) {
    /*     console.log(i) */
}


/* //4. Show all odd numbers 581 to 623 */

for (i = 581; i <= 623; i++) {
    if (i % 2 != 0) {
        /*  console.log(i) */
    }
}


// 7. Declare an array for all the topics that you have learned last few days   display them as output.

var webTopics = ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'Figma']
for (var i = 0; i < webTopics.length; i++) {
    var webtopic = webTopics[i]
    /* console.log(webtopic) */
}


/* 8. Create an array for all the mobiles phones.Display all the elements of the array by using a while loop */

var phoneCollection = ['Nokia', 'Samsung', 'Symphony', 'Walton', 'Maximus', 'Xiaomi', 'Realme', 'OnePlus', 'OPPO', 'Vivo', 'Apple']

for (var i = 0; i < phoneCollection.length; i++) {
    var usedphone = phoneCollection[i]
    // console.log(usedphone)

}

// 8. While Loop 
var phoneCollection = ['Nokia', 'Samsung', 'Symphony', 'Walton', 'Maximus', 'Xiaomi', 'Realme', 'OnePlus', 'OPPO', 'Vivo', 'Apple']
var i = 0
while (i < phoneCollection.length) {
    var usedphone = phoneCollection[i]
    // console.log(usedphone)
    i++

}


// 9. Run a loop from 30 to 86 .this loop will stop if the values get higher than  44

for (var i = 30; i < 86; i++) {
    if (i > 44) {

        // console.log(i)
        break
    }

}

// 10.Write the price of the books that you have.Display the prices if the prices are higher than 200  like only 1-200

var bookPrice = [250, 300, 100, 180, 400, 150]
var i = 0
while (i < bookPrice.length) {
    if (i < 200) {
        var bookPriceBuy = bookPrice[i]
        console.log(bookPrice)

        i++
    }


}




