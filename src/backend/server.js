const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Here you can process the registration data, e.g., save to a database
  // For this example, let's just log the received data
  console.log('Received registration data:', {
    firstName,
    lastName,
    email,
    password
  });

  res.status(200).json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
