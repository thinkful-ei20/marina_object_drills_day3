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
    console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);
  } else {
    console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`)
  }
});



























