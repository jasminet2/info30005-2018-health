const express = require('express');
const app = express();
const router = require('./routes/router.js');
const session = require('express-session');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/public'));

var userData = require('./models/db.js');
// set the view engine to ejs
app.set('view engine', 'ejs')
// use res.render to load up an ejs view file

app.use(session({cookie: {maxAge: 1800000}, secret: "asdfhgxuicyvgkjh3247263874yhaksdf", resave: false, saveUninitialized: true}));

app.get('/bye', router);
app.get('/', router);

//displays all users
app.get('/users', router);

//displays user with specific id using req.params
app.get('/users/:id', router);
app.get('/comingsoon', router);
app.get('/habit', urlencodedParser, router);

app.get('/login', router);
app.post('/login', urlencodedParser, router);
app.get('/logout', router);

app.get('/signup', router);
app.post('/signup', urlencodedParser, router);
app.get('/success', router);
app.post('/api/authLogin', urlencodedParser, router);
app.post('/api/authUser', urlencodedParser, router);
app.post('/api/authEmail', urlencodedParser, router);
/*app.listen(3000, function(){
console.log('Express serving at port 3000');
});*/

app.listen(PORT, function(){
console.log(`Express listening on port ${PORT}`);
});
