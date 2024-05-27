const router = require('express').Router()

const apiRoutes = require('./apiRoutes')
const notes = require('./htmlRoutes')

router.use('/notes' , apiRoutes)
router.use('/notes' , notes)

module.exports = router;