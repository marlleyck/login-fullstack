const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// Public Route
router.get('/', authController.home)

router.post('/auth/register', authController.registerUser)

router.post('/auth/user', authController.loginUser)

// Private Route
router.get('/auth/user', authController.checkToken, authController.getUser)


module.exports = router