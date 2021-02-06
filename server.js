console.log('-- Server started');
var express = require('express');
var app = express();
var path = require('path');
console.log('-- Vars declared');
app.use("/htmls", express.static(path.resolve(__dirname, "htmls")));
console.log('-- App Use passed');
// viewed at http://localhost:8080
app.get('/*', function(req, res) {
    console.log(req.url.pathname);
    console.log('-- Inside App Get');
    res.sendFile(path.join(__dirname + '/htmls/index.html'));
});

app.listen(8080);