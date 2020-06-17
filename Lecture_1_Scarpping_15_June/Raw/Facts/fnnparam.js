// functions are variables
function myfun(param) {    // pass a variable as parameter to a function
    //console.log(param);
    let rVal=param();
    console.log(rval);
}

//myfun([1,2,3,4,5,6]);
myfun( function smallerfn(){   //pass a function as variable to a function
    let a=10;
    a++;
    console.log("I am function passed to myfun");
    return a;

})