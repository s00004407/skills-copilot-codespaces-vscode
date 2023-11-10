// Create web server
// 1. npm init -y
// 2. npm install express
// 3. npm install body-parser
// 4. npm install date-utils
// 5. npm install nodemon
// 6. npm install mysql
// 7. npm install ejs
// 8. npm install express-session
// 9. npm install multer
// 10. npm install fs
// 11. npm install path
// 12. npm install cookie-parser
// 13. npm install socket.io
// 14. npm install connect-flash
// 15. npm install passport
// 16. npm install passport-local
// 17. npm install passport-facebook
// 18. npm install passport-kakao
// 19. npm install passport-naver

// 1. express web framework
var express = require('express');
var app = express();

// 2. body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 3. date-utils
var date = require('date-utils');

// 4. nodemon
// npm install -g nodemon
// nodemon app.js
// nodemon --inspect app.js
// nodemon --inspect-brk app.js
// chrome://inspect

// 5. mysql
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: '1234'
});

// 6. ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// 7. express-session
var session = require('express-session');
app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true
}));

// 8. multer
var multer = require('multer');
var _storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
var upload = multer({storage: _storage});
app.use('/user', express.static('uploads'));

// 9. fs
var fs = require('fs');

// 10. path