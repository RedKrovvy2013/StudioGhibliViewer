var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '../client/public')))

// needed for getting react router browser history to work
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})

app.listen(3007, function() {})
