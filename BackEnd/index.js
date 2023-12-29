const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port || 4000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const kostumRouter = require('./routes/kostum');
const userRouter = require('./routes/user');

app.use('/kostum', kostumRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
 