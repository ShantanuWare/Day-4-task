let resume={
    "basiclinfo": {
        "name": "shantanu ware",
        "email": "shantanuware0763@gmail.com",
        "contact": "+91 9370889496"
},
"education":[
    {"course":"bTech in mechanical Engineering", "institute":"college of enginnering phaltan",
     "board":"DBATU",
     "percentage":"78",
     "passingYear":"2021" 
},
{"course":"diploma in mechanical Engineering", "institute":"government polytechnic karad",
    "board":"MSBTE",
    "percentage":"68",
    "passingYear":"2018" 
},
{"course":"secndary school examination", "institute":"sakharwadi vidyalaya sakharwadi",
    "board":"SSC",
    "percentage":"78",
    "passingYear":"2015" 
}
],
"personalInfo":{
"address":{"hometown": "sakharwadi",
        "taluka": "phaltan",
        "district": "satara",
        "pin code":"415522"
},
"DOB": "3rd april 1999",
"gender": "male",
"nationality": "Indian",
"maritial status": "single",
"langauge known": ["marathi", "hindi", "english" ],
"hobbies":["reading", "traveling","drawing"]
}
}
console.log(resume)

//***************** output */
// basiclinfo:
// contact: "+91 9370889496"
// email: "shantanuware0763@gmail.com"
// name: "shantanu ware"
// [[Prototype]]: Object
// education: Array(3)
// 0:
// board: "DBATU"
// course: "bTech in mechanical Engineering"
// institute: "college of enginnering phaltan"
// passingYear: "2021"
// percentage: "78"
// [[Prototype]]: Object
// 1:
// board: "MSBTE"
// course: "diploma in mechanical Engineering"
// institute: "government polytechnic karad"
// passingYear: "2018"
// percentage: "68"
// [[Prototype]]: Object
// 2:
// board: "SSC"
// course: "secndary school examination"
// institute: "sakharwadi vidyalaya sakharwadi"
// passingYear: "2015"
// percentage: "78"
// [[Prototype]]: Object
// length: 3
// [[Prototype]]: Array(0)
// personalInfo:
// DOB: "3rd april 1999"
// address:
// district: "satara"
// hometown: "sakharwadi"
// pin code: "415522"
// taluka: "phaltan"
// [[Prototype]]: Object
// gender: "male"
// hobbies: Array(3)
// 0: "reading"
// 1: "traveling"
// 2: "drawing"
// length: 3
// [[Prototype]]: Array(0)
// langauge known: Array(3)
// 0: "marathi"
// 1: "hindi"
// 2: "english"
// length: 3
// [[Prototype]]: Array(0)
// maritial status: "single"
// nationality: "Indian"
// [[Prototype]]: Object
// [[Prototype]]: Object







let object = [
    { "person": "John", "age": 30, "company": "Google" },
    { "person": "Mohn", "age": 37, "company": "Flipkart" },
    { "person": "Kohn", "age": 38, "company": "Amazon" },
    { "person": "Sohan", "age": 40, "company": "Myntra" },
    { "person": "Jenny", "age": 70, "company": "Apple" },
]
//**For loop
for (let i = 0; i < object.length; i++) {
    console.log(object[i].person);
    console.log(`
    Name: ${object[i].person}
    `);
}
// John
// index.js:57 
//     Name: John
    
// index.js:56 Mohn
// index.js:57 
//     Name: Mohn
    
// index.js:56 Kohn
// index.js:57 
//     Name: Kohn
    
// index.js:56 Sohan
// index.js:57 
//     Name: Sohan
    
// index.js:56 Jenny
// index.js:57 
//     Name: Jenny


//**forEach loop
object.forEach(data => {
    console.log(`Age: ${data.age}`)
}
)
// Age: 30
// index.js:64 Age: 37
// index.js:64 Age: 38
// index.js:64 Age: 40
// index.js:64 Age: 70



//**For in loop
for (let key in object) {
    console.log(key)
    console.log(`Company: ${object[key].company}`)
}
// 0
// index.js:71 Company: Google
// index.js:70 1
// index.js:71 Company: Flipkart
// index.js:70 2
// index.js:71 Company: Amazon
// index.js:70 3
// index.js:71 Company: Myntra
// index.js:70 4
// index.js:71 Company: Apple
// index.js:76 



//**ForOf loop
for (let data of object) {
    console.log(`
    Name: ${data.person}
    Age: ${data.age}
    Company: ${data.company}
    `)
}

function newFunction() {
    console.log(JSON.stringify(object));
}
// Name: John
// Age: 30
// Company: Google

// index.js:76 
// Name: Mohn
// Age: 37
// Company: Flipkart

// index.js:76 
// Name: Kohn
// Age: 38
// Company: Amazon

// index.js:76 
// Name: Sohan
// Age: 40
// Company: Myntra

// index.js:76 
// Name: Jenny
// Age: 70
// Company: Apple