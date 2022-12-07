const express = require('express')
const app = express()


app.get('/', function(request, response)  {
  response.send('Hello World!')
})

app.get('/about', function(request, response) {
    response.send('About')
})

app.get('/users',function (request, response) {
    response.send('Get Users')
})

app.post('/users', function(request, response) {
    response.send('Post Users')
})
app.put('/users', function(request, response){
    response.send('Put Users')
})

app.delete('/users', function(request, response){
    response.send('Deleted U')
})


app.listen(3000, function() {
  console.log(`Example app listening on port`)
})