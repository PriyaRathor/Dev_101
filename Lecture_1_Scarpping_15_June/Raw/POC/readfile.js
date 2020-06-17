let fs= require("fs");
let cheerio=require("cheerio");   //to require cheerio, npm install cheerio

let html=fs.readFileSync("../Facts/index.html","utf-8");
console.log(html);

let $=cheerio.load(html);

let h1=$("h1");  // to fetch h1 tag from html file 
let h1KaData=h1.text();  // to fetch h1 tag ka text
console.log(h1KaData);

//if you have multiple tags

let a=$("a");
console.log(a.text());

//to select element that is inside another element

let ulKaP= $("ul p");
console.log(ulKaP.text());

//select a class

let classElem=$(".first-para");
console.log(classElem.text());

//select all elements with para class
let allElem=$(".para");
console.log(allElem.text());

//to select a particular element with same classes in it
let combinedElem=$(".para.first-para");
console.log(combinedElem.text());

//select on the basis of id
let myName=$("#unique");
console.log(myName.text());