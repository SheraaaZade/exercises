const router = require('express').Router()
const Person = require("../models/person")
const NotFoundError = require('../utils/NotFoundError')



// Find all
router.get("/", (req, res, next) => {
  Person.find({})
    .then(persons => res.json(persons))
    .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person)
    } else {
      throw new NotFoundError()
    }
  }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id).then(result => {
    if (result) {
      res.json(result)
    } else {
      throw new NotFoundError()
    }
  })
    .catch(err => next(err))
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body
  // Check body
  const errorMessages = []
  if (!body.name) errorMessages.push("name must be present")
  if (!body.number) errorMessages.push("number must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }
  // Check existing
  Person.find({ name: body.name }).then(person => {
    if (person && person.length > 0) {
      errorMessages.push("name must be unique")
      res.status(422).json({ errorMessages })
    } else {
      // Insert
      const person = new Person(body)
      person.save().then(result => {
        res.json(result)
      })
        .catch(err => next(err))
    }
  })
    .catch(err => next(err))
})

// Update one
router.put("/:id", (req, res, next) => {
  const body = req.body
  // Check body
  const errorMessages = []
  if (!body.name) errorMessages.push("name must be present")
  if (!body.number) errorMessages.push("number must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }
  // Update
  const person = {
    name: body.name,
    number: body.number,
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson)
      } else {
        throw new NotFoundError()
      }
    })
    .catch(error => next(error))
})



module.exports = router