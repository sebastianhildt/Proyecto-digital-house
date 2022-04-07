const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(require('./routes/canciones.routes'));
app.use(require('./routes/propiedades.routes'));
module.exports = app;