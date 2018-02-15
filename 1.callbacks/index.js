// Each async function receives a callback.
// The standard callback signature is (err, data)
const sum = (a, b, cb) => {
  try {
    const res = a + b;
    cb(null, res);
  } catch(err) {
    cb(err, null);
  }
};

const div = (a, b, cb) => {
  try {
    const res = a / b;
    cb(null, res);
  } catch (err) {
    cb(err, null);
  }
};

// You call the function passing the callback, which causes the flow to grow horizontally
const exec = (a, b, cb) => {
  sum(a, b, (err, res) => {
    if (err) {
      console.log('Error in sum:', err);
      return cb(err);
    }

    console.log('Sum:', res);

    div(a, b, (err, res) => {
      if (err) {
        console.log('Error in div:', err);
        return cb(err);
      }

      console.log('Div:', res);

      cb(null);
    });
  });
};

// Kick off
exec(1, 2, (err) => {
  if (err)
    throw err;

  console.log('App finished executing');
});
