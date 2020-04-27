const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'));

const gamesArray = require('./games-array');

app.get('/apps', (req, res) => {
    const {sort, genre} = req.query;
    if(sort) {
        if(!['rating', 'app'].includes(sort)){
            return res.status(404).send('Sort must included app or rating parameters')
        }
    }
    if(genre){
        if(!['action', 'puzzles', 'stragity', 'casual', 'arcade', 'card'].includes(app)){
            return res.status(400).send('You must include the app you want to see')
        }
    }
})

app.listen(8000, () => {
    console.log('server started on PORT 8000')
});