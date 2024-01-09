const mongoose = require("mongoose");

PhonebookSchema = new mongoose.Schema({
    name: String,
    number: Number
}) 

PhonebookSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  module.exports = mongoose.model("Phonebook", PhonebookSchema);  