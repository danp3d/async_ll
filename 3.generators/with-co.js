const co = require('co');

const sum = (a, b) => Promise.resolve(a + b);
const div = (a, b) => Promise.resolve(a / b);

co(function* () {
  const [ a, b ] = [ 1, 2 ];

  console.log('Sum:', yield sum(a, b));
  console.log('Div:', yield div(a, b));
  console.log('Finished executing');
});
