console.log("MVP monster")

// window object in node js we use global
// console.log(global)

const os = require("os")
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

//to see directory

console.log(__dirname)
console.log(__filename)

const path = require("path")
//using path
console.log(path.dirname(__filename))
console.log(path.basename(__filename))//for filename
console.log(path.extname(__filename))// for filextention
console.log(path.parse(__filename)) // it parse the whole object
