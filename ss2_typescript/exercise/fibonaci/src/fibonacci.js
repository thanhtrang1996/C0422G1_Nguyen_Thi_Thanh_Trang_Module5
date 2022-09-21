function fibonacci(number) {
    if (number == 1)
        return 0;
    if (number == 2)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var i = 20;
var sum = 0;
for (var j = 1; j < i; j++) {
    console.log(fibonacci(j));
    sum += fibonacci(j);
}
console.log("T\u1ED3g c\u00E1c s\u1ED1 fibonacci l\u00E0 : ".concat(sum));
