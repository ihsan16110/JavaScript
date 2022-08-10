// continue :it prints all the values skipping the conditioned values 
// continue may be call as skip OR go to the next round
var numbers = [45, 87, 188, 89, 56, 32, 51, 25, 98, 35]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 50) {

        continue
    }
    console.log(number)
}
