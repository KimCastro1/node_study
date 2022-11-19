const fs = require('fs').promises;

console.log('시작');
fs.readFile('./readme2.txt')
    .then((result) => {
        console.log('1번째',result.toString());
    }).catch((err) => {
        console.error(err);
    });

fs.readFile('./readme2.txt')
    .then((result) => {
        console.log('2번째',result.toString());
    }).catch((err) => {
        console.error(err);
    });

fs.readFile('./readme2.txt')
    .then((result) => {
        console.log('3번째',result.toString());
    }).catch((err) => {
        console.error(err);
    });
console.log('끝');