const router = require("express").Router();
//const NotFoundError = require("../utils/NotFoundError");
const Phonebook = require("../models/phonebooks");

router.get("/", (req, res, next) => {
  Phonebook.find({})
    .then((persons) => res.json(persons))
    .catch((err) => next(err));
});

router.get("/:id", (request, response) => {
  Phonebook.findById(request.params.id)
    .then((phonebook) => {
      response.json(phonebook);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body.name) console.log("name must be present");
  if (!body.number) console.log("number must be present");

  const newPhonebook = new Phonebook({
    name: body.name,
    number: body.number,
  });

  newPhonebook.save().then((savedPerson) => {
    const generatedId = savedPerson._id; // l'id généré par mongodb
    res.json(savedPerson);
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await Phonebook.findByIdAndDelete(id);
  res.json(result);

});

module.exports = router;
