const names = require("./names")
const nameFunc = require("./app")
const data = require("./module-1")
nameFunc(names.abc)
nameFunc(names.def)

console.log(data)
require("./add-modul")