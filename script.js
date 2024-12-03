/*
Oppgave 1:
1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc
2. console.log de forskjellige elementene i arrayet
3. lag et <p> element og legg til en av elementene fra array i <p>

Oppgave 2:
Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet
    Fontenehuset Bærum
    Industriveien 2, 1337 Sandvika
    https://www.fontenehuset-baerum.no/ 
4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Trondheim
*/

// Oppgave 1:
const tvShows = [
  "The last of us",
  "The umbrella academy",
  "The Wire",
  "Game of thrones",
  "Silo",
];

console.log(tvShows);
console.log(tvShows[3]);
const task1 = document.querySelector("#task1");
task1.textContent = tvShows[3];

//
//

// Fetch elements from HTML
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const displayList = document.querySelector("#displayList");

// Create an starting array
const shoppingList = ["melk", "brød", "såpe", "egg"];

// Viewing the array on the site before changes
displayList.textContent = shoppingList;

// Adding a 'addButton' and using array method .push() to add an item last in the array that will be viewed on site.
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let inputField = document.querySelector("#inputField").value;
  shoppingList.push(inputField);
  displayList.textContent = shoppingList;
});

// Adding a 'removeButton' and using array method .pop() to remove the last item in the array that will be viewed on site.
removeButton.addEventListener("click", function (event) {
  event.preventDefault();
  shoppingList.pop();
  displayList.textContent = shoppingList;
});

//
//

// OBJECT EXAMPLE
const person = {
  name: "Frank",
  city: "Oslo",
  age: 40,
  isMarried: false
};

console.log(person.name);
console.log(person.isMarried);

//
//

// ARRAY WITH OBJECTS
const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
  },
  //OPPGAVE 2:
  {
    navn: "Fontenehuset Bærum",
    adresse: "Industriveien 2, 1337 Sandvika",
    nettside: "https://www.fontenehuset-baerum.no/"
  }
];

// OPPGAVE 2:
console.log(fontenehus);
console.log(fontenehus[4]);
console.log(fontenehus[0].adresse);
console.log(fontenehus[5])

// Fetch a element fra HTML
const task2 = document.querySelector("#task2");
task2.href = fontenehus[2].nettside;



// Alternativ 2 til oppgave 2:
// Create a new element in jS
const task2Alternative2 = document.createElement("a");
task2Alternative2.textContent = "Fontenehuset Trondheim"
task2Alternative2.href = fontenehus[2].nettside;

const body = document.querySelector("body");
body.appendChild(task2Alternative2);