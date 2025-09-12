const strings = [
  'А роза упала на лапу Азора',
  'hello world',
  'что-то произошло',
  'foo-bar baz',
];

strings.forEach((str) => {
  console.log(capitalize(str));
});

// -------------------------------------

function capitalize(str) {
  return str
    .split(' ')
    .map((word) => {
      const arr = word.split('');
      return [arr[0].toUpperCase(), ...arr.slice(1, arr.length)].join('');
    })
    .join(' ');
}
