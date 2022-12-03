const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

// Function Home
exports.home = (req, res) => {
    return res.send({ ok: true })
}

// Function Register User
exports.registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    
    // Validations
    if (!name) {
        return res.status(400).send({ error: 'Name is required!' })
    }

    if (!email) {
        return res.status(400).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(400).send({ error: 'Password is required!' })
    }

    if (!confirmPassword) {
        return res.status(400).send({ error: 'Confirm password is required!' })
    }

    // Check if password match
    if (password !== confirmPassword) {
        return res.status(401).send({ error: 'Passwords do not match!' })
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    // Create user
    try {
        await User.create({
            name,
            email,
            password: hashPassword
        })

        return res.status(201).send({ msg: 'Successfully created user!' })
    } catch(e) {
        console.log(e)
        return res.status(500).send({ error: 'Server error!' })
    }
    
}

// Function Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    // Validations
    if (!email) {
        return res.status(400).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(400).send({ error: 'Password is required!' })
    }

    // Get user
    const user = await User.findOne({
        where: {
            email: email
        }
    })

    // Check if user exists
    if (!user) {
        return res.status(404).send({ error: 'Email is not exists!' })
    }

    // Check if password match
    const checkPasword =  await bcrypt.compare(password, user.password)

    if (!checkPasword) {
        return res.status(422).send({ error: 'Invalid password!' })
    }

    // Create token
    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user.id
        }, secret)

        return res.status(200).send({ token })
    } catch(e) {
        console.log(e)
        return res.status(500).send({ error: 'Server error!' })
    }
}

exports.getUser = async (req, res) => {
    const { id } = req.params

    // Check if user exists
    const user = await User.findOne({
        where: {
            id: id
        }
    })

    if (!user) {
        return res.status(404).send({ error: 'User not found!' })
    }

    return res.send(user)
}

// Function check token
exports.checkToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).send({ error: 'Access denied!' })
    }

    // Verify if token is valid
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
    } catch(e) {
        console.log(e)
        return res.status(400).send({ error: 'Invalid token!' })
    }
}