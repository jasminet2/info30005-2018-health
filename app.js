const express = require('express');
const app = express();
const router = require('./routes/router.js');
const session = require('express-session');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/css'));
//add js folder
app.use(express.static(__dirname + '/public'));

var userData = require('./models/db.js');
// set the view engine to ejs
app.set('view engine', 'ejs')
// use res.render to load up an ejs view file

app.use(session({cookie: {maxAge: 1800000}, secret: "asdfhgxuicyvgkjh3247263874yhaksdasdfwewrwxcbve234236f", resave: false, saveUninitialized: true}));


app.get('/', router);
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

app.get('/api/user/data', urlencodedParser, router);
app.get('/api/user/levelup', router);


app.get('/api/user/loadHabit', urlencodedParser, router);
app.post('/api/user/addhabit', urlencodedParser, router);

app.post('/api/user/addStreak', urlencodedParser, router);
app.post('/api/user/removeHabit', urlencodedParser, router);
/*app.listen(3000, function(){
console.log('Express serving at port 3000');
});*/

app.listen(PORT, function(){
console.log(`Express listening on port ${PORT}`);
});
