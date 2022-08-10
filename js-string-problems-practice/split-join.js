const lyrics = 'Tumi bondhu kala pakhi ami jno ki.bosonto kal e tmy bolte parini.Sada sada kala kala rong jomese sada kala'
const parts = lyrics.split(' ')
const sentences = lyrics.split('.') // spliting into sentences
const chars = lyrics.split('')  // splitting into characters
// console.log(parts)
// console.log(chars)      // showing all the characters as array


// string slicing 

const partial = lyrics.slice(5, 8)
console.log(partial)
const partial12 = lyrics.substring(5, 8)
// console.log(partial12) 


//concating string

const lines = ['Tumi bondhu kala pakhi ami jno ki.bosonto kal e tmy bolte parini.Sada sada kala kala rong jomese sada kala', 'rong jomese sada kala']

const newSong = lines.join('. ')
console.log(newSong)
