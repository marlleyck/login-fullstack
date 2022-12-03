const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// Public Route
router.get('/', authController.home)

router.post('/auth/register', authController.registerUser)

// Private Route
router.post('/auth/user', authController.checkToken, authController.getUser)


module.exports = router