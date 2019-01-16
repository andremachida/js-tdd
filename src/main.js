const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => {
  return (b === 0) ? 'Its not possible division by zero' : a / b;
};

export {
  sum,
  sub,
  mult,
  div,
};
