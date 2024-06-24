const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Routes for other pages
app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'employee.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'aboutus.html'));
});

app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'opportunity.html'));
  });

// Route to handle form submission and save data to JSON file
app.post('/save', (req, res) => {
  const data = req.body;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    } else {
      res.status(200).json({ status: 'success', message: 'Data saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
