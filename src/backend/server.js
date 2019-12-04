const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/send', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))