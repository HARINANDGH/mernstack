const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

app.get('/getbooks', (req, res) => {
  res.json(books);
});

app.get('/', (req, res) => {
  res.send('library API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});