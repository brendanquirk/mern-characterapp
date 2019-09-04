const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/server.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

const fighterController = require('./controllers/fighterController');

app.use('/fighter', fighterController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on PORT 9000');
})
