var express = require('express');
var app = express();

app.get('/test', function(req, res) {
  res.json({hello: 'world'});
});

app.listen(8888, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + 8888 + '\n')
})