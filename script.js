console.log('hello world');

async function fetchData() {
  const fetchResult = await fetch("https://swapi.dev/api/people/");
  const data = await fetchResult.json();
  console.log(data);
  //mindenhol elérhető a data a fetchData függvényen belül
}

fetchData();

/* fetch("https://swapi.dev/api/people/")
  .then(response => response.json())
  .then(data => console.log(data)); // csak a 2. then callback függvényében érhető el a data
  

let counter = 1;

setInterval(() => {
  console.log(counter);
  counter++;
}, 500) */