// import nodeJS
let fs = require("fs");  // to require fs functionality to read a file. it imports nodeJS module-fs.
let content = fs.readFileSync("f1.txt","utf-8");  // to read file
console.log(content);


