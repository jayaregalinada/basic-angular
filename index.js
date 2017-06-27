var express = require('express')
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    publicPath = process.argv[2] || __dirname + '/public',
    port = parseInt(process.env.PORT, 10) || 8080,
    hostname = process.env.HOSTNAME || 'localhost';


app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, '/index.html'))
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(publicPath))
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}))

app.listen(port, hostname)
