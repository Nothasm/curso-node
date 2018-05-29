const express = require('express');
const hbs =  require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('serve.log', log + '\n', (err) =>{
    console.log('unable to append to server.log');
  })
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('toUpper', (text)=>{
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    message: "Welcome",
    pageTitle: "Homepage"
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
