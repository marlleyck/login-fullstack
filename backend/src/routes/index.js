const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// Public Route
router.get('/', authController.home)

router.post('/auth/register', authController.registerUser)

router.post('/auth/user', authController.loginUser)

router.get('/auth/token', authController.checkToken, authController.getToken)

// Private Route
router.get('/auth/user/:id', authController.checkToken, authController.getUser)


module.exports = router