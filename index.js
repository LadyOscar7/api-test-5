const express = require('express');
const app = express();

app.get('',(req, res, next) => {
    res.send('I want more chocolate!');
});

app.get('/chocolate', (req, res, next) => {
    let chocolates = [];
    chocolates.push({name: 'Lindt'});
    chocolates.push({name: 'Milka'});
    chocolates.push({name: 'Dorina'});
    res.json(chocolates);
});

app.listen(process.env.PORT || 3000);

