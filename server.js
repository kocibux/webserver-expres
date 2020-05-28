const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    /*
    let salida = {
        nombre: 'juan',
        edad: 25,
        url: req.url
    };
    */
    res.render('home', {
        nombre: 'JuAn',
        //anio: new Date().getFullYear()
    });
    //res.send('Hola Mundo');
});

app.get('/about', function(req, res) {
    res.render('about', {
        //anio: new Date().getFullYear()
    });
});

app.get('/data', function(req, res) {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});