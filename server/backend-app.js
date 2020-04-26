const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('common'));

const gamesArray = require('./games-array');

app.get('/apps', (res, req) => {
    res.json(gamesArray);
})

app.listen(8000, () => {
    console.log('server started on PORT 8000')
});