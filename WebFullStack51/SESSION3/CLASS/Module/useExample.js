const example = require('./example');

console.log('Using person class of module:');

const person = new example.Person('Nguyen Huu Dung', 21);
person.showInfoAuthor();

const sum = example.sum(1,2);

console.log(sum);

console.log(example.authorCopyRight);