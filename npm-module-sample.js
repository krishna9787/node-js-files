const _ = require("lodash")

const nArr = [1, [2, [3, [4]]]]
const updtArr = _.flattenDeep(nArr)
console.log(updtArr)