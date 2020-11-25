let titleize = (array, cb) => {
    let newArr = array.map((ele, i, arr) =>{
        return "Mx. " + ele + " Jingleheimer Schmidt"
    })
    cb(newArr)
    return newArr
}


//testing how map works
// console.log( [1,2,3].map((ele, i, array) => {
//     console.log(ele);
//     console.log(i);
//     console.log(array);
// } ));

let myCallback = (arr) => {
    arr.forEach(element => {
       console.log(element); 
    });
}

let names = ["Mary", "Brian", "Leo"]
titleize(names, myCallback)