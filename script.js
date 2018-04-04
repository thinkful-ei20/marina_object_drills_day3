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

function createCharacter(name, nickName, race, origin, attack, defense) {
  // this.name = name;
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(obj) {
      console.log(
        `Your opponent takes ${(this.attack - obj.defense < 0) ? 0 : this.attack - obj.defense} damage and you receive ${(obj.attack - this.defense < 0 ? 0 : obj.attack - this.defense)} damage.`)
    },
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9, 3),
]

// Use .find() to retrieve character with nickname 'aragorn' and then call its describe method
// console.log(characters.find(obj => obj.nickName === 'aragorn').describe());

// Use .filter() to print a new array from characters that ONLY contains characters of the race Hobbit
// console.log(characters.filter(obj => obj.race === 'Hobbit'));

// Use .filter() to print a new array from characters that ONLY contains characters with attack value above 5
// console.log(characters.filter(obj => obj.attack > 5));

// Add property 'weapon' to each character and modify describe()
characters.forEach(obj => {
  if(obj.nickName === 'gandalf') obj.weapon = 'Wizard staff';
  if(obj.nickName === 'bilbo') obj.weapon = 'Ring';
  if(obj.nickName === 'frodo') obj.weapon = 'String and Barrow Blade';
  if(obj.nickName === 'aragorn') obj.weapon = 'Anduril';
  if(obj.nickName === 'legolas') obj.weapon = 'Bow and Arrow';
  if(obj.nickName === 'arwen') obj.weapon = 'Bow and Arrow';
  obj.describe = function() {console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${this.weapon}.`)};
})

// console.log(characters[0].describe());











































