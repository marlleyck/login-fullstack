const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// Public Route
router.get('/', authController.home)

module.exports = router