const express = require('express')
var path = require('path');
const app = express()
const PORT =  3000;
var partials = require('express-partials');

// Static Files
app.use(express.static('public'))

// Set Templating Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

const DashboardController = require('./controllers/dashboard');

// Routes
app.get('/screen/resort/:resort', DashboardController.dashboard_get);

app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`); //listening on PORT
  });