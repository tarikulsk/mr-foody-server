const express = require('express');
const app = express();
const port = process.env.port || 5000;
const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/racipe', (req, res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})