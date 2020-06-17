//npm install request
//to make a request to any server
let request=require("request");
let fs= require("fs");
let cheerio= require("cheerio");

request("https://www.espncricinfo.com/series/_/id/8039/season/2015/icc-cricket-world-cup", dataReceiver);

function dataReceiver(err,res,html)
{
    if(err==null && res.statusCode==200)
    {
        //console.log(html);
        parsefile(html);
    }else if(res.statusCode==404)
    {
        console.log("Page not Found");

    }else{
        console.log(err);
        console.log(res);
    }

}

function parsefile(html){
    let $=cheerio.load(html);
    //let list= $("ul.list-unstyled.mb-0");
    //fs.writeFileSync("list.html",list);

    let a= $("li.widget-items.cta-link a").attr("href");  //to get the link of a partcular element using selectors
    //console.log(a);
    let fullLink= "https://www.espncricinfo.com"+a; // to get full link from home page
    //console.log(fullLink);
    
    request(fullLink, matchPageHandler);
}
function matchPageHandler(err,res,html)
{
    if(err==null && res.statusCode==200)
    {
        //console.log(html);
        parseMatchPage(html);
    }else if(res.statusCode==404)
    {
        console.log("Page not Found");

    }else{
        console.log(err);
        console.log(res);
    } 
}

function parseMatchPage(html)
{
    //fs.writeFileSync("allMatches.html",html);
    let $=cheerio.load(html);
    let allElem=$(".col-md-8.col-16");
    fs.writeFileSync("All_Cards.html",allElem);

    for(let i=0;i<allElem.length;i++)
    {
        //find function enables us to find any element in allElem
        let result= $(allElem[i]).find(".extra-small.mb-0.match-description.match-description-bottom").text();
        let description= $(allElem[i]).find(".small.mb-0.match-description").text();

        // console.log("################################################");
        // console.log(result);
        // console.log(description);
        // console.log("################################################");

        let scoreCard= $(allElem[i]).find(".btn.btn-sm.btn-outline-dark.match-cta").attr("href");
        console.log("################################################");
        
        console.log("https://www.espncricinfo.com"+scoreCard);

        console.log("################################################");
    }
}