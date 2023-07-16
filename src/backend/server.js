const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  // Set a cookie with SameSite=None and Secure attributes
  res.cookie('myCookie', 'cookieValue', { sameSite: 'none', secure: true });
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
