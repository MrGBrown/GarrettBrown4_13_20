const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => console.log(`Server is listening on port ${port}`));

app.get('/info', (req, res) => {
    res.send(information[Math.floor(Math.random() * this.quotes.length)]);
});

const information = [
    {},
    {},
    {}
]