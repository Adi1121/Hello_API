const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
  const language = req.query.language;
  let message = '';

  switch (language) {
    case 'English':
      message = 'Hello world';
      break;
    case 'French':
      message = 'Bonjour le monde';
      break;
    case 'Hindi':
      message = 'Namastey sansar';
      break;
    default:
      return res.status(400).json({ error_message: 'The requested language is not supported' });
  }

  res.status(200).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
