const express = require('express');
const hbs =  require('hbs');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) =>{
    console.log('unable to append to server.log');
  })
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     message: "Maintenance",
//     pageTitle: "Maintenance"
//   });
// });

app.use(express.static(__dirname + '/public'));

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

app.listen(port, () => {
  console.log('Server is up on port: ' + port);
});
