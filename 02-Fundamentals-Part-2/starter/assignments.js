function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('Bulgaria', 6.8, 'Sofia');
console.log(country1);

const country2 = describeCountry('Germany', 83.2, 'Berlin');
console.log(country2);

const country3 = describeCountry('France', 68.7, 'Paris');
console.log(country3);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentBulgaria1 = percentageOfWorld1(6.8);
const percentGermany1 = percentageOfWorld1(83.2);
const percentFrance1 = percentageOfWorld1(68.7);
console.log(percentBulgaria1, percentGermany1, percentFrance1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percentBulgaria2 = percentageOfWorld2(6.8);
const percentGermany2 = percentageOfWorld2(83.2);
const percentFrance2 = percentageOfWorld2(68.7);
console.log(percentBulgaria2, percentGermany2, percentFrance2);

const percentageOfWorld3 = population => population / 7900 * 100;

const percentBulgaria3 = percentageOfWorld3(6.8);
const percentGermany3 = percentageOfWorld3(83.2);
const percentFrance3 = percentageOfWorld3(68.7);
console.log(percentBulgaria3, percentGermany3, percentFrance3);

function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent}% of the world.`;
}

console.log(describePopulation('Bulgaria', 6.8));

const populations = [6.8, 83.2, 68.7, 1441];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

const neighbours = ['Romania', 'Serbia', 'North Macedonia', 'Greece', 'Turkey'];
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

const indexMacedonia = neighbours.indexOf('North Macedonia');
neighbours[indexMacedonia] = 'Macedonia';
console.log(neighbours);

const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 6.8,
    neighbours: ['Romania', 'Serbia', 'North Macedonia', 'Greece', 'Turkey'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function () {
        const isIsland = this.neighbours === 0 ? true : false;
        return isIsland;
    }
};

console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry);

myCountry['population'] -= 2;
console.log(myCountry);

myCountry.describe();

console.log(myCountry.checkIsland());

for (let index = 1; index <= 50; index++) {
    console.log(`Voter number ${index} is currently voting`);
}

const percentages2 = [];
for (let i = 0; i <= populations.length - 1; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
    for (let j = 0; j <= listOfNeighbours[i].length - 1; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);