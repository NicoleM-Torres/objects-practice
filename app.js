//#region OBJECTS EXAMPLES

let favCharacter = {
  fName: "Bob",
  lName: "Ross",
  age: "52 -- dead",
  occupation: "artist",
  hobbies: ["film wildlife", "help injured animals recover", "smoking"],
  currentHealth: "unalived",
};

//CALLS ENTIRE OBJECT & PROPERTIES
console.log(favCharacter);
//CALLING PROPERTY TYPE VALUES
console.log(
  `My fav characters name is ${favCharacter.fName} ${favCharacter.lName}`
);
//CALLING PROPERTY TYPE THAT HAS AN ARRAY
console.log(
  `One of my favorite characters hobbies is ${favCharacter.hobbies[2]}`
);

//UPDATE PROPERTY VALUE
favCharacter.currentHealth = "Haunting others";
console.log(favCharacter.currentHealth);

//ADDING A NEW  PROPERTY TO THE OBJECT VARIABLE
favCharacter.paintingSkills = "Alla prima painting technique";
console.log(favCharacter);

//!ARRAY OBJECTS

let listOfMusic = [
  {
    title: `Never Give Up`,
    artist: `Rick Astley`,
    year: 1987,
  },
  {
    title: `Black Magic Woman`,
    artist: `Santana`,
    year: 1960,
  },
];

//FORMAT: nameOfVar[#] = target object in that index
console.log(
  `${listOfMusic[0].title} will grab the whole object in that index number.`
);

//GIVES YOU THE LENGHT OF THE PROPERTIES IN AN OBJECT
let currentObjectsLenght = Object.keys(listOfMusic[0]).length;
console.log(
  `${listOfMusic[1]}will  return object object as long as it's not a string`
); //

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

function addContact(name, phoneNumber, email) {
  //adds new contact to ContactBook arr
  contactBook.push({ name, phoneNumber, email });
  console.log(`COntact ${name} was added to contact book.`);
} //END addContactFunction

function viewContacts() {
  if (contactBook.length === 0) {
    console.log(`No contacts logged.`);
    return;
  } //END IF STATEMENT
  console.log(`Contact List:`);
  for (let i = 0; i < contactBook.length; i++) {
    let contact = contactBook[i];
    console.log(
      `${i + 1}. Name: ${contact.name}, Phone #:${
        contact.phoneNumber
      }, Email: ${contact.email}`
    );
  }//END FOR LOOP   

} //END viewContacts FUNCTION

function searchContactByName() {

    
}

// OUTPUT -- DISPLAY CONTACTS & SEARCH RESULTS
console.log();

//#endregion

//#region Student Grade Managent

//OBJECT --  VAR
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 76 },
  { name: "Charlie", grade: 92 },
  { name: "David", grade: 63 },
  { name: "Eve", grade: 78 },
];

//#endregion

//#region Movie Collection Tracker

//#endregion

//#region Library Book Tracker

//#endregion

//#endregion
