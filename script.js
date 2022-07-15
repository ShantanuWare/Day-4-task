//question1
var obj1 = { name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};

var result=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(var key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            result=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log(result);//true


//question2
var request= new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();


request.onload = function() {
var result=JSON.parse(request.response);
//Use the rest countries API and display all the country flags in console

for(var i=0; i<result.length; i++){
    console.log(result[i].flag)};

    // Use the same rest countries and print all countries name, region, subregion and population
    for(var i=0; i<result.length; i++){
        console.log("name:" + result[i].name+" region:" + result[i].region+" subregion:" +result[i].subregion+" population:"+result[i].population)};

}
