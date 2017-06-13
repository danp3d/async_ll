'use strict';

// Each async function returns a promise
const sum = (a, b) => Promise.resolve(a + b);
const div = (a, b) => Promise.resolve(a / b);

sum(1, 2).then((res) => {
  console.log('Sum:', res);
  return div(1, 2);
}).then((res) => {
  console.log('Div:', res);
  return 'values are chained!'
}).then((val) => {
  console.log('Finished executing.', val);
});

