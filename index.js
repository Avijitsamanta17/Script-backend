require('dotenv').config()
const express = require('express')

const app = express()
 
const port = 4000

app.get('/', (req, res) => {
    res.send(`hello friends`)
})

app.get('/github', (req, res) => {
    res.send('Avijitsamanta17')
})
app.get('/login', (req, res) =>{
    res.send(`<h1>Hey you are on login page now`)
})

app.get('/facebook', (req, res)=>{

    res.send(`welcome to facebook`)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})
