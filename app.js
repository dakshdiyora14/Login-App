const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic user authentication route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Simple authentication logic
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Login failed.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
