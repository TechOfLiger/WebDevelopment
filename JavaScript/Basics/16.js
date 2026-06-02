// and or operator

// if(firstName[0] === "s") {
//     console.log("your name starts with s");
// }

// if(age > 18) {
//     console.log("you are above 18");
// }

// if(firstName[0] === "s" && age > 18) {
//     console.log("your name starts with s and you are above 18");
// }else{
//     console.log("inside else");
// }

let firstName = "hivam";
let age = 16;
if(firstName[0] === "s" || age > 18) {
    console.log("inside if");
}else{
    console.log("inside else");
}