'use strict'

var decrypt = require('./decrypt')

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(express.static('../exam-web-2016-07-25'));

app.post('/decode', urlencodedParser, function(req, res){
  decrypt.decode(req.body.shift, req.body.text, function (err, response) {
      if(err) {
          res.status(400).json(err);
      }
      else {
        res.status(200).json(response)
        }
  });
});

app.listen(3012);
