const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const winston = require('winston');
const helmet = require('helmet');

const bodyParser = require('body-parser');
const app = express();

const whitelist = ['http://example1.com', 'http://example2.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  }
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use(morgan('tiny'))
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.cookie('session', '1', { httpOnly: true, secure: true });
  res.set({
    'Content-Security-Policy': "script-src: 'self' 'https://apis.google.com'"
  });
  res.send('Hello World!');
});

app.post('/secret', (req, res) => {
  const { userInput } = req.body;
  // console.log(userInput);
  if (userInput) {
    winston.log('info', 'user input: ' + userInput);
    res.status(200).json('success');
  } else {
    winston.error('this guy is messing with us');
    res.status(400).json('incorrect submission');
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
