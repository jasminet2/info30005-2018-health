const express = require('express');
const app = express();
const router = require('./routes/router.js');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/public'));

var userData = require('./models/db.js');
// set the view engine to ejs
app.set('view engine', 'ejs')
// use res.render to load up an ejs view file


app.get('/bye', router);
app.get('/', router);

//displays all users
app.get('/users', router);

//displays user with specific id using req.params
app.get('/users/:id', router);

/*app.listen(3000, function(){
console.log('Express serving at port 3000');
});*/

app.listen(PORT, function(){
console.log(`Express listening on port ${PORT}`);
});
