var express = require('express');
var app = express();
var menus=require('./fake/menus');

app.get('/api/api/test', function(req, res) {
  res.json({hello: 'world'});
});

app.get('/api/menus', function(req, res) {
  res.json(menus);
});

app.listen(8888, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + 8888 + '\n')
})