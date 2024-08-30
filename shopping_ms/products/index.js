const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
    return res.status(200).json({ "masg": "Hello from Products" });
});

app.listen(8002, () => {
    console.log(`Customer is listening on Port 8002`)
});