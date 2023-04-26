var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 4000;

const url = 'mongodb://localhost:27017/simohammed';

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("error connecting to MongoDB", err);
    });

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    }));

require("./routes/books.js")(app);

app.get("/", function (req, res) {
    console.log("app started on port " + port);
    res.send("test express node js mongodb");
});

app.listen(port, function () {
    console.log('app listening on port ' + port);
});
