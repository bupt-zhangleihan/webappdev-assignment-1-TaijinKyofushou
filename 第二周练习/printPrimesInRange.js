function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false; //"1" == 1, 1 === 1
    for (let i = 5; i * i <= n; i += 6) //除了2和3之外的素数都可以表示成6k±1的形式
    { 
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function printPrimes(startNum, endNum) {
    if (startNum <= 1) startNum = 2; 
    for (let i = startNum; i <= endNum; i++) //不声明i控制台会无限循环然后卡死，可能是影响到了全局变量
    {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
