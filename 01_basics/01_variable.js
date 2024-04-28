// console.log("hello Atul Kumar")

//varible of type const , you cannot modify it later
const accountId=123456;
//you cannot modify it again
// accountId=134;

/*
let keyword follow scope rool like c++ etc. programming language
 */
let accountEmail="919atul@gmail.com";

/*var keyword not follow scope rule */
var accountCity="Haspura";
accountPassword="jdjfdlkjd";//you can also use variable without type of variable
let accountState;

/*prefer not use var
because of issue in block scope and functional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// Example for var 
if(true){
    var check=true;
}
console.log(check);

// Example for let 
if(true){
    let check1=true;
}//you got error like :- ReferenceError: check1 is not defined
// console.log(check1);