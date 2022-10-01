const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const allEntries = require('./routes/allEntries.router');

const app = express();
const { PORT } = process.env;
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(
  cors({
    origin: true,
  }),
);

app.use('/', allEntries);

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT);
});
