const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');


const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', (req, res) => {  res.render('index')});

app.get('/beers', (req, res) => {  
    punkAPI.getBeers() //promise
    .then((beersFromApi) =>{
        //console.log(beersFromApi) 
        //res.render('beers', {beersFromApi});
        res.render('beers', {beersFromApi});
    })
    
})

app.get('/random-beer', (req, res) => {  
    punkAPI.getRandom()
    .then((randomBeerFromApi) => {
        console.log(randomBeerFromApi)
    
  
    res.render('random-beer', {randomBeerFromApi})
})
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));

/*
call the PunkAPI getRandom() method. It returns a promise that will resolve 
with a different beer object on every call. Look at the documentation to understand the structure of the 
data that you're supposed to get back. 👍
*/