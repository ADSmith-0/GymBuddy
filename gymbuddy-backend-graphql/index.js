const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('hello');
});

app.listen(PORT, () => `Server listening on port: ${PORT}`);