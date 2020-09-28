const information = require('./information');
var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `I am ${information.name} from ${information.campus}`,
  })
);
