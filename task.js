// 10.
function fibonaccif() {
    let firstFib = -1;
    let secondFib = 0;
    return () => {
        if (firstFib == -1) {
            firstFib = 0;
            return firstFib;
        } else if (secondFib == 0) {
            secondFib = 1;
            return secondFib;
        }
        let nextFib = firstFib + secondFib;
        firstFib = secondFib;
        secondFib = nextFib;
        console.log(nextFib);
        return nextFib;
    }
}

const fib = fibonaccif();
fib();
fib();
fib();
fib();
fib();
fib();