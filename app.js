const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req,res) => {
   res.send('git');
});

app.listen(8082);