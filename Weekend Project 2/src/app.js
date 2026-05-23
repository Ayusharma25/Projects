const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pageRoutes);

app.use((req, res) => {
    res.status(404).render('not-found', {
        title: 'Page Not Found'
    });
});

module.exports = app;
