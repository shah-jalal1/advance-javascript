//if not zero and then condition true
const age = 0;
// string is not empty then condition true
const name = "";
// if undifined then it is false
let name;
// if null and NaN then it is false
let name = null;
// if null and NaN then it is false
let name = NaN;
// truth
let age = " ";
// truth
let age = '0';

if (age) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}