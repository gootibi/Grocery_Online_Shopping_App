const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "masg": "Hello from Shopping" });
});

app.listen(8003, () => {
    console.log(`Shopping is listening on Port 8003`)
});