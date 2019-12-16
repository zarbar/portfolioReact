const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const path = require('path');
const DOMAIN = 'sandboxcce574f31ccf4ae9b01bd5614fb0ce4f.mailgun.org';
const key = '4dfa01e4e8decba662f7284f225b8407-5645b1f9-1ebe284f';
var mailgun = require('mailgun-js')({ apiKey: key, domain: DOMAIN });

//so server.js can understand the data it receives
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/send', (req, res) => {
    console.log(req.body);

    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'email@yahoo.co.uk',
        subject: 'poop',
        text: 'Testing some Mailgun awesomeness!'
    };

    mailgun.messages().send(data, (error, body) => {
        if (error) { console.log(error.statusCode) }
        else { console.log(body) }
    });
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))