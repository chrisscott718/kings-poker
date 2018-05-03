const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '..', '/build');
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
