const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "masg": "Hello from Customer" });
});

app.listen(8001, () => {
    console.log(`Customer is listening on Port 8001`)
});