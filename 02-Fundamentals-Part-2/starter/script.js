'use strict';

function logger() {
    console.log('My name is Silviya')
}

logger();

// Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(1987);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1987);
console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1987));