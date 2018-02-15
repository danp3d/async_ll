const sum = (a, b) => Promise.resolve(a + b);
const div = (a, b) => Promise.resolve(a / b);

const exec = async (a, b) => {
  console.log('Sum: ', await sum(a, b));
  console.log('Div: ', await div(a, b));
  console.log('Finished executing for', a, b);
};

const main = async () => {
  try {
    await Promise.all([
      exec(1, 2),
      exec(1, 0)
    ]);
    console.log('App finished executing');
  } catch (err) {
    console.log('Error:', err);
  }
};

main();
