//#region OBJECTS EXAMPLES

// let favCharacter = {
//   fName: "Bob",
//   lName: "Ross",
//   age: "52 -- dead",
//   occupation: "artist",
//   hobbies: ["film wildlife", "help injured animals recover", "smoking"],
//   currentHealth: "unalived",
// };

// //CALLS ENTIRE OBJECT & PROPERTIES
// console.log(favCharacter);
// //CALLING PROPERTY TYPE VALUES
// console.log(
//   `My fav characters name is ${favCharacter.fName} ${favCharacter.lName}`
// );
// //CALLING PROPERTY TYPE THAT HAS AN ARRAY
// console.log(
//   `One of my favorite characters hobbies is ${favCharacter.hobbies[2]}`
// );

// //UPDATE PROPERTY VALUE
// favCharacter.currentHealth = "Haunting others";
// console.log(favCharacter.currentHealth);

// //ADDING A NEW  PROPERTY TO THE OBJECT VARIABLE
// favCharacter.paintingSkills = "Alla prima painting technique";
// console.log(favCharacter);

// //!ARRAY OBJECTS

// let listOfMusic = [
//   {
//     title: `Never Give Up`,
//     artist: `Rick Astley`,
//     year: 1987,
//   },
//   {
//     title: `Black Magic Woman`,
//     artist: `Santana`,
//     year: 1960,
//   },
// ];

// //FORMAT: nameOfVar[#] = target object in that index
// console.log(
//   `${listOfMusic[0].title} will grab the whole object in that index number.`
// );

// //GIVES YOU THE LENGHT OF THE PROPERTIES IN AN OBJECT
// let currentObjectsLenght = Object.keys(listOfMusic[0]).length;
// console.log(
//   `${listOfMusic[1]}will  return object object as long as it's not a string`
// ); //

//#endregion

//#region PROJECTS -- PROBLEMS

//#region Personal Contact Book
let contactBook = [
  {
    name: `Gargola`,
    phoneNumber: 555555555,
    email: `gargola@gmail.com`,
  },
  {
    name: `Samantha`,
    phoneNumber: 1111111111,
    email: `samantha@aol.com`,
  },
  {
    name: `Eric`,
    phoneNumber: 3333333333,
    email: `ericson@yahoo.com`,
  },
  {
    name: `Scott`,
    phoneNumber: 1234567890,
    email: `scott@outlook.com`,
  },
  {
    name: `Eva`,
    phoneNumber: 2222222222,
    email: `eva@mindyabusiness.com`,
  },
  {
    name: `Joel`,
    phoneNumber: 6666666666,
    email: `joel@gmail.com`,
  },
];

// NEW CONTACT
addContact("Sarah", 4444444444, "sarah@lucky.com");

// VIEW CONTACTS
viewContacts();

// SEARCH CONTACT
searchContactByName("Eric");

// SEARCH FOR NOT EXISTING CONTACT
searchContactByName("Zach");

//FUNCTION -- ADDING A NEW CONTACT
function addContact(name, phoneNumber, email) {
  contactBook.push({ name, phoneNumber, email }); //adds new element to arr
  console.log(`Contact ${name} added.`);
} //END addContact FUNCTION

//FUNCTION -- VIEW CONTACTS
function viewContacts() {
  //if there are no contacts in the arr
  if (contactBook.length === 0) {
    console.log("No contacts available.");
    return;
  } //END IF STATEMENT

  console.log("Contact List:");
  //loops through contactBook arr and displays on the console
  for (let i = 0; i < contactBook.length; i++) {
    let contact = contactBook[i];
    console.log(
      `${i + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}, Email: ${
        contact.email
      }`
    );
  } //END FOR LOOP
} //END viewContacts FUNCTION

//FUNCTION -- SEARCH CONTACTS
function searchContactByName(name) {
  let isfound = false;
  console.log("Search Results:");
  //loops through arr elements
  for (let i = 0; i < contactBook.length; i++) {
    const contact = contactBook[i];
    //if name on contact list matches name searched it means isFound = true
    if (contact.name.toLowerCase() === name.toLowerCase()) {
      console.log(
        `${i + 1}. Name: ${contact.name}, Phone: ${
          contact.phoneNumber
        }, Email: ${contact.email}`
      );
      isfound = true;
    } //END IF STATEMENT
  } //END FOR LOOP
  //if name on contact list != name seached isFound = false
  if (!isfound) {
    console.log(`No contact found with the name ${name}.`);
  } //END IF STATEMENT
} //END searchContactByName FUNCTION

//#endregion

//#region Student Grade Managent

//OBJECT --  arr
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 76 },
  { name: "Charlie", grade: 92 },
  { name: "David", grade: 63 },
  { name: "Eve", grade: 78 },
];

//FUNCTION -- CALCULATE GRADE AVG
function gradeAverage() {
  let total = 0; //sets total value to 0
  //loops through students arr lenght
  for (let i = 0; i < students.length; i++) {
    total += students[i].grade; //adds all grades as it loops and stores in 'total'
  } //END FOR LOOP
  let average = total / students.length; //stores total / lenght of arr in average
  return average; //returns results to gradeAverage
} //END gradeAverage FUNCTION

//FUNCTION -- IDENTIFY STUDENTS BELOW AVG
function belowAverageStudents() {
  let average = gradeAverage();
  let belowAvg = []; //int arr that will store below avg students
  //loops through student arr
  for (let i = 0; i < students.length; i++) {
    //if student grade is < average
    if (students[i].grade < average) {
      belowAvg.push(students[i]); //adds strudent to belowAvg arr
    } //END IF STATEMENT
  } //END FOR LOOP
  return belowAvg;
} //END belowAverageStudents FUNCTION

//OUTPUT -- DISPLAY TO CONSOLE GRADE AVERAGE AND LIST OF STUDENT BELOW AVERAGE
let avg = gradeAverage(); //stores gradeAvg results into avg
console.log(`Grade Average: ${avg.toFixed(2)}`); // toFixed(2) formats the average to 2 decimal places

let belowAvgStudents = belowAverageStudents();
console.log("Students Below Average:");
//loops through belowAvgStudents to display each object in the arr
for (let i = 0; i < belowAvgStudents.length; i++) {
  console.log(
    `${belowAvgStudents[i].name} - Grade: ${belowAvgStudents[i].grade}`
  );
}

//#endregion

//#region Movie Collection Tracker
let movie = [
  {
    title: `Dune: Part Two
`,
    genre: `Sci-fi/Adventure`,
    rating: 8.5,
  },
  {
    title: `Furiosa: A Mad Max Saga`,
    genre: `Action/Adventure`,
    rating: 7.6,
  },
  {
    title: `Inside Out 2`,
    genre: `Family/Comedy`,
    rating: 7.8,
  },
  {
    title: `Ghostlight`,
    genre: `Comedy/Drama`,
    rating: 7.7,
  },
  {
    title: `Challengers`,
    genre: `Sports/Romance`,
    rating: 7.2,
  },
  {
    title: `Deadpool & Wolverine`,
    genre: ` Action/Comedy`,
    rating: 8.1,
  },
];

// MOVIE COLLECTION
// viewCollection();

// ADD MOVIE
addMovie("The Avengers", "Action", 8.5);

// RATE MOVIE IN COLLECTION
rateMovie("Inside Out 2", 9.0);

// MOVIE COLLECTION
viewCollection();

//FUNCTION -- ADD A MOVIE
function addMovie(title, genre, rating) {
  //loops through arr to check if movie is already part of the collection
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].title.toLowerCase() === title.toLowerCase()) {
      console.log(`Movie ${title} already exists.`);
      return;
    } //END IF STATEMENT
  } //END FOR LOOP

  //ADD NEW MOVIE
  movie.push({ title, genre, rating });
  console.log(`Movie ${title} added.`);
} //END addMovie FUCNTION

//FUNCTION -- RATE A MOVIE
function rateMovie(title, newRating) {
  //loops through lenght of movie arr
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].title.toLowerCase() === title.toLowerCase()) {
      movie[i].rating = newRating;
      console.log(`Movie ${title} rated with ${newRating}`);
      return;
    } //END IF STATEMENT
  } //END FOR LOOP
  console.log(`Movie ${title} not part of collection.`);
} //END rateMovie FUNCTION

//FUCNTION -- VIEW COLLECTION
function viewCollection() {
  if (movie.length === 0) {
    console.log(`No movies in the collection`);
    return;
  } //END IF STATEMENT
  console.log("Movie Collection");
  for (let i = 0; i < movie.length; i++) {
    console.log(
      `${i + 1}. Title: ${movie[i].title}, Genre: ${movie[i].genre}, Rating: ${
        movie[i].rating
      }`
    );
  } //END FOR LOOP
} //END viewCollection FUNCTION

//#endregion

//#region Library Book Tracker

//VARIABLE -- ARR
let books_arr = [
  { title: "The Great Gatsby", status: "available" },
  { title: "1984", status: "borrowed" },
  { title: "To Kill a Mockingbird", status: "available" },
  { title: "The Catcher in the Rye", status: "borrowed" },
  { title: "Moby-Dick", status: "available" },
];

//FUNCTION-- FILTER AVAILABLE BOOKS
function filterAvailableBooks() {
  let availableBooks = []; //new arr holds available books
  //loops through books arr
  for (let i = 0; i < books_arr.length; i++) {
    //if books status = available it will 'push' element to availableBooks arr
    if (books_arr[i].status === "available") {
      availableBooks.push(books_arr[i]);
    } //EDN IF STATEMENT
  } //END FOR LOOP
  return availableBooks;
} //END fiulterAvailableBooks FUNCTIONS

//FUNCTION -- FILTER BORROWED BOOKS
function filterBorrowedBooks() {
  let borrowedBooks = []; //arr that holds borrowed books
  //loops through books arr
  for (let i = 0; i < books_arr.length; i++) {
    //if book arr status = borrowed it will 'push element to borrowedBooks arr
    if (books_arr[i].status === "borrowed") {
      borrowedBooks.push(books_arr[i]);
    } //END IF STATEMENT
  } //END FOR LOOP
  return borrowedBooks;
} //END filterBorrowedBoooks FUNCTION

//DISPLAYY IN CONSOLE -- AVAILABLE AND BORROWED
console.log("My available books:");
//loops through availableBooks arr and displays list to console
let availableBooks = filterAvailableBooks();
for (let i = 0; i < availableBooks.length; i++) {
  console.log(`Title: ${availableBooks[i].title}`);
} //END FOR LOOP

console.log("Borrowed Books:");
//loops through borrowedBooks arr and displays list to console
let borrowedBooks = filterBorrowedBooks();
for (let i = 0; i < borrowedBooks.length; i++) {
  console.log(`Title ${borrowedBooks[i].title}`);
} //END FOR LOOP

//#endregion

//#region Recipe Organizer

let recipes = [
  {
    title: "Pancakes",
    ingredients: ["Flour", "Eggs", "Milk"],
    instructions: "Mix and cook on a griddle.",
  },
  {
    title: "Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
    instructions: "Chop and toss with dressing.",
  },
];

// FUNCTION -- ADD NEW RECIPE
function addNewRecipe(title, ingredients, instructions) {
  // loop through recipie arr
  for (let i = 0; i < recipes.length; i++) {
    //if recipe is = to new recipe title then it will consolelog the following
    if (recipes[i].title.toLowerCase() === title.toLowerCase()) {
      console.log(`Recipe "${title}" already exists.`);
      return;
    }
  }

  // Add the new recipe and displays in console
  recipes.push({ title, ingredients, instructions });
  console.log(`Recipe "${title}" added.`);
}

//FUNCTION -- UPDATE RECIPE
function updateRecipe(title, newInstructions) {
  // loop through recipie arr
  for (let i = 0; i < recipes.length; i++) {
    //if recipe = to exicting recipe instructions will update and display
    if (recipes[i].title.toLowerCase() === title.toLowerCase()) {
      recipes[i].instructions = newInstructions;
      console.log(`Recipe "${title}" updated.`);
      return;
    }
  }
  console.log(`Recipe "${title}" not found.`);
}

// FUNCTION TO DISPLAY RECIPE BOOK
function displayRecipe() {
  if (recipes.length === 0) {
    console.log("No recipes available.");
    return;
  }
  console.log("Recipe Book:");
  //loops through recipe arr and prints information
  for (let i = 0; i < recipes.length; i++) {
    console.log(`Title: ${recipes[i].title}`);
    console.log(`Ingredients: ${recipes[i].ingredients.join(", ")}`);
    console.log(`Instructions: ${recipes[i].instructions}`);
    console.log(""); //Space to separate recipes
  }
}

// ADD RECIPE
addNewRecipe("Smoothie", ["Bananas", "Orange Juice", "Strawberries"], "Blend until smooth.");
addNewRecipe(
  "Pasta",
  ["Pasta", "Vodka Sauce", "Veggies"],
  "Cook pasta and mix with sauce and veggies."
);

// UPDATE RECIPE
updateRecipe("Pancakes", "Mix ingredients and cook on a hot pan.");

// DISPLAY IN CONSOLE
displayRecipe();

//#endregion

//#region Car Dealership Inventory
//VARIABLE -- ARR
let cars = [
  { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
  { make: "Honda", model: "Civic", year: 2019, price: 22000 },
];

//FUNCTION -- ADD NEW CARS
function addNewCar() {} //END addNewCar FUNCTION

//FUNCTION -- UPDATE CAR PRICE
function updateCar() {} //END updateCar FUNCTION

//FUNCTION -- DISPLAY CARS IN INVENTORY
function displayCars() {} //END displayCars FUNCTION

//#endregion

//#region Pet Names with Details
let petDirectory = [
  {
    petName: "Scooby-Doo",
    type: "Dog",
    age: 7,
  },
];

// FUNCTION -- ADD A NEW PET

//FUNCTION DISPLAY PET NAMES

//#endregion

//#endregion
