import express from 'express';
import consign from 'consign';

const app = express();



// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


consign({
        cwd: __dirname
    })
    .include('libs/config.js')
    .then('db.js')
    .then('libs/middlewares.js')
    .then('libs/boot.js')
    .then('routes')
    .into(app)

console.log('en index');
// Setting