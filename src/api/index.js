const port = process.env.PORT || 3000

const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.use(express.json());

app.get("/", (req, res, next) => {
    let page = req.query.page;
    let search = req.query.q;
    let category = req.query.category;
    let concatQueries = `?search=${search}&page=${page}&category=${category}`;
    let queryObj = {
        'page': page,
        'search': search,
        'category': category,
        'queryString': encodeURIComponent(concatQueries)
    };

    // Send back the response
    res.status(200);
    res.json(queryObj);
});

app.get("/:brand", (req, res, next) => {
    let brand = req.params.brand;
    let page = req.query.page;
    let search = req.query.q;
    let category = req.query.category;
    let concatQueries = `/${brand}/?search=${search}&page=${page}&category=${category}`;
    let queryObj = {
        'brand': brand,
        'page': page,
        'search': search,
        'category': category,
        'queryString': encodeURIComponent(concatQueries)
    };

    let results = require(`./results/${req.params.brand}`);
    console.log(queryObj);

    // Send back the response
    res.status(200);
    res.json(results);
});

app.get("/:brand/categories", (req, res, next) => {
    let categories = require(`./categories/${req.params.brand}`);

    // Send back the response
    res.status(200);
    res.json({'brand': req.params.brand, 'categories': categories['categories']});
});

app.post('/', function(request, response) {
    // Send back the response
    response.status(200);
    response.json(request.body);
});

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

module.exports = app
