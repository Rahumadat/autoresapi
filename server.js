const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors());

const routes = require('./server/config/routes')(app)


//exponemos el servidor en el la ip:puerto requerido
app.listen(8000, function () {
    console.log('http://localhost:8000');
});