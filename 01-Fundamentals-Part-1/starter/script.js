let js = 'amazing';
console.log(40 + 15 + 10 + 60 - 10);

console.log('Jonas');
console.log(23);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2023;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('Strings with \n\ multiple \n\ lines');
console.log(`Strings with
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sara can start driving licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years 😉`);
}

