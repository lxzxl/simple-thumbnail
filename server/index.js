const express = require('express');
const app = express();
const path = require('path');
const Api = require('./api');
app.use(express.static(path.join(__dirname, '../build')));
app.get('/api/images', function(req, res) {
  Api.getImages().then(data => {
    res.json(data);
  });
});

app.listen(3001, function() {
  console.log('Server listening on port 3001!');
});
