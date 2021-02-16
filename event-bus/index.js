const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
const events = [];

app.get('/events', (req, res) => {
    console.log(events);
    res.send(events);
})

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('http://localhost:4000/events', event); // Post
    axios.post('http://localhost:4001/events', event); // Comments
    axios.post('http://localhost:4002/events', event); // Query
    axios.post('http://localhost:4003/events', event); // Moderation

    res.send({ status: 'Ok' });
})

app.listen(4005, () => {
    console.log('Event-bus listening on 4005');
})

