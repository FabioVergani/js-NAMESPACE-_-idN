var unid=(function(p){return function(e){var n=e[p]||0;e[p]=++n;return n}})('uid-n');


console.log(unid(window));
console.log(unid(window));
console.log(unid(window));
console.log(unid(window));
