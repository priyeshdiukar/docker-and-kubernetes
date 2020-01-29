const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    //instead of using url map 'host' key to docker container name
    host: 'redis-server', //name of the container. (OR URL)
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => console.log('Listening on 8081'));