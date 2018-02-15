const sum = (a, b) => Promise.resolve('Sum: ' + (a + b));
const div = (a, b) => Promise.resolve('Div: ' + (a / b));

function* exec(a, b) {
  yield sum(a, b);
  yield div(a, b);
  return Promise.resolve('Finished executing');
}

const it = exec(1, 2);
let res = it.next();
const handle = (val) => {
  console.log(val);
  if (!res.done) {
    res = it.next();
    res.value.then(handle);
  }
};
res.value.then(handle);
