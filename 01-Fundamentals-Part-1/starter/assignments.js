const country = 'Bulgaria';
const continent = 'Europe';
let population = 6.8;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'bulgarian';

console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);

const description = 'Bulgaria is in Europe, and its 6.8 million people speak bulgarian.';
const updateDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(updateDescription);

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    let diff = 33 - population;
    console.log(`${country}'s population is ${diff} million below average.`);
}

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

if (language === 'english' && population < 50 && !isIsland) {
    console.log('You should live in Bulgaria :)');
} else {
    console.log('Bulgaria does not meet your criteria :(');
}
