const express = require('express')
const basic_auth = require('express-basic-auth')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(basic_auth({
    users:{ 'admin': '123456'}
}))

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/login', (req, res) => {
    res.send('Login page')
})

app.get('/register', (req, res) => {
    res.send('Register page')
})

app.get('/forgotPassword', (req, res) => {
    res.send('Forgot Password page')
})

app.listen(3000)