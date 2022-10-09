require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');

// Initialize the app and port
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [{ id: 101, name: 'John Smith' }];

// List users
app.get('/users', (req, res) => {
  return res.send({ users });
});

// Add User
app.post('/users', (req, res) => {
  const { id, name } = req.body;
  users.push({ id, name });
  return res.status(201).json({ users });
});

// Create server
const server = http.createServer(app);

// Listening to the server
server.listen(port, () => console.log(`Server listening on port: ${port}`));
