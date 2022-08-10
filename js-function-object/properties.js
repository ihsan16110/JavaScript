var shoppingCart = {

    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// console.log(shoppingCart)
//when you know the property name,use dot notation
var penCount = shoppingCart.pen

// alternative system 
//when you know the specific property name,use dot notation to get hte property value

var penCount = shoppingCart['pen']

var properties = Object.keys(shoppingCart)
var propertyValues = Object.values(shoppingCart)
/* console.log(properties)
console.log(propertyValues) */


var propertyName = 'mouse'
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue)



// set property values
// 1 
shoppingCart.mouse = 15
console.log(shoppingCart)

//2
shoppingCart['mouse'] = 29
console.log(shoppingCart)
//3
shoppingCart[propertyName] = 89
console.log(shoppingCart)



