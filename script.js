const loaf = {
  flour: 300,
  water: 210,
};

// console.log(loaf.flour);
// console.log(loaf['water']);

loaf.hydration = function() {
  return (this.water/this.flour) * 100;
};

// console.log(loaf.hydration());

const myObj = {
  foo: 'string',
  bar: 22,
  fum: true,
  quux: 'name',
  spam: 520,
};

for (let key in myObj) {
  // console.log(`This is property ${key} and its value is ${myObj[key]}`);
}

const meals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

// console.log(meals.meals[3]);

const arrayOfEmployees = [
  {name: 'Bob', jobTitle: 'Software Engineer',},
  {name: 'Mary', jobTitle: 'Front End Developer',},
  {name: 'Anna', jobTitle: 'Senior UI Developer',},
  {name: 'Chris', jobTitle: 'Owner',},
];

// arrayOfEmployees.forEach(el => console.log(`${el.name} is ${el.jobTitle}.`));

// Add property 'boss' to all objects excluding one where property 'jobTitle' value is 'Owner'
arrayOfEmployees.forEach(obj => {
  if(obj.jobTitle !== 'Owner') {
    obj.boss = 'Chris';
  }
});

// Check if object has property 'boss' to print an approriate message
arrayOfEmployees.forEach(obj => {
  if ('boss' in obj) {
    // console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);
  } else {
    // console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`)
  }
});

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decode(str) {
  const firstLetter = str.charAt(0);
    if (firstLetter in cipher) {
    return str.charAt(cipher[firstLetter] - 1);
  } else {
    return " ";
  }
}

function decodeWords (str) {
  const splitToArr = str.split(' ');
  return splitToArr
    .map(el => decode(el))
    .join('');
}

// console.log(decodeWords('craft block argon meter bells brown croon droop'));

function createCharacter(name, nickName, race, origin, weapon, attack, defense) {
  // this.name = name;
  return {
    name,
    nickName,
    race,
    origin,
    weapon,
    attack,
    defense,
    describe() {
      console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight(opponent) {
      const myDamage = this.attack < opponent.defense ? 0 : this.attack - opponent.defense;
      const opponentDamage = opponent.attack < this.defense ? 0 : opponent.attack - this.defense;
      console.log(
        `Your opponent takes ${damage} damage and you receive ${opponentDamage} damage.`)
    },
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'Wizard staff', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'Ring', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril',  6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Bow and Arrow', 9, 3),
]

// Use .find() to retrieve character with nickname 'aragorn' and then call its describe method
// console.log(characters.find(obj => obj.nickName === 'aragorn').describe());

// Use .filter() to print a new array from characters that ONLY contains characters of the race Hobbit
// console.log(characters.filter(obj => obj.race === 'Hobbit'));

// Use .filter() to print a new array from characters that ONLY contains characters with attack value above 5
// console.log(characters.filter(obj => obj.attack > 5));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function compareObj (obj, query) {
  const queryKeys =Object.keys(query);
  const myArr = [];
  for (const key in query) {
      if (obj.hasOwnProperty(key) && obj[key] === query[key]) {
        myArr.push(true);
      }
  }
  return myArr.length === queryKeys.length;
}

function findOne(arr, query) {
  const myObj = arr.find(obj => compareObj(obj, query));
  return !myObj ? null : myObj;
}

// console.log(findOne(HEROES, { id: 1 }));
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

// console.log(findOne(HEROES, { id: 10 }));
// => null

// console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// => null

// console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// console.log(findOne(HEROES, { squad: 'Justice League' }));
// => { id: 4, name: 'Superman', squad: 'Justice League' }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findTwo(query) {
    const myObj = this.store.heroes.find(obj => compareObj(obj, query));
    return !myObj ? null : myObj;
  },
};

console.log(Database.findTwo({ id: 2 }));
//=> { id: 2, name: 'Iron Man', squad: 'Avengers' }
























































