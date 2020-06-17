function getFirstName(name)
{
    return name.split(" ")[0];
}

function getLastName(name)
{
    return name.split(" ")[1];
}

let rVal=getFirstName("Priya Rathor")
let rVal2=getLastName("Priya Rathor");
console.log(rVal);
console.log(rVal2);