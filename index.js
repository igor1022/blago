const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.set('view engine', 'ejs');
server.set('views', './views');

server.use('/', (req, res, next) => {
    res.render('main');
});

server.use('*', (req, res) => {
    res.render('not_found');
})

server.listen(PORT);