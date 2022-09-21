function fibonacci(number:number): number {
if(number == 1) return 0;
if (number == 2) return 1;
return fibonacci(number-1) +fibonacci(number - 2);
}
let i = 20;
let sum = 0;
for (let j = 1; j < i; j++) {
   console.log(fibonacci(j))
   sum += fibonacci(j);
}
console.log(`Tồg các số fibonacci là : ${sum}`);