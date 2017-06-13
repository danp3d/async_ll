'use strict';

// Each async function returns a promise
const sum = (a, b) => Promise.resolve(a + b);
const div = (a, b) => Promise.resolve(a / b);

const exec = (a, b) => {
  return sum(a, b).then((res) => {
    console.log('Sum:', res);
    return div(a, b);
  }).then((res) => {
    console.log('Div:', res);
  });
}

const params = [
  [1, 2],
  [1, 0]
];

Promise.all(params.map((pars) => {
  return exec(pars[0], pars[1]);
})).then(() => {
  console.log('App finished executing');
});

