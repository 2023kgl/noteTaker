const htmlRoutes = require('express').Router()
const dbFile = require('../../db/db.json')
const fs = require('fs')

// TODO create HTML routes : 
// TODO 1. GET /notes should return the notes.html file. & 
// TODO 2. GET * should return the index.html file.

htmlRoutes.get('/', (req,res) => {
    console.log(`${req.method} request received for htmlRoutes`)
    res.json(dbFile);
})

htmlRoutes.post('/', (req,res) => {
    console.log(`${req.method} request received to add a htmlRoutes`)
})
module.exports = htmlRoutes