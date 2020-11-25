let fizzbuzz = (array) => {
    let newArr = [];
    array.forEach(ele => {
        if ((ele % 3 === 0) ^ (ele % 5 === 0)) { //XOR bitwise operator
            newArr.push(ele)
        }
})
return newArr;
}

console.log(fizzbuzz([2,3,4,5,15,20,30,33]));
