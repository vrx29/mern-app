const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
