'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Detructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switch variables with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 returned values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2, [5, 6]

const [m, , [n, p]] = nested;
console.log(m, n, p); // 2, 5, 6

// Default values
const [q = 1, r = 1, s = 1] = [8, 9]; // Set default values
console.log(q, r, s); // 8, 9, 1

// Destructuring object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a2 = 111;
let b2 = 999;
const obj = { a2: 23, b2: 7, c2: 14 };
({ a2, b2 } = obj);
console.log(a2, b2);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arrOrigin = [7, 8, 9];
const badNewArr = [1, 2, arrOrigin[0], arrOrigin[1], arrOrigin[2]];
console.log(badNewArr);

// Spred operator
const newArr = [1, 2, ...arrOrigin];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1, 2, 7, 8, 9
console.log(1, 2, 7, 8, 9);

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Merge 2 arrays
const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//restaurant.orderPasta(...ingredients); // the same as previous

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const array = [1, 2, ...[3, 4]];
console.log(array); // [1, 2, 3, 4]

// REST, because on LEFT side of =
const [t, w, ...others] = [1, 2, 3, 4, 5];
console.log(t, w, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const h = [23, 5, 7];
add(...h);

restaurant.orderPizza('salami', 'tomatoes', 'chilli pepper');
