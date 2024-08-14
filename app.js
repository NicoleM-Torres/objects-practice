//OBJECTS EXAMPLES

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
console.log (favCharacter.currentHealth);

//ADDING A NEW  PROPERTY TO THE OBJECT VARIABLE
favCharacter.paintingSkills= "Alla prima painting technique";
console.log (favCharacter)

