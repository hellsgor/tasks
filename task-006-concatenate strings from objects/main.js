const objectsArrays = [
  [
    { value: 'hello', order: 1, expired: false },
    { value: 'world', order: 2, expired: false },
  ],
  [
    { value: 'aabb', order: 1, expired: false },
    { value: 'bbaa', order: 2, expired: false },
  ],
];

const results = ['olehdrw', 'ba'];

function check(result, index) {
  console.log(`checked res #${index}, ${result}:`, result === results[index]);
}

objectsArrays.forEach((item, idx) => {
  const res = getConcated(item);
  check(res, idx);
});

// -----------------------------------------------

function getConcated(arr) {
  return [
    ...new Set(
      arr
        .filter((item) => !item.expired)
        .sort((a, b) => a.order - b.order)
        .flatMap((item) => [...item.value].reverse()),
    ),
  ].join('');
}
