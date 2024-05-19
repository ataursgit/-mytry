const express = require('express')
require('dotenv').config()
const app = express()
const Port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/me', (req, res) =>{
    res. send('My nupur is missing')
}
)
app.listen(process.env.PORT,() =>{
    console.log("THE Port number is ${PORT}")
})