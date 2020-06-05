//1. search in core module
//2. search in file or folder
//3. search in node_modules folder
var _ = require('underscore');

var result = _.contains([1,2,3], 3);
console.log(result); // true