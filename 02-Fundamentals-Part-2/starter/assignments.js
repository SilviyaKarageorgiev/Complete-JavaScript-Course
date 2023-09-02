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

