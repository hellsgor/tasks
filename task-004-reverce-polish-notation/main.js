const strings = ['8 2 / 3 +', '7 2 3 * -'];

strings.forEach((str) => {
  console.log(calc(str));
});

// --------------------------------------

function calc(str) {
  const tokens = str.trim().split(' ');
  console.log(tokens);

  const stack = [];

  tokens.forEach((token) => {
    if (!Number.isNaN(parseInt(token, 10))) {
      stack.push(Number(token));
    } else if (['+', '-', '/', '*'].includes(token)) {
      if (stack.length < 2) return 'Error in Syntax';

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
  });

  return stack.length === 1 ? stack[0] : 'Error in Syntax';
}
