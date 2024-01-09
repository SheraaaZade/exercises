//créer le dossier et faire npm init dedans pour avoir package json et dedans
// main : "index.js"

const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://chehrazadouazzani:${password}@helloworld.atoynja.mongodb.net/noteAppAgain?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phonebook = mongoose.model("Phonebook", phonebookSchema);

const phonebook = new Phonebook({
  name: process.argv[3],
  number: process.argv[4],
});

// phonebook.save().then((result) => {
//   console.log(
//     "added " + process.argv[3] + " number " + process.argv[4] + " to phonebook"
//   );
//   Phonebook.find({}).then((result) => {
//     console.log("Phonebook:");
//     result.forEach((person) => {
//       console.log(`${person.name} ${person.number}`);
//     });
//     mongoose.connection.close();
//   });
// });


//afficher tous le contenu de phonebook
Phonebook.find({}).then((result) => {
  console.log("Phonebook");
  result.forEach((person) => {
    console.log("\t" + `${person.name} ${person.number}`);
  });
  mongoose.connection.close(); //BIEN FERMER A L INTERIEUR
});


//insert one
if (process.argv.length === 5) {
  const person = new Phonebook({
    name: process.argv[3],
    number: process.argv[4],
  });
  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}
