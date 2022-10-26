//measuring performance

function sumUp(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log((result = result + i));
  }
  return result;
}

let start = 0;
let end = 0;

start = performance.now();
console.log(sumUp(10000000000000000));
end = performance.now();
console.log(end - start);
