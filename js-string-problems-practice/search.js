const lyrics = 'Tumi bondhu kala pakhi ami jno ki.bosonto kal e tmy bolte parini.Sada sada kala kala rong jomese sada kala'

const searchString = 'pakhi'

// const doesExist=lyrics.includes('pakhi')
// const doesExist = lyrics.includes('Pakhi')//case sensitive

// const doesExist = lyrics.includes(searchString)

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString)
const searchStringLower = searchString.toLowerCase()
const doesExist = lyricsLowerCase.includes(searchStringLower)


// to do this in one line
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
// console.log(doesExist)
// console.log(doesExistOneLine)




// ---------------------------------------

// indexOf


console.log(lyrics.indexOf('kailla'))
console.log(lyrics.indexOf('Tumi'))


//

if (lyrics.indexOf('sadada') !== -1) {
    console.log('exists inside the string')

}
else {
    console.log('cannot find it')
}



// startsWith 
console.log(lyrics.startsWith('Tumi'))

// endsWith

const fileName = 'mybiodata.pdf'
const otherFile = 'mypic.png'
fileName.endsWith('.pdf')