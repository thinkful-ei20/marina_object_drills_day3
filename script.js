const loaf = {
  flour: 300,
  water: 210,
}

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
}

for (let key in myObj) {
  // console.log(`This is property ${key} and its value is ${myObj[key]}`);
}

const meals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

// console.log(meals.meals[3]);

const arrayOfEmployees = [
  {name: 'Bob', jobTitle: 'Software Engineer',},
  {name: 'Mary', jobTitle: 'Front End Developer',},
  {name: 'Anna', jobTitle: 'Senior UI Developer',},
  {name: 'Chris', jobTitle: 'Owner',},
]

arrayOfEmployees.forEach(el => console.log(`${el.name} is ${el.jobTitle}`));

























