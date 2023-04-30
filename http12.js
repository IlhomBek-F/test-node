const _ = require('lodash');
const items = [1, 2, 3, [12, 3, 3, [2, 3]]];

const de = _.flattenDeep(items);

console.log(de)