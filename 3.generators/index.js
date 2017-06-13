'use strict';

const sum = (a, b) => a + b;
const div = (a, b) => a / b;

function* exec(a, b) {
  yield 'Sum: ' + sum(a, b);
  yield 'Div: ' + div(a, b);
  return 'Finished executing';
}

const it = exec(1, 2);
let res;
do {
  res = it.next(); // { value: <val>, done: <bool> }
  console.log(res.value);
} while (!res.done);
