const express = require('express'),
    app = express(),
    path = require('path');


app.use(express.static(path.join(__dirname + '/public')));
console.log(path.join(__dirname + '/dist/wrapItUp'));
app.listen(process.env.PORT || 5000, () => console.log('Connected!'));

app.get('/*', (req, res) => {
    console.log("route..!");
    res.sendFile(path.join(__dirname, '/public/home-hero-slideshow.html'));
});
