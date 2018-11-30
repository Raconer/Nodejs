// javascript의 빈약한 기능을 underscore를 채워주는 기능을 한다.
var _ = require('underscore');
var arr = [3,6,9,1,12];
console.log('first number = (arr[0] : ' + arr[0] + ' / arr.first : ' + _.first(arr)+')');
console.log('last number = (arr[arr.length-1] : ' + arr[arr.length-1] + ' / arr.last : '+ _.last(arr)+')');
