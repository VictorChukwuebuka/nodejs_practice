const _ = require('lodash')

const arrNums = [1,[2,[3,[4]]]];
const newArr = _.flattenDeep(arrNums);

console.log(newArr);
