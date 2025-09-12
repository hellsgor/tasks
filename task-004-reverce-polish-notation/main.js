const strings = [
  // '8 2 / 3 +',
  // '7 2 3 * -',
  '1 b + c -',
  // '7 2 3 1 + * -',
  // '11 -12 -',
  // '7 2 3 1 * - - 3 5 + -',
  // '1 1 + +',
  // '1 2 2 *',
];

strings.forEach((str) => {
  console.log(calc(str));
});

// --------------------------------------

function calc(str) {
  const tokens = str.trim().split(' ');

  const stack = [];

  for (let token of tokens) {
    console.log(stack);

    if (!Number.isNaN(parseInt(token, 10))) {
      stack.push(Number(token));
    } else if (['+', '-', '/', '*'].includes(token)) {
      if (stack.length < 2) {
        console.log('Error in Syntax');
        return 'Error in Syntax';
      }

      const b = stack.pop();
      const a = stack.pop();

      if (token === '/' && b === 0) return 'Division by zero';

      let res;

      switch (token) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = a / b;
          break;
      }

      stack.push(res);
    } else {
      return 'Error in Operands';
    }
  }

  return stack.length === 1 ? stack[0] : 'Error in Syntax';
}
