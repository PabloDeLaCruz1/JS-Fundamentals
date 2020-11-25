let searchString = "time to program";
let subString = "time";

//learned that forEach wont break with a return
// function isSubstring(searchString, subString){
//     let newString = searchString.split(" ");
//     newString.forEach(element => {
//         if (element === subString) {
//             console.log(element === subString);
//             return true;
//         }  
//     });
//     return false;
// }


//Use a simple loop if you need to break after a condition
// function isSubstring(searchString, subString){
//     let newString = searchString.split(" ");
//     for (let i = 0; i < newString.length; i++) {
//         if (newString[i] === subString) {
//             return true;
//         }          
//     }        
//    return false;
// }

//Use Array prototype method .includes for easy mode

let isSubstring = (searchString, subString) => {
    return searchString.includes(subString);
}

console.log(isSubstring(searchString, subString));