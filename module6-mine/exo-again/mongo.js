const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://chehrazadouazzani:${password}@helloworld.atoynja.mongodb.net/noteAppAgain?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Phone = mongoose.model("Phone", phoneSchema);

const phone = new Phone({
  name: process.argv[3],
  number: process.argv[4],
});

//afficher la liste
Phone
  .find({})
  .then(person=> {
    console.log(person)
    mongoose.connection.close()
  })

phone.save().then((result) => {
  console.log(`added ${phone.name} ${phone.number} to phonebook`);
  mongoose.connection.close();
});
