const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, localhost!'));
app.listen(5500, () => console.log('http://127.0.0.1:5500/index.html'));