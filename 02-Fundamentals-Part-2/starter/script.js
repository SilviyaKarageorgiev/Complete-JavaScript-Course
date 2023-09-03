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

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
friends[2] = 'Mitko';
console.log(friends);

const newLength1 = friends.push('Jay');
console.log(friends);

const newLength2 = friends.unshift('Dani');
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

const indexMaria = friends.indexOf('Mitko');
console.log(indexMaria);
console.log(typeof indexMaria);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. He has ${this.friends.length} friends and his best friend is ${this.friends[0]}. At this time ${this.firstName} is in ${this.location}.`
    }
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
