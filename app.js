const express = require('express');

const app = express();
app.get('/where', (req, res) => {
    res.sendStatus(500);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});