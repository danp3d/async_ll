function* fibonacci(max) {
  let [ prev, curr ] = [ 1, 0 ];
  let buffer;

  do {
    yield curr;
    buffer = curr;
    curr = prev + curr;
    prev = buffer;
  } while (curr < max);
}

const it = fibonacci(100);
let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}
