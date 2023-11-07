'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasigning outer scope's variable
      const output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'techer';
const year = 1991;

// Functions
console.log(addDeclaration(2, 3));
//console.log(addExpression(2, 3));
//console.log(addArrow(2, 3));

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

console.log(this); // window

const calcAge2 = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined
};
calcAge2(1987);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // window
};
calcAgeArrow(1992);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2015,
};

matilda.calcAge = jonas.calcAge; // borrowed method from one object to another
matilda.calcAge();

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas2.greet(); // Hey undefined

const jonas3 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas3.greet(); // Hey Jonas

const jonas4 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas4.greet();
jonas4.calcAge();

const addExpr = function (a, b) {
  console.log(arguments); // arguments keyword exists in regular functions (expression, declaration), but not in arrow functions
  return a + b;
};
addExpr(2, 5);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me2 = {
  name: 'Jonas',
  age: 30,
};
const friend2 = me2;
friend2.age = 27;
console.log('Friend:', friend2);
console.log('Me:', me2);

let lastName = 'Williams';
let old;
