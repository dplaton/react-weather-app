var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use((request, response, next) => {
    if (request.headers['x-forwarded-proto'] === 'http') {
        next()
    } else {
        response.redirect('http://' + request.hostname + request.url)
    }
})

app.use(express.static('public'));
app.listen(port, function() {
    var msg = `Server up! (port ${port})`;
    console.log(msg);
})