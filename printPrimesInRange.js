function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function printPrimes(start, end) {
    if (start <= 1) start = 2; 
    for (i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
