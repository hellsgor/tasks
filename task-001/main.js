const products = [
  { name: 'Телефон', price: 1500 },
  { name: 'Наушники', price: 500 },
  { name: 'Чехол', price: 300 },
  { name: 'Ноутбук', price: 45000 },
  { name: 'Мышка', price: 700 },
];

const maxPrice = 1000;

const { names, sum } = products.reduce(
  (acc, good) => {
    if (good.price < maxPrice) {
      acc.names.push(good.name.toUpperCase());
      acc.sum = acc.sum + good.price;
    }

    return acc;
  },
  { names: [], sum: 0 },
);

console.log(names);
console.log(sum);
