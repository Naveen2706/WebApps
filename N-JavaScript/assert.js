const errorMsg = " is not even";
for (let number = 2; number <= 5; number += 1) {
     console.log('the number is ' + number);
     console.assert(number % 2 === 0, number + errorMsg);
}
