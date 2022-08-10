/* 
function isLeapYear(year) {
    const remainder = year % 4
    if (remainder === 0) {
        console.log('The year', year, 'is leap year')
    }
    else {
        console.log('The year', year, 'is leap year')
    }
}

isLeapYear(1960) 
*/



/* 

function isLeapYear(year) {
    const remainder = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (remainder === 0) {
        return true
    }
    else {
        return false
    }
}

const isMyYearLeapYear = isLeapYear(2000)
console.log('my year :', isMyYearLeapYear)

const isHerLeapYear = isLeapYear(200)
console.log('Her year :', isHerLeapYear) */


// program to check leap year
/* function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year); */


function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));