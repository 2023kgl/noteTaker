const router = require('express').Router()

const apiRoutes = require('./apiRoutes')

router.use('/notes' , apiRoutes)

module.exports = router;