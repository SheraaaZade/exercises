const express = require('express')
const router = express.Router()
const Person = require('../models/person')



// Find all
router.get("/info", (req, res) => {
  Person.countDocuments()
    .then(count => {
      res.type("text").send(`Phonebook has info for ${count} people.\n${new Date().toString()}`)
    })
    .catch(err => next(err))
})



module.exports = router