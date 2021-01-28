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

// Handle Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname + '/public/')))

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

const port = process.env.PORT 


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});