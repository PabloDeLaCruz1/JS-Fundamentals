let isPrime = (num) => {
    if (num < 2) { return false; }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


let sumOfNPrimes = n => {
    let count = 0;
    let countPrimes = 0;

    for (let i = 2; countPrimes < n; i++) {
        if (isPrime(i)){
            count += i;
            countPrimes++;
        }
    }
return count;
}

console.log(sumOfNPrimes(4));