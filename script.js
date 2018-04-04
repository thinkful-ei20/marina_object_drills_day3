const loaf = {
  flour: 300,
  water: 210,
}

console.log(loaf.flour);
console.log(loaf['water']);

loaf.hydration = function() {
  return (this.water/this.flour) * 100;
};

console.log(loaf.hydration());


