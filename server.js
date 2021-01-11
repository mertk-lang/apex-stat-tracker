const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});

const app = express();

// Dev Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 7000;


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});