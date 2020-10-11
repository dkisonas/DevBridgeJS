//1.
function add(a, b) {
	return a + b;
}

function mul(a, b) {
	return a * b;
}

//2.
function identify(a) {
	return () => {
		return a;
	};
}

//3.
function addf(a) {
	return (b) => {
		return a + b;
	};
}

//4.
function applyf(a) {
	return (b) => {
		return (c) => {
			return a(b, c);
		};
	};
}

//5.
function curry(func, a) {
	return (b) => {
		return func(a, b);
	};
}

//6.
function twice(func) {
	return (a) => {
		return func(a, a);
	};
}

//7.
function composeu(funcA, funcB) {
	return (a) => {
		return funcB(funcA(a));
	};
}

//8.
function addg(a) {
	return (b) => {
		if (b !== undefined) {
			return addg(a + b);
		} else {
			return a;
		}
	};
}

//9.
function applyg(func) {
	const goHere = (a) => {
		return (b) => {
			if (b !== undefined) {
				return goHere(func(a, b));
			} else {
				return a;
			}
		};
	};
	return goHere;
}

//10.
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
		return nextFib;
	};
}
