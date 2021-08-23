// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

const theNames = names.filter(t => t.startsWith("The")).join();

for (const tName of theNames) {
  console.log(theNames);
}