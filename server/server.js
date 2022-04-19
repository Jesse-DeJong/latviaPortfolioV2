const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
   console.log('Server is up!');
});