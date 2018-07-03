// Requires (importación de librerías).
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables.
var app = express();

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas.
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoute = require('./routes/login');

// Conexión a la base de datos.
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response) => {
    if (error) throw error;

    console.log('Base de datos. \x1b[32m%s\x1b[0m', 'ONLINE.');
});

// Rutas.
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoute);
app.use('/', appRoutes);

// Escuchar peticiones.
app.listen(3088, () => {
    console.log('Express server, puerto 3088. \x1b[32m%s\x1b[0m', 'ONLINE.');
});