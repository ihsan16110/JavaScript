function reverseString(text) {
    // for(let i=0;i<text.length;i++){}

    let reversed = ''
    for (let i = text.length - 1; i >= 0; i--) { // laste element index-1 [a,b,c,d] legth= 4 but index 0-3 so length -1
        const element = text[i]
        reversed = reversed + element
        console.log(element, reversed)


    }
    return reversed

}

const myString = 'I am a good boy'

const reversed = reverseString(myString)
console.log('reversed output :', reversed)