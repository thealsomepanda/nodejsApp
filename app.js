const express = require('express');
const path = require('path');

//init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//home route
app.get('/', function(req, res){
    res.render('index');
});

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000...')
});