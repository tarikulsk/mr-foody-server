const express = require('express');
const app = express();
const port = process.env.port || 5000;
const recipes = require('./data/recipes.json')
const recipe = require('./data/recipe.json')

const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors())

app.get('/recipes', (req, res) => {
    res.send(recipes)
})
app.get('/recipe', (req, res) => {
    res.send(recipe)
})
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const viewrecipe = recipe.find(n => n.id === id)
    res.send(viewrecipe);
    // res.send(recipes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})