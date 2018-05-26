const fs = require('fs');
var obj = {nome: "Teste", id: 2};

var str = JSON.stringify(obj);

// fs.appendFile('data.json', str);

var data = fs.readFileSync('data.json');

data = '[' + data + ']';
data = JSON.parse(data);
console.log(data[0].nome);


